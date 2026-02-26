import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Блокировка скролла
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Главная', href: '#home' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Услуги', href: '#services' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 z-[60] w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-lg"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-light tracking-[0.3em] text-white relative z-[70]">
            SOPHIA<span className="font-serif italic text-zinc-500">L.</span>
          </a>

          {/* Кнопка Бургера */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[70] block md:hidden text-white outline-none"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="h-px w-full bg-white block origin-center" 
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-px w-full bg-white block" 
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="h-px w-full bg-white block origin-center" 
              />
            </div>
          </button>

          {/* Десктопное меню */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[50] h-[100dvh] w-full bg-zinc-950 flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-light uppercase tracking-[0.4em] text-white transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};