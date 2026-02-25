import { motion } from 'framer-motion';

export const Navbar = () => {
  const navLinks = [
    { name: 'Главная', href: '#home' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Услуги', href: '#services' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-zinc-950/50 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Логотип — теперь он главный акцент слева */}
        <a href="#home" className="text-xl font-light tracking-[0.3em] text-white hover:opacity-70 transition-opacity">
          SOPHIA<span className="font-serif italic text-zinc-500">L.</span>
        </a>

        {/* Меню — по центру или справа */}
        <div className="hidden space-x-12 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Мобильное меню (иконка) — оставляем для адаптивности */}
        <div className="block md:hidden text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
    </motion.nav>
  );
};