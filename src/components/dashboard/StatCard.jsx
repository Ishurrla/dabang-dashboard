import { Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import subtractIcon from '../../assets/subtract.png';
import unionIcon from '../../assets/union.png';
import groupIcon from '../../assets/group.png';
import personIcon from '../../assets/person.png';

const ICON_MAP = {
  'Total Sales':    subtractIcon,
  'Total Order':    unionIcon,
  'Product Sold':   groupIcon,
  'New Customers':  personIcon,
};

const LABEL_KEY_MAP = {
  'Total Sales':   'total_sales',
  'Total Order':   'total_order',
  'Product Sold':  'product_sold',
  'New Customers': 'new_customers',
};

export function StatCard({ value, label, iconBg, cardBg }) {
  const { t } = useTranslation();
  const iconSrc = ICON_MAP[label];

  return (
    <div className="px-4 py-3 rounded-2xl" style={{ backgroundColor: cardBg }}>
      <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: iconBg }}>
        <img src={iconSrc} alt={label} className="w-4 h-4 object-contain" />
      </div>
      <Text size="lg" fw={800} c="dark" lh={1}>{value}</Text>
      <Text size="xs" c="dimmed" mt={4} mb={6}>{t(LABEL_KEY_MAP[label] ?? label)}</Text>
      <div className="flex items-center gap-1">
        <p className="text-[10px]">10%</p>
        <p className="text-[10px]">{t('from_yesterday')}</p>
      </div>
    </div>
  );
}
