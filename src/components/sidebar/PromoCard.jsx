import { useTranslation } from 'react-i18next';
import proLogo from '../../assets/Logo.png';

export function PromoCard() {
  const { t } = useTranslation();
  return (
    <div
      className="rounded-[20px] px-4 py-[10px] text-center"
      style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
    >
      <div className="w-[38px] h-[38px] rounded-xl flex items-center justify-center mx-auto mb-3">
        <img src={proLogo} alt="Pro Icon" className="w-5 h-5 object-contain" />
      </div>

      <h3 className="text-sm font-bold text-white mb-1.5">
        {t('promo_title')}
      </h3>

      <p className="text-xs text-white/90 mb-4 leading-[1.4]">
        {t('promo_desc')}
      </p>

      <button className="w-full bg-white text-[#5D5FEF] border-none rounded-[10px] py-2.5 px-5 text-sm font-semibold cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
        {t('promo_button')}
      </button>
    </div>
  );
}
