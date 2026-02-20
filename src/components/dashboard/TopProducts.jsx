import { Card, Text, Table, Progress, Badge } from '@mantine/core';
import { topProductsData } from '../../data/mockData';
import { useTranslation } from 'react-i18next';

const PROGRESS_COLORS = ['#0095FF', '#00E096', '#884DFF', '#FF8F0D'];

export function TopProducts() {
  const { t } = useTranslation();
  return (
    <Card p="lg">
      <Text fw={700} size="md" c="dark" mb="md">{t('top_products')}</Text>
      <Table withColumnBorders={false} highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ fontSize: 11 }}>#</Table.Th>
            <Table.Th style={{ fontSize: 11 }}>Name</Table.Th>
            <Table.Th style={{ fontSize: 11 }}>Popularity</Table.Th>
            <Table.Th style={{ fontSize: 11 }}>Sales</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {topProductsData.map((row, i) => (
            <Table.Tr key={row.rank}>
              <Table.Td>
                <Text size="xs" c="dimmed">{row.rank}</Text>
              </Table.Td>
              <Table.Td>
                <Text size="xs">{row.name}</Text>
              </Table.Td>
              <Table.Td style={{ minWidth: 100 }}>
                <Progress
                  value={row.popularity}
                  size="sm"
                  color={PROGRESS_COLORS[i]}
                  radius="xl"
                  styles={{
                    root: {
                      backgroundColor: `${PROGRESS_COLORS[i]}15`,
                    },
                  }}
                />
              </Table.Td>
              <Table.Td>
                <Badge
                  variant="light"
                  color={row.salesPercent > 30 ? 'green' : row.salesPercent > 20 ? 'blue' : 'orange'}
                  size="sm"
                  radius="sm"
                  miw={42}
                  styles={{ label: { overflow: 'visible' } }}
                >
                  {row.salesPercent}%
                </Badge>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Card>
  );
}