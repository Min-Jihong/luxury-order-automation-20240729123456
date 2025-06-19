import { OrderItemCard } from "@/components/OrderItemCard";

interface Order {
  id: string;
  date: string;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
}

interface OrderListProps {
  orders: Order[];
}

export function OrderList({ orders }: OrderListProps) {
  if (orders.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-10">
        <p className="text-lg">주문 내역이 없습니다.</p>
        <p className="text-sm">새로운 주문을 시작해보세요!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {orders.map((order) => (
        <OrderItemCard key={order.id} order={order} />
      ))}
    </div>
  );
}
