import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Botanical Atelier",
  description: "Premium Botanical Perfumery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${manrope.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container antialiased">
        {children}
      </body>
    </html>
  );
}
