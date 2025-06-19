import { OrderList } from "@/components/OrderList";

interface Order {
  id: string;
  date: string;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
}

const dummyOrders: Order[] = [
  {
    id: "20240729-001",
    date: "2024-07-29",
    total: 1250000,
    status: "delivered",
  },
  {
    id: "20240728-002",
    date: "2024-07-28",
    total: 890000,
    status: "shipped",
  },
  {
    id: "20240727-003",
    date: "2024-07-27",
    total: 2100000,
    status: "processing",
  },
  {
    id: "20240726-004",
    date: "2024-07-26",
    total: 550000,
    status: "pending",
  },
  {
    id: "20240725-005",
    date: "2024-07-25",
    total: 1500000,
    status: "cancelled",
  },
];

export default function MyOrdersPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">나의 주문 내역</h1>
      <OrderList orders={dummyOrders} />
    </div>
  );
}
