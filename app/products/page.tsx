import { useState, useEffect, useMemo } from 'react';
import ProductGrid from '@/components/ProductGrid';
import SearchBar from '@/components/SearchBar';
import FilterSidebar from '@/components/FilterSidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  category: string;
}

const DUMMY_PRODUCTS: Product[] = [
  { id: '1', name: '클래식 플랩 백', brand: '샤넬', price: 12000000, imageUrl: '/images/chanel_classic.jpg', category: '가방' },
  { id: '2', name: '레이디 디올 백', brand: '디올', price: 8500000, imageUrl: '/images/dior_lady.jpg', category: '가방' },
  { id: '3', name: '루이비통 스피디 25', brand: '루이비통', price: 2500000, imageUrl: '/images/louis_speedy.jpg', category: '가방' },
  { id: '4', name: '에르메스 버킨 백', brand: '에르메스', price: 30000000, imageUrl: '/images/hermes_birkin.jpg', category: '가방' },
  { id: '5', name: '구찌 마몬트 미니 백', brand: '구찌', price: 1800000, imageUrl: '/images/gucci_marmont.jpg', category: '가방' },
  { id: '6', name: '프라다 리나일론 백팩', brand: '프라다', price: 2200000, imageUrl: '/images/prada_re_nylon.jpg', category: '가방' },
  { id: '7', name: '셀린느 트리오페 지갑', brand: '셀린느', price: 900000, imageUrl: '/images/celine_triomphe.jpg', category: '지갑' },
  { id: '8', name: '생로랑 카산드라 백', brand: '생로랑', price: 3200000, imageUrl: '/images/ysl_cassandra.jpg', category: '가방' },
  { id: '9', name: '펜디 바게트 백', brand: '펜디', price: 3500000, imageUrl: '/images/fendi_baguette.jpg', category: '가방' },
  { id: '10', name: '발렌시아가 아워글래스 백', brand: '발렌시아가', price: 2800000, imageUrl: '/images/balenciaga_hourglass.jpg', category: '가방' },
  { id: '11', name: '몽클레르 마야 패딩', brand: '몽클레르', price: 2000000, imageUrl: '/images/moncler_maya.jpg', category: '의류' },
  { id: '12', name: '톰포드 선글라스', brand: '톰포드', price: 500000, imageUrl: '/images/tomford_sunglasses.jpg', category: '액세서리' }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    categories: [] as string[],
    brands: [] as string[],
    minPrice: '',
    maxPrice: '',
  });
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none');

  const allCategories = useMemo(() => Array.from(new Set(DUMMY_PRODUCTS.map(p => p.category))), []);
  const allBrands = useMemo(() => Array.from(new Set(DUMMY_PRODUCTS.map(p => p.brand))), []);

  const filteredAndSortedProducts = useMemo(() => {
    let currentProducts = DUMMY_PRODUCTS;

    // Apply search
    if (searchTerm) {
      currentProducts = currentProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply filters
    if (filters.categories.length > 0) {
      currentProducts = currentProducts.filter(product =>
        filters.categories.includes(product.category)
      );
    }
    if (filters.brands.length > 0) {
      currentProducts = currentProducts.filter(product =>
        filters.brands.includes(product.brand)
      );
    }
    if (filters.minPrice) {
      const min = parseFloat(filters.minPrice);
      if (!isNaN(min)) {
        currentProducts = currentProducts.filter(product => product.price >= min);
      }
    }
    if (filters.maxPrice) {
      const max = parseFloat(filters.maxPrice);
      if (!isNaN(max)) {
        currentProducts = currentProducts.filter(product => product.price <= max);
      }
    }

    // Apply sort
    if (sortOrder === 'asc') {
      currentProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      currentProducts.sort((a, b) => b.price - a.price);
    }

    return currentProducts;
  }, [searchTerm, filters, sortOrder]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <h1 className="text-2xl font-bold text-gray-900">명품 상품 목록</h1>
          <div className="flex items-center gap-4">
            <SearchBar onSearch={setSearchTerm} initialValue={searchTerm} />
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">필터 열기</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <FilterSidebar
                    allCategories={allCategories}
                    allBrands={allBrands}
                    initialFilters={filters}
                    onFilterChange={handleFilterChange}
                    sortOrder={sortOrder}
                    onSortChange={setSortOrder}
                  />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4 md:px-6 flex flex-col md:flex-row gap-8">
        <aside className="hidden md:block w-64 flex-shrink-0">
          <FilterSidebar
            allCategories={allCategories}
            allBrands={allBrands}
            initialFilters={filters}
            onFilterChange={handleFilterChange}
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
          />
        </aside>
        <section className="flex-1">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center text-gray-600 text-lg py-10">
              검색 결과가 없습니다.
            </div>
          ) : (
            <ProductGrid products={filteredAndSortedProducts} />
          )}
        </section>
      </main>
    </div>
  );
}