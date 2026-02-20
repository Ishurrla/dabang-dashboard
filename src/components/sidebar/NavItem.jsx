export function NavItem({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.75 rounded-xl border-none cursor-pointer text-sm font-medium font-[Inter,sans-serif] text-left transition-colors duration-200 ${
        active
          ? 'bg-[#5D5FEF] text-white'
          : 'bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700'
      }`}
    >
      <Icon size={18} strokeWidth={2} className="shrink-0" />
      <span>{label}</span>
    </button>
  );
}
