import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';

interface SearchBarProps {
  onSearch: (term: string) => void;
  initialValue: string;
}

export default function SearchBar({ onSearch, initialValue }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
      <Input
        type="text"
        placeholder="상품명 또는 브랜드 검색..."
        className="pl-9 pr-4 py-2 rounded-md border border-gray-300 focus:border-black focus:ring-black"
        value={initialValue}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}