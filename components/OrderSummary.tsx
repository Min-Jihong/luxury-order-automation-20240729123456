import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OrderSummaryProps {
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  total: number;
}

export function OrderSummary({ items, total }: OrderSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>주문 요약</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>{item.name} x {item.quantity}</span>
              <span>{item.price.toLocaleString()}원</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t flex justify-between items-center font-semibold text-lg">
          <span>총 결제 금액</span>
          <span>{total.toLocaleString()}원</span>
        </div>
      </CardContent>
    </Card>
  );
}
