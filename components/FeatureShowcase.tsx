import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, CreditCard, Truck, ClipboardList, ShoppingBag, Users } from "lucide-react";

export default function FeatureShowcase() {
  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-purple-600" />,
      title: "명품 상품 주문",
      description: "다양한 명품 상품을 손쉽게 주문하고 관리하세요.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-600" />,
      title: "계좌 이체 결제 처리",
      description: "안전하고 효율적인 계좌 이체 결제 시스템을 제공합니다.",
    },
    {
      icon: <Package className="w-8 h-8 text-purple-600" />,
      title: "발주처 발주 요청",
      description: "자동화된 시스템으로 발주처에 신속하게 발주를 요청합니다.",
    },
    {
      icon: <Truck className="w-8 h-8 text-purple-600" />,
      title: "배송 자동화",
      description: "주문부터 배송까지 모든 과정을 자동으로 처리하여 효율성을 높입니다.",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-purple-600" />,
      title: "주문 관리",
      description: "모든 주문 내역을 한눈에 확인하고 체계적으로 관리할 수 있습니다.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-purple-600" />,
      title: "상품 관리",
      description: "상품 정보, 재고, 가격 등을 손쉽게 등록하고 수정하세요.",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "고객 관리",
      description: "고객 정보를 효율적으로 관리하고 맞춤형 서비스를 제공합니다.",
    },
  ];

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 text-gray-900 dark:text-white">
          주요 기능
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800 rounded-lg">
              <CardHeader className="flex flex-col items-center text-center p-6">
                <div className="mb-4 p-3 rounded-full bg-purple-100 dark:bg-purple-900/20">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
