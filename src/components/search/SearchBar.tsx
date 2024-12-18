import React, { useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { SearchResults } from './SearchResults';

export function SearchBar() {
  const { searchQuery, setSearchQuery, searchResults } = useSearch();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchQuery('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setSearchQuery]);

  return (
    <div ref={searchRef} className="relative flex-1 max-w-2xl">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>
      
      <SearchResults 
        results={searchResults} 
        onClose={() => setSearchQuery('')} 
      />
    </div>
  );
}