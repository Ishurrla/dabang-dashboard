import { Card, Text } from '@mantine/core';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { revenueData } from '../../data/mockData';
import { useTranslation } from 'react-i18next';

export function TotalRevenue() {
  const { t } = useTranslation();
  return (
    <Card p="lg" className="h-full">
      <Text fw={700} size="md" c="dark" mb="md">{t('total_revenue')}</Text>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={revenueData} barSize={8} barGap={3} margin={{ top: 0, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 10 }} tickFormatter={(v) => v.slice(0, 3)} />
          <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `${v / 1000}k`} />
          <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="online" fill="#0095FF" radius={[4, 4, 0, 0]} name="Online Sales" />
          <Bar dataKey="offline" fill="#00E096" radius={[4, 4, 0, 0]} name="Offline Sales" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
