import { TextInput } from '@mantine/core';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function SearchBar({ fullWidth = false }) {
  const { t } = useTranslation();
  return (
    <TextInput
      placeholder={t('search')}
      leftSection={<Search size={15} className="text-[#5D5FEF]" />}
      radius="xl"
      size="sm"
      className={fullWidth ? 'w-full' : 'w-72'}
      styles={{
        input: {
          backgroundColor: '#f8f9fa',
          border: '1px solid #e9ecef',
        },
      }}
    />
  );
}
