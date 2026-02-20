import { Card, Text, Group, Box } from '@mantine/core';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { satisfactionData } from '../../data/mockData';
import { useTranslation } from 'react-i18next';

export function CustomerSatisfaction() {
  const { t } = useTranslation();
  return (
    <Card p="lg" className="h-full">
      <Text fw={700} size="md" c="dark" mb="md">{t('customer_satisfaction')}</Text>
      <ResponsiveContainer width="100%" height={130}>
        <AreaChart data={satisfactionData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="fillLastMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#009DFF" stopOpacity={0.32} />
              <stop offset="95%" stopColor="#009DFF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="fillThisMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00E096" stopOpacity={0.32} />
              <stop offset="95%" stopColor="#00E096" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
          <Area
            type="monotone"
            dataKey="lastMonth"
            stroke="#009DFF"
            strokeWidth={2}
            fill="url(#fillLastMonth)"
            dot={{ r: 4, fill: '#009DFF', strokeWidth: 0 }}
            activeDot={{ r: 5 }}
            name="Last Month"
          />
          <Area
            type="monotone"
            dataKey="thisMonth"
            stroke="#00E096"
            strokeWidth={2}
            fill="url(#fillThisMonth)"
            dot={{ r: 4, fill: '#00E096', strokeWidth: 0 }}
            activeDot={{ r: 5 }}
            name="This Month"
          />
        </AreaChart>
      </ResponsiveContainer>

      <Group gap="xl" mt="xs" justify="center">
        <Group gap="xs">
          <Box w={10} h={10} style={{ backgroundColor: '#009DFF', borderRadius: 2 }} />
          <Text size="xs" c="dimmed">{t('last_month')}</Text>
          <Text size="xs" fw={600}>$3,004</Text>
        </Group>
        <Group gap="xs">
          <Box w={10} h={10} style={{ backgroundColor: '#00E096', borderRadius: 2 }} />
          <Text size="xs" c="dimmed">{t('this_month')}</Text>
          <Text size="xs" fw={600}>$4,504</Text>
        </Group>
      </Group>
    </Card>
  );
}
