"use client";
import { OrderSummary } from "@/components/OrderSummary";
import { ShippingAddressForm } from "@/components/ShippingAddressForm";
import { BankTransferInfo } from "@/components/BankTransferInfo";
import { PaymentConfirmationButton } from "@/components/PaymentConfirmationButton";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ShippingAddress {
  name: string;
  phone: string;
  address: string;
  postalCode: string;
}

export default function OrderPage() {
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress | null>(null);

  const sampleOrderItems: OrderItem[] = [
    { id: "1", name: "명품 가방 A", price: 2500000, quantity: 1 },
    { id: "2", name: "명품 지갑 B", price: 800000, quantity: 1 },
  ];
  const orderTotal = sampleOrderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleShippingSubmit = (data: ShippingAddress) => {
    setShippingAddress(data);
    alert("배송지 정보가 저장되었습니다.");
  };

  const handlePaymentConfirm = () => {
    if (!shippingAddress) {
      alert("배송지 정보를 먼저 입력해주세요.");
      return;
    }
    alert("결제가 성공적으로 확인되었습니다! 주문이 처리됩니다.");
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">주문/결제</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <OrderSummary items={sampleOrderItems} total={orderTotal} />
          <ShippingAddressForm onSubmit={handleShippingSubmit} />
        </div>

        <div className="space-y-6">
          <BankTransferInfo
            bankName="신한은행"
            accountNumber="110-123-456789"
            accountHolder="주식회사 럭셔리오더"
          />
          {shippingAddress && (
            <Card>
              <CardHeader>
                <CardTitle>입력된 배송지 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>수령인:</strong> {shippingAddress.name}</p>
                <p><strong>연락처:</strong> {shippingAddress.phone}</p>
                <p><strong>주소:</strong> ({shippingAddress.postalCode}) {shippingAddress.address}</p>
              </CardContent>
            </Card>
          )}
          <PaymentConfirmationButton onConfirm={handlePaymentConfirm} />
        </div>
      </div>
    </div>
  );
}
