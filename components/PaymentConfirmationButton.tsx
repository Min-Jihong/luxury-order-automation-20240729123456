"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PaymentConfirmationButtonProps {
  onConfirm: () => void;
}

export function PaymentConfirmationButton({ onConfirm }: PaymentConfirmationButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    onConfirm();
    setIsLoading(false);
  };

  return (
    <Button onClick={handleClick} disabled={isLoading} className="w-full">
      {isLoading ? "결제 처리 중..." : "결제 완료 확인"}
    </Button>
  );
}
