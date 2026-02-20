import { useState } from 'react';
import { Popover, Stack, Text, Divider } from '@mantine/core';
import { ChevronDown, Check } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en-US', countryCode: 'US', label: 'English (US)' },
  { code: 'en-GB', countryCode: 'GB', label: 'English (UK)' },
  { code: 'fr-FR', countryCode: 'FR', label: 'French'        },
  { code: 'de-DE', countryCode: 'DE', label: 'German'        },
  { code: 'es-ES', countryCode: 'ES', label: 'Spanish'       },
  { code: 'ar-AE', countryCode: 'AE', label: 'Arabic'        },
  { code: 'zh-CN', countryCode: 'CN', label: 'Chinese'       },
];

function Flag({ countryCode, size = 20 }) {
  return (
    <ReactCountryFlag
      countryCode={countryCode}
      svg
      style={{ width: size, height: size, borderRadius: 3, objectFit: 'cover' }}
      title={countryCode}
    />
  );
}

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [opened, setOpened] = useState(false);

  const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  function select(code) {
    i18n.changeLanguage(code);
    setOpened(false);
  }

  return (
    <Popover
      opened={opened}
      onChange={setOpened}
      position="bottom-end"
      shadow="md"
      radius="md"
      width={210}
    >
      <Popover.Target>
        <button
          onClick={() => setOpened((o) => !o)}
          className="flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-1.5 rounded-lg hover:bg-gray-100"
        >
          <Flag countryCode={current.countryCode} size={20} />
          <Text size="sm" c="dark" className="hidden sm:block">{current.label}</Text>
          <ChevronDown size={13} className="text-gray-400" />
        </button>
      </Popover.Target>

      <Popover.Dropdown p="xs">
        <Text size="xs" fw={600} c="dimmed" mb="xs" className="uppercase tracking-wide px-1">
          Select language
        </Text>
        <Divider mb="xs" />
        <Stack gap={2}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => select(lang.code)}
              className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors w-full border-none bg-transparent text-left"
            >
              <Flag countryCode={lang.countryCode} size={22} />
              <Text size="sm" className="flex-1">{lang.label}</Text>
              {lang.code === i18n.language && (
                <Check size={14} className="text-[#5D5FEF]" />
              )}
            </button>
          ))}
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
