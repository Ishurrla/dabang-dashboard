import { Card, Text } from '@mantine/core';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { useTranslation } from 'react-i18next';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Highlighted country IDs (ISO numeric): USA, India, Brazil, Germany, Australia
const HIGHLIGHTS = {
  840: '#FFA800',
  360: '#0BB783',
  682: '#00AB9A',
  156: '#8950FC',
  180: '#6993FF',
  76: '#F64E60',
};

export function SalesMapping() {
  const { t } = useTranslation();
  return (
    <Card p="md" className="h-full">
      <Text fw={700} size="md" c="dark" mb="sm">{t('sales_mapping')}</Text>
      <div className="w-full overflow-hidden">
      <ComposableMap
        projectionConfig={{ scale: 155, center: [0, 10] }}
        width={800}
        height={380}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={HIGHLIGHTS[Number(geo.id)] ?? '#E8EAF6'}
                stroke="#fff"
                strokeWidth={0.4}
                style={{
                  default: { outline: 'none' },
                  hover: { outline: 'none', fill: '#6366F1' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      </div>
    </Card>
  );
}
