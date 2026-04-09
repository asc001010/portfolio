import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "내꼬 - 프리미엄 스마트 개인 창고",
  description: "언제 어디서든 당신의 소중한 짐을 안전하게 보관하세요. 내꼬 교대점 실시간 현황 및 이용 안내.",
};

export default function MygoLayout({ children }) {
  return (
    <div className={`${inter.variable} ${outfit.variable} antialiased`}>
      {children}
    </div>
  );
}
