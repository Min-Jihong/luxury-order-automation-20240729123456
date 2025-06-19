"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function SupplierOrderForm() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplier, setSupplier] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName || !quantity || !supplier) {
      alert("모든 필수 필드를 입력해주세요.");
      return;
    }
    alert(`발주 요청 생성:\n상품명: ${productName}\n수량: ${quantity}\n발주처: ${supplier}\n비고: ${notes}`);
    setProductName("");
    setQuantity("");
    setSupplier("");
    setNotes("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="productName">상품명</Label>
        <Input
          id="productName"
          type="text"
          placeholder="발주할 상품명"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="quantity">수량</Label>
        <Input
          id="quantity"
          type="number"
          placeholder="수량"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          required
        />
      </div>
      <div>
        <Label htmlFor="supplier">발주처</Label>
        <Select value={supplier} onValueChange={setSupplier} required>
          <SelectTrigger id="supplier">
            <SelectValue placeholder="발주처 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="supplierA">발주처 A</SelectItem>
            <SelectItem value="supplierB">발주처 B</SelectItem>
            <SelectItem value="supplierC">발주처 C</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="notes">비고</Label>
        <Textarea
          id="notes"
          placeholder="추가 요청 사항"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <Button type="submit" className="w-full">발주 요청 생성</Button>
    </form>
  );
}
