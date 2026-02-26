import { motion } from 'framer-motion';

const services = [
  {
    title: 'Individual',
    price: 'от 15 000 ₽',
    duration: '2 часа съемки',
    features: ['15 фото в ретуши', 'Все исходники', 'Помощь в позировании', 'Студия оплачивается отдельно'],
  },
  {
    title: 'Love Story',
    price: 'от 25 000 ₽',
    duration: '3 часа съемки',
    features: ['30 фото в ретуши', 'Подбор локаций', 'Слайд-шоу в подарок', 'Готовность до 14 дней'],
  },
  {
    title: 'Commercial',
    price: 'по запросу',
    duration: 'Full Day',
    features: ['Контент для брендов', 'Права на коммерцию', 'Работа со стилистом', 'Индивидуальный мудборд'],
  },
];

export const PriceList = () => {
  return (
    <section id="services" className="bg-zinc-950 py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции теперь всегда по центру для симметрии с карточками */}
        <div className="mb-20 text-center">
          <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-500 mb-4">Services & Pricing</h2>
          <div className="h-[1px] w-12 bg-zinc-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              // Добавили items-center и text-center для выравнивания всего контента
              className="group flex flex-col items-center text-center border border-white/5 p-10 transition-all duration-500 hover:border-white/20 bg-zinc-900/10"
            >
              <h3 className="text-white text-xl font-light tracking-[0.2em] uppercase mb-2">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-[10px] uppercase mb-8 tracking-[0.2em]">{service.duration}</p>
              
              <div className="text-2xl text-white font-extralight mb-10 tracking-tight">
                {service.price}
              </div>
              
              {/* Список фич: убираем flex-center для li, чтобы текст не прыгал, если будет длинным */}
              <ul className="space-y-5 mb-12 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="text-zinc-400 text-[10px] uppercase tracking-[0.15em] leading-relaxed">
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contacts"
                className="w-full border border-white/10 py-4 text-[10px] uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
              >
                Выбрать тариф
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};