"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export function DeliveryStatusUpdater() {
  const [orderId, setOrderId] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId || !deliveryStatus) {
      alert("주문 ID와 배송 상태를 입력해주세요.");
      return;
    }
    alert(`배송 상태 업데이트:\n주문 ID: ${orderId}\n운송장 번호: ${trackingNumber || '없음'}\n상태: ${deliveryStatus}`);
    setOrderId("");
    setTrackingNumber("");
    setDeliveryStatus("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="orderId">주문 ID</Label>
        <Input
          id="orderId"
          type="text"
          placeholder="업데이트할 주문 ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="trackingNumber">운송장 번호 (선택 사항)</Label>
        <Input
          id="trackingNumber"
          type="text"
          placeholder="운송장 번호"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="deliveryStatus">배송 상태</Label>
        <Select value={deliveryStatus} onValueChange={setDeliveryStatus} required>
          <SelectTrigger id="deliveryStatus">
            <SelectValue placeholder="배송 상태 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">배송 준비 중</SelectItem>
            <SelectItem value="shipped">배송 중</SelectItem>
            <SelectItem value="delivered">배송 완료</SelectItem>
            <SelectItem value="returned">반품</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">상태 업데이트</Button>
    </form>
  );
}
