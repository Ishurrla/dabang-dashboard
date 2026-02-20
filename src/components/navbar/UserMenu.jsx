import { Menu, Avatar, Text, Group, UnstyledButton } from '@mantine/core';
import { ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import profilePic from '../../assets/Rectangle 1393.png';

export function UserMenu() {
  const { t } = useTranslation();
  return (
    <Menu shadow="md" width={190} position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Group gap="xs" wrap="nowrap">
            <Avatar src={profilePic} size={34} radius="xl" />
            <div className="hidden sm:block">
              <Text size="sm" fw={600} lh={1.2}>Musfiq</Text>
              <Text size="xs" c="dimmed" lh={1.2}>Admin</Text>
            </div>
            <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <div className="px-3 py-2">
          <Group gap="sm" wrap="nowrap">
            <Avatar src={profilePic} size={36} radius="xl" />
            <div>
              <Text size="sm" fw={600} lh={1.2}>Musfiq</Text>
              <Text size="xs" c="dimmed" lh={1.2}>Admin</Text>
            </div>
          </Group>
        </div>
        <Menu.Divider />
        <Menu.Item leftSection={<User size={14} />}>{t('profile')}</Menu.Item>
        <Menu.Item leftSection={<Settings size={14} />}>{t('settings')}</Menu.Item>
        <Menu.Divider />
        <Menu.Item leftSection={<LogOut size={14} />} color="red">{t('sign_out')}</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
