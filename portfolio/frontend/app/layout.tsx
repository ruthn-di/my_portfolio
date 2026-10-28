import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WYRN | Web & Mobile Developer",
  description: "A Web & Mobile Developer portfolio showcasing frontend projects, technical skills, and experience in modern web and mobile application development.",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
