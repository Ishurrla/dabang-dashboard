import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  IconChartPie,
  IconChartBar,
  IconShoppingCart,
  IconPackage,
  IconMessageCircle,
  IconSettings,
  IconLogout,
  IconTrophy,
} from '@tabler/icons-react';
import logo from '../../assets/dummy logo.png';
import { NavItem } from '../sidebar/NavItem';
import { PromoCard } from '../sidebar/PromoCard';

const menuItems = [
  { icon: IconChartPie,     key: 'nav_dashboard',    id: 'Dashboard'    },
  { icon: IconTrophy,       key: 'nav_leaderboard',  id: 'Leaderboard'  },
  { icon: IconShoppingCart, key: 'nav_order',        id: 'Order'        },
  { icon: IconPackage,      key: 'nav_products',     id: 'Products'     },
  { icon: IconChartBar,     key: 'nav_sales_report', id: 'Sales Report' },
  { icon: IconMessageCircle,key: 'nav_messages',     id: 'Messages'     },
  { icon: IconSettings,     key: 'nav_settings',     id: 'Settings'     },
  { icon: IconLogout,       key: 'nav_sign_out',     id: 'Sign Out'     },
];

export function Sidebar({ open, onClose }) {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div className={`w-[220px] h-screen bg-white px-4 py-6 flex flex-col fixed left-0 top-0 z-40 shrink-0 transition-transform duration-300 md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-8">
        <img
          src={logo}
          alt="Dabang Logo"
          className="w-10 h-10 rounded-[10px] object-cover"
        />
        <span className="text-xl font-bold text-gray-900">
          Dabang
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-0.5 flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent hover:scrollbar-thumb-gray-300">
        {menuItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={t(item.key)}
            active={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </nav>

      {/* Pro card */}
      <div className="mt-4 shrink-0">
        <PromoCard />
      </div>
    </div>
  );
}
