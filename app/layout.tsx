import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxury Order Automation",
  description: "명품 주문, 계좌 이체 결제 처리, 발주처 발주 요청, 배송 자동화를 위한 웹 애플리케이션입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>{children}</body>
    </html>
  );
}
