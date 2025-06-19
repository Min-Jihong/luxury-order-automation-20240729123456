import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-60 bg-gray-100 flex items-center justify-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.brand}</p>
        <p className="text-xl font-bold text-gray-800 mt-2">{product.price.toLocaleString()}원</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
          자세히 보기
        </button>
      </CardFooter>
    </Card>
  );
}