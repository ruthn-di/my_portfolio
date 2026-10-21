import os
import re
import smtplib
import ssl
from email.message import EmailMessage
from pathlib import Path

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS


# Charge les réglages du fichier .env placé dans le dossier backend.
load_dotenv(Path(__file__).with_name(".env"))

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024

allowed_origins = [
    origin.strip()
    for origin in os.getenv("FRONTEND_ORIGIN", "http://localhost:3000").split(",")
    if origin.strip()
]
CORS(app, resources={r"/api/*": {"origins": allowed_origins}})


def is_valid_email(address: str) -> bool:
    """Vérifie simplement la forme de l'adresse avant de l'utiliser."""
    return re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", address) is not None


@app.post("/api/contact")
def send_contact_email():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify({"error": "Invalid request."}), 400

    # Ce champ caché reste vide pour les visiteurs. Il aide à filtrer les robots.
    if data.get("website", ""):
        return jsonify({"message": "Message sent."}), 200

    name = str(data.get("name", "")).strip()
    sender_email = str(data.get("email", "")).strip()
    subject = str(data.get("subject", "")).strip()
    message = str(data.get("message", "")).strip()

    if not name or len(name) > 100:
        return jsonify({"error": "Please enter a name of 100 characters or fewer."}), 400
    if not is_valid_email(sender_email) or len(sender_email) > 254:
        return jsonify({"error": "Please enter a valid email address."}), 400
    if not subject or len(subject) > 150 or "\n" in subject or "\r" in subject:
        return jsonify({"error": "Please enter a valid subject."}), 400
    if not message or len(message) > 5000:
        return jsonify({"error": "Please enter a message of 5,000 characters or fewer."}), 400

    email_address = os.getenv("GMAIL_EMAIL")
    # Google affiche souvent le mot de passe d’application avec des espaces.
    email_password = os.getenv("GMAIL_PASSWORD", "").replace(" ", "")
    recipient = os.getenv("CONTACT_EMAIL", email_address or "")
    if not email_address or not email_password or not recipient:
        app.logger.error("Email settings are missing from the backend environment.")
        return jsonify({"error": "Email service is not configured."}), 503

    email = EmailMessage()
    email["Subject"] = f"Portfolio contact: {subject}"
    email["From"] = email_address
    email["To"] = recipient
    email["Reply-To"] = sender_email
    email.set_content(f"Name: {name}\nEmail: {sender_email}\n\n{message}")

    try:
        smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))

        with smtplib.SMTP(smtp_host, smtp_port, timeout=15) as smtp:
            smtp.ehlo()
            smtp.starttls(context=ssl.create_default_context())
            smtp.ehlo()
            smtp.login(email_address, email_password)
            smtp.send_message(email)
    except (OSError, smtplib.SMTPException):
        app.logger.exception("Could not send the portfolio contact email.")
        return jsonify({"error": "Could not send your message. Please try again later."}), 502

    return jsonify({"message": "Message sent."}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "5000")))
