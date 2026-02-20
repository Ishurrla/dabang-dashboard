import { Card, Text } from '@mantine/core';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { visitorData } from '../../data/mockData';
import { useTranslation } from 'react-i18next';
export function VisitorInsights() {
  const { t } = useTranslation();
  return (
    <Card p="lg" className="h-full">
      <Text fw={700} size="md" c="dark" mb="md">{t('visitor_insights')}</Text>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={visitorData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
          <Line type="monotone" dataKey="loyal" stroke="#A700FF" strokeWidth={2} dot={false} name="Loyal Customers" />
          <Line type="monotone" dataKey="newUsers" stroke="#EF4444" strokeWidth={2} dot={false} name="New Customers" />
          <Line type="monotone" dataKey="unique" stroke="#3CD856" strokeWidth={2} dot={false} name="Unique Customers" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
