import React from 'react';
import { Button } from "@/components/atoms/Button";
import { SearchBar } from "@/components/molecules/SearchBar";

interface HeaderProps {
  onSearch: (query: string) => void;
  onLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, onLogin }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">로고</h1>
          </div>
          
          <div className="flex-1 max-w-xl mx-8">
            <SearchBar onSearch={onSearch} />
          </div>
          
          <div className="flex items-center gap-4">
            <Button label="로그인" onClick={onLogin} />
          </div>
        </div>
      </div>
    </header>
  );
};
