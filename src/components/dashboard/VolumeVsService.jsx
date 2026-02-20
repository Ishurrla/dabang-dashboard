import { Card, Text, Group, Box } from '@mantine/core';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { volumeServiceData } from '../../data/mockData';
import { useTranslation } from 'react-i18next';

export function VolumeVsService() {
  const { t } = useTranslation();
  return (
    <Card p="lg">
      <Text fw={700} size="md" c="dark" mb="md">{t('volume_vs_service')}</Text>
      <ResponsiveContainer width="100%" height={170}>
        <BarChart data={volumeServiceData} barSize={10} barCategoryGap="30%" margin={{ top: 0, right: 5, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis dataKey="label" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip />
          <Bar dataKey="volume" stackId="stack" fill="#00E096" radius={[0, 0, 0, 0]} name="Volume" />
          <Bar dataKey="service" stackId="stack" fill="#0095FF" radius={[4, 4, 0, 0]} name="Service Level" />
        </BarChart>
      </ResponsiveContainer>

      <Group gap="xl" mt="xs" justify="center">
        <Group gap="xs">
          <Box w={10} h={10} style={{ backgroundColor: '#0095FF', borderRadius: 2 }} />
          <Text size="xs" c="dimmed">{t('volume')}</Text>
          <Text size="xs" fw={700}>1,135</Text>
        </Group>
        <Group gap="xs">
          <Box w={10} h={10} style={{ backgroundColor: '#00E096', borderRadius: 2 }} />
          <Text size="xs" c="dimmed">{t('service')}</Text>
          <Text size="xs" fw={700}>635</Text>
        </Group>
      </Group>
    </Card>
  );
}
