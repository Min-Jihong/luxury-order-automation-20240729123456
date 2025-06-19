"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Order {
  id: string;
  customerName: string;
  productName: string;
  amount: number;
  status: string;
  orderDate: string;
}

const initialOrders: Order[] = [
  { id: "ORD001", customerName: "김철수", productName: "샤넬 클래식 플랩 백", amount: 8500000, status: "결제 완료", orderDate: "2024-07-20" },
  { id: "ORD002", customerName: "이영희", productName: "루이비통 스피디 25", amount: 2500000, status: "발주 대기", orderDate: "2024-07-21" },
  { id: "ORD003", customerName: "박민수", productName: "에르메스 버킨 30", amount: 20000000, status: "배송 중", orderDate: "2024-07-22" },
  { id: "ORD004", customerName: "최지영", productName: "구찌 마몬트 미니 백", amount: 1800000, status: "배송 완료", orderDate: "2024-07-23" },
  { id: "ORD005", customerName: "정우성", productName: "프라다 나일론 백팩", amount: 1500000, status: "결제 대기", orderDate: "2024-07-24" },
];

export function OrderManagementTable() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const handleViewDetails = (orderId: string) => {
    alert(`주문 ID: ${orderId} 상세 보기`);
  };

  const handleUpdateStatus = (orderId: string) => {
    alert(`주문 ID: ${orderId} 상태 업데이트`);
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>주문 ID</TableHead>
            <TableHead>고객명</TableHead>
            <TableHead>상품명</TableHead>
            <TableHead className="text-right">금액</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>주문일</TableHead>
            <TableHead className="text-right">액션</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{order.productName}</TableCell>
              <TableCell className="text-right">{order.amount.toLocaleString()}원</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.orderDate}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm" onClick={() => handleViewDetails(order.id)}>상세</Button>
                <Button variant="secondary" size="sm" onClick={() => handleUpdateStatus(order.id)}>상태 변경</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
