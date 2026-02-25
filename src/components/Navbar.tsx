import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Главная', href: '#home' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Услуги', href: '#services' },
    { name: 'Контакты', href: '#contacts' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 z-[60] w-full border-b border-white/5 bg-zinc-950/50 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-light tracking-[0.3em] text-white">
            SOPHIA<span className="font-serif italic text-zinc-500">L.</span>
          </a>

          {/* Десктопное меню */}
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

          {/* Кнопка Бургера */}
          <button 
            onClick={toggleMenu}
            className="relative z-[70] block md:hidden text-white outline-none"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="h-px w-full bg-white block" 
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-px w-full bg-white block" 
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="h-px w-full bg-white block" 
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Мобильное полноэкранное меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[50] flex flex-col items-center justify-center bg-zinc-950 md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-light uppercase tracking-[0.3em] text-white hover:italic transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};