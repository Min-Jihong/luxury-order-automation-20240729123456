import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface OrderItemCardProps {
  order: {
    id: string;
    date: string;
    total: number;
    status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  };
}

const getStatusVariant = (status: string) => {
  switch (status) {
    case "delivered":
      return "default";
    case "shipped":
      return "secondary";
    case "processing":
      return "outline";
    case "pending":
      return "destructive";
    case "cancelled":
      return "destructive";
    default:
      return "default";
  }
};

export function OrderItemCard({ order }: OrderItemCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">주문 #{order.id}</CardTitle>
        <Badge variant={getStatusVariant(order.status)} className="capitalize">
          {order.status === "pending" ? "결제 대기" :
           order.status === "processing" ? "처리 중" :
           order.status === "shipped" ? "배송 중" :
           order.status === "delivered" ? "배송 완료" :
           order.status === "cancelled" ? "취소됨" : order.status}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>주문일:</span>
          <span>{order.date}</span>
        </div>
        <div className="flex justify-between text-lg font-bold">
          <span>총 금액:</span>
          <span>₩{order.total.toLocaleString()}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/my-orders/${order.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            주문 상세 보기
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
