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

export default function SecondProjectLayout({ children }) {
  return (
    <div className={`${notoSerif.variable} ${manrope.variable} min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container antialiased`}>
      {children}
    </div>
  );
}
