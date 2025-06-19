"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface ShippingAddress {
  name: string;
  phone: string;
  address: string;
  postalCode: string;
}

interface ShippingAddressFormProps {
  onSubmit: (data: ShippingAddress) => void;
}

export function ShippingAddressForm({ onSubmit }: ShippingAddressFormProps) {
  const [formData, setFormData] = useState<ShippingAddress>({
    name: "",
    phone: "",
    address: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>배송지 정보</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">수령인 이름</Label>
            <Input id="name" type="text" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="phone">연락처</Label>
            <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="postalCode">우편번호</Label>
            <Input id="postalCode" type="text" value={formData.postalCode} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="address">주소</Label>
            <Input id="address" type="text" value={formData.address} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full">배송지 정보 저장</Button>
        </form>
      </CardContent>
    </Card>
  );
}
