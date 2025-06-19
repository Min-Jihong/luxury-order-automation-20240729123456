import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderManagementTable } from "@/components/OrderManagementTable";
import { ProductManagementTable } from "@/components/ProductManagementTable";
import { SupplierOrderForm } from "@/components/SupplierOrderForm";
import { DeliveryStatusUpdater } from "@/components/DeliveryStatusUpdater";

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8 lg:p-10">
      <h1 className="mb-8 text-4xl font-extrabold text-gray-900">관리자 대시보드</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="lg:col-span-2 xl:col-span-3">
          <CardHeader>
            <CardTitle className="text-2xl">주문 관리</CardTitle>
          </CardHeader>
          <CardContent>
            <OrderManagementTable />
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 xl:col-span-3">
          <CardHeader>
            <CardTitle className="text-2xl">상품 관리</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductManagementTable />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">발주 요청 생성</CardTitle>
          </CardHeader>
          <CardContent>
            <SupplierOrderForm />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">배송 상태 업데이트</CardTitle>
          </CardHeader>
          <CardContent>
            <DeliveryStatusUpdater />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
