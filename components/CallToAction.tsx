import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-gradient-to-r from-purple-700 to-indigo-700 text-white text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          럭셔리 비즈니스를 한 단계 업그레이드하세요
        </h2>
        <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          지금 바로 가입하고 명품 주문 자동화의 혁신을 경험해보세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="px-8 py-3 text-lg font-semibold bg-white text-purple-700 hover:bg-gray-100 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            <Link href="/signup">회원가입</Link>
          </Button>
          <Button asChild variant="outline" className="px-8 py-3 text-lg font-semibold border-2 border-white text-white bg-transparent hover:bg-white hover:text-purple-700 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            <Link href="/login">로그인</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
