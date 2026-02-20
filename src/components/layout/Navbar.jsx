import { useState } from 'react';
import { Text, ActionIcon } from '@mantine/core';
import { Bell, Menu, Search, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '../navbar/SearchBar';
import { UserMenu } from '../navbar/UserMenu';
import { LanguageSelector } from '../navbar/LanguageSelector';

export function Navbar({ onMenuToggle }) {
  const { t } = useTranslation();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 shrink-0">
      <div className="h-16 px-4 md:px-6 flex items-center justify-between gap-2">

        {/* Left: hamburger (mobile only) + title */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onMenuToggle}
            className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 border-none bg-transparent cursor-pointer"
          >
            <Menu size={20} className="text-gray-600" />
          </button>
          <Text fw={700} size="xl" c="dark">{t('dashboard')}</Text>
        </div>

        {/* Center: search bar — only on lg+ (always visible) */}
        <div className="hidden lg:block flex-1 max-w-xs mx-4">
          <SearchBar fullWidth />
        </div>

        {/* Right: always visible actions */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Search toggle — visible on mobile and tablet (below lg) */}
          <button
            onClick={() => setSearchOpen((o) => !o)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 border-none bg-transparent cursor-pointer text-[#5D5FEF]"
          >
            {searchOpen ? <X size={19} /> : <Search size={19} />}
          </button>

          <LanguageSelector />

          <div className="w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80" style={{ backgroundColor: '#FFFAF1' }}>
            <Bell size={19} className="text-[#FFA412]" />
          </div>

          <UserMenu />
        </div>
      </div>

      {/* Expandable search bar — mobile and tablet (below lg) */}
      {searchOpen && (
        <div className="lg:hidden px-4 pb-3">
          <SearchBar fullWidth />
        </div>
      )}
    </header>
  );
}
