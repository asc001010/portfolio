import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "프리스틴 에디토리얼 | 프리미엄 클리닝 서비스",
  description: "청소 이상의 가치를 전달합니다. 프리미엄 클리닝 서비스.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${plusJakartaSans.variable} ${manrope.variable} font-body bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container`}>
        {children}
      </body>
    </html>
  );
}
