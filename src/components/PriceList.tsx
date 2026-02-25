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
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-500 mb-4">Services & Pricing</h2>
          <div className="h-[1px] w-24 bg-zinc-800 mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group border border-white/5 p-8 transition-colors hover:border-white/20"
            >
              <h3 className="text-white text-xl font-light tracking-widest uppercase mb-2">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm mb-6 tracking-wide">{service.duration}</p>
              <div className="text-2xl text-white font-extralight mb-8">{service.price}</div>
              
              <ul className="space-y-4 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="text-zinc-400 text-xs uppercase tracking-widest flex items-center">
                    <span className="w-1 h-1 bg-zinc-700 mr-3 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contacts"
                className="inline-block w-full text-center border border-white/10 py-4 text-[10px] uppercase tracking-[0.3em] text-white transition-all hover:bg-white hover:text-black"
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