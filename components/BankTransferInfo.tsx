import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface BankTransferInfoProps {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
}

export function BankTransferInfo({ bankName, accountNumber, accountHolder }: BankTransferInfoProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>계좌 이체 정보</CardTitle>
        <CardDescription>아래 계좌로 총 결제 금액을 입금해주세요.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <span className="font-medium">은행명</span>
          <span>{bankName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">계좌번호</span>
          <span>{accountNumber}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">예금주</span>
          <span>{accountHolder}</span>
        </div>
      </CardContent>
    </Card>
  );
}
