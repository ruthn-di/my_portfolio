# Backend du formulaire de contact

Cette API Flask reçoit les messages du formulaire et les envoie avec Gmail.

## Démarrer l’API

Dans un terminal, placez-vous dans `portfolio/backend`, puis exécutez :

```powershell
py -m venv .venv-windows
.venv-windows\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
```

Ouvrez `.env` et renseignez `GMAIL_EMAIL`, `GMAIL_PASSWORD` et `CONTACT_EMAIL`.
Pour Gmail, utilisez un mot de passe d’application. Ne partagez pas le fichier `.env`.

Lancez ensuite l’API :

```powershell
python app.py
```

Le serveur écoute sur `http://localhost:5000`.

## Démarrer le frontend

Le formulaire utilise `http://localhost:5000` par défaut. Pour une autre adresse,
créez `portfolio/frontend/.env.local` et ajoutez :

```text
NEXT_PUBLIC_API_URL=https://adresse-de-votre-api
```

En production, réglez aussi `FRONTEND_ORIGIN` dans le backend sur l’adresse du
site frontend.
