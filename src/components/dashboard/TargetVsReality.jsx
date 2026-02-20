import { Card, Text, Group } from '@mantine/core';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { targetRealityData } from '../../data/mockData';
import bagIcon from '../../assets/Bag 1.png';
import ticketIcon from '../../assets/Ticket Star 1.png';
import { useTranslation } from 'react-i18next';

export function TargetVsReality() {
  const { t } = useTranslation();
  return (
    <Card p="lg" className="h-full">
      <Text fw={700} size="md" c="dark" mb="md">{t('target_vs_reality')}</Text>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={targetRealityData} barSize={10} barGap={3} margin={{ top: 0, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => `${v / 1000}k`} />
          <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
          <Bar dataKey="reality" fill="#4AB58E" radius={[4, 4, 0, 0]} name="Reality Sales" />
          <Bar dataKey="target" fill="#FFCF00" radius={[4, 4, 0, 0]} name="Target Sales" />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex gap-4 mt-3">
        <Group gap="xs" align="flex-start">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#E2FFF3' }}>
            <img src={bagIcon} alt="Reality Sales" className="w-4 h-4 object-contain" />
          </div>
          <div>
            <Text size="xs" fw={600}>{t('reality')}</Text>
            <Text size="xs" c="dimmed">Global</Text>
            <Text size="xs" fw={700}>8,823</Text>
          </div>
        </Group>
        <Group gap="xs" align="flex-start">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#FFF4DE' }}>
            <img src={ticketIcon} alt="Target Sales" className="w-4 h-4 object-contain" />
          </div>
          <div>
            <Text size="xs" fw={600}>{t('target')}</Text>
            <Text size="xs" c="dimmed">Commercial</Text>
            <Text size="xs" fw={700}>12,122</Text>
          </div>
        </Group>
      </div>
    </Card>
  );
}