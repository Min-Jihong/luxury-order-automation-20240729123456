import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';

interface FilterSidebarProps {
  allCategories: string[];
  allBrands: string[];
  initialFilters: {
    categories: string[];
    brands: string[];
    minPrice: string;
    maxPrice: string;
  };
  onFilterChange: (filters: any) => void;
  sortOrder: 'asc' | 'desc' | 'none';
  onSortChange: (order: 'asc' | 'desc' | 'none') => void;
}

export default function FilterSidebar({
  allCategories,
  allBrands,
  initialFilters,
  onFilterChange,
  sortOrder,
  onSortChange,
}: FilterSidebarProps) {
  const handleCategoryChange = (category: string, isChecked: boolean) => {
    const newCategories = isChecked
      ? [...initialFilters.categories, category]
      : initialFilters.categories.filter(c => c !== category);
    onFilterChange({ categories: newCategories });
  };

  const handleBrandChange = (brand: string, isChecked: boolean) => {
    const newBrands = isChecked
      ? [...initialFilters.brands, brand]
      : initialFilters.brands.filter(b => b !== brand);
    onFilterChange({ brands: newBrands });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ [e.target.name]: e.target.value });
  };

  return (
    <ScrollArea className="h-full pr-4">
      <div className="flex flex-col gap-6 py-4">
        <div className="pb-4 border-b">
          <h3 className="text-lg font-semibold mb-3">정렬</h3>
          <RadioGroup value={sortOrder} onValueChange={onSortChange} className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="sort-none" />
              <Label htmlFor="sort-none">기본</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="asc" id="sort-asc" />
              <Label htmlFor="sort-asc">가격 낮은 순</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="desc" id="sort-desc" />
              <Label htmlFor="sort-desc">가격 높은 순</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="pb-4 border-b">
          <h3 className="text-lg font-semibold mb-3">카테고리</h3>
          <div className="flex flex-col space-y-2">
            {allCategories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`category-${category}`}
                  checked={initialFilters.categories.includes(category)}
                  onChange={e => handleCategoryChange(category, e.target.checked)}
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <label htmlFor={`category-${category}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="pb-4 border-b">
          <h3 className="text-lg font-semibold mb-3">브랜드</h3>
          <div className="flex flex-col space-y-2">
            {allBrands.map(brand => (
              <div key={brand} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`brand-${brand}`}
                  checked={initialFilters.brands.includes(brand)}
                  onChange={e => handleBrandChange(brand, e.target.checked)}
                  className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <label htmlFor={`brand-${brand}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">가격 범위</h3>
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              placeholder="최소"
              name="minPrice"
              value={initialFilters.minPrice}
              onChange={handlePriceChange}
              className="w-1/2"
            />
            <span>-</span>
            <Input
              type="number"
              placeholder="최대"
              name="maxPrice"
              value={initialFilters.maxPrice}
              onChange={handlePriceChange}
              className="w-1/2"
            />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}