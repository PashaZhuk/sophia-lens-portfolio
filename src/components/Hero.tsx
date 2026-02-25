import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      {/* Фоновое изображение с девушкой-фотографом */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070&auto=format&fit=crop" 
          alt="Female Photographer"
          className="h-full w-full object-cover opacity-50 transition-transform duration-[3000ms] hover:scale-105"
        />
        {/* Глубокий градиентный оверлей */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950" />
      </div>

      {/* Основной контент */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="mb-4 block text-[10px] font-light tracking-[0.6em] uppercase text-zinc-400">
            Fine Art Photography
          </span>
          
          <h1 className="mb-6 text-6xl font-extralight tracking-[0.1em] text-white md:text-8xl lg:text-9xl">
            SOPHIA <span className="font-serif italic text-zinc-400">LENS</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-lg text-sm leading-loose font-light tracking-wide text-zinc-300 md:text-base">
            Запечатлею вашу искренность. Профессиональные фотосессии в стиле минимализма для частных лиц и брендов.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 justify-center items-center">
            {/* Ссылка на форму контактов */}
            <a 
              href="#contacts"
              className="group relative overflow-hidden border border-white/20 bg-white px-12 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-black transition-all hover:border-white"
            >
              <span className="relative z-10">Записаться</span>
              <div className="absolute inset-0 z-0 translate-y-full bg-zinc-200 transition-transform duration-300 group-hover:translate-y-0" />
            </a>
            
            {/* Ссылка на портфолио */}
            <a 
              href="#portfolio"
              className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white cursor-pointer"
            >
              Смотреть работы
            </a>
          </div>
        </motion.div>

        {/* Элегантный индикатор скролла */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="h-[60px] w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};