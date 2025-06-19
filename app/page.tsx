import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Luxury Order Automation</CardTitle>
          <CardDescription className="mt-2 text-gray-600">
            명품 주문, 계좌 이체 결제 처리, 발주처 발주 요청, 배송 자동화를 위한 웹 애플리케이션입니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">관리자 대시보드로 이동하여 주문, 상품, 발주 및 배송을 관리하세요.</p>
          <Link href="/admin/dashboard" passHref>
            <Button className="w-full py-3 text-lg">관리자 대시보드 바로가기</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
