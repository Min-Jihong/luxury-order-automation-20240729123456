"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48 bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 drop-shadow-lg">
          럭셔리 오더 자동화
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          명품 주문, 계좌 이체 결제 처리, 발주처 발주 요청, 배송 자동화를 위한 혁신적인 웹 애플리케이션입니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            <Link href="/signup">지금 시작하기</Link>
          </Button>
          <Button asChild variant="outline" className="px-8 py-3 text-lg font-semibold border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            <Link href="/login">로그인</Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("/images/luxury-bg.jpg")' }}></div>
    </section>
  );
}
