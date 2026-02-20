import { Card, Text, Button, Group } from '@mantine/core';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { StatCard } from './StatCard';
import { statsData } from '../../data/mockData';

export function TodaysSales() {
  const { t } = useTranslation();
  return (
    <Card p="lg" className="h-full">
      <Group justify="space-between" mb="lg">
        <div>
          <Text fw={700} size="lg" c="dark">{t('todays_sales')}</Text>
          <Text size="xs" c="dimmed">{t('sales_summary')}</Text>
        </div>
        <Button
          variant="outline"
          size="xs"
          radius="md"
          leftSection={<Download size={13} />}
          color="gray"
        >
          {t('export')}
        </Button>
      </Group>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {statsData.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </Card>
  );
}
