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

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  stock: number;
}

const initialProducts: Product[] = [
  { id: "PROD001", name: "샤넬 클래식 플랩 백", brand: "샤넬", price: 8500000, stock: 5 },
  { id: "PROD002", name: "루이비통 스피디 25", brand: "루이비통", price: 2500000, stock: 12 },
  { id: "PROD003", name: "에르메스 버킨 30", brand: "에르메스", price: 20000000, stock: 2 },
  { id: "PROD004", name: "구찌 마몬트 미니 백", brand: "구찌", price: 1800000, stock: 8 },
  { id: "PROD005", name: "프라다 나일론 백팩", brand: "프라다", price: 1500000, stock: 15 },
];

export function ProductManagementTable() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleEditProduct = (productId: string) => {
    alert(`상품 ID: ${productId} 수정`);
  };

  const handleDeleteProduct = (productId: string) => {
    if (confirm(`상품 ID: ${productId} 를 삭제하시겠습니까?`)) {
      setProducts(products.filter((p) => p.id !== productId));
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>상품 ID</TableHead>
            <TableHead>상품명</TableHead>
            <TableHead>브랜드</TableHead>
            <TableHead className="text-right">가격</TableHead>
            <TableHead className="text-right">재고</TableHead>
            <TableHead className="text-right">액션</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell className="text-right">{product.price.toLocaleString()}원</TableCell>
              <TableCell className="text-right">{product.stock}개</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm" onClick={() => handleEditProduct(product.id)}>수정</Button>
                <Button variant="destructive" size="sm" onClick={() => handleDeleteProduct(product.id)}>삭제</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
