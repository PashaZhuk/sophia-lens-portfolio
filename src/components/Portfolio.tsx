import { motion } from 'framer-motion';

const photos = [
  { 
    id: 1, 
    src: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070', 
    title: 'Modern Portrait', 
    size: 'col-span-2 row-span-2' 
  },
  { 
    id: 2, 
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069', 
    title: 'Wedding Day', 
    size: 'col-span-1 row-span-1' 
  },
  { 
    id: 3, 
    src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070', 
    title: 'High Fashion', 
    size: 'col-span-1 row-span-1' 
  },
  { 
    id: 4, 
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2042', 
    title: 'Editorial', 
    size: 'col-span-1 row-span-2' 
  },
  { 
    id: 5, 
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070', 
    title: 'Atmosphere', 
    size: 'col-span-1 row-span-1' 
  },
  { 
    id: 6, 
    src: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1974', 
    title: 'Minimalism', 
    size: 'col-span-1 row-span-1' 
  },
{
  id: 7, // Можешь оставить тот же ID или сменить
  src: 'https://images.unsplash.com/photo-1506815444479-bfdb1e96c566?q=80&w=2070',
  title: 'Minimalist Mood',
  size: 'col-span-2 row-span-1'
},
  { 
    id: 8, 
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964', 
    title: 'Beauty', 
    size: 'col-span-1 row-span-2' 
  },
  { 
    id: 9, 
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974', 
    title: 'Commercial', 
    size: 'col-span-1 row-span-1' 
  },
  { 
    id: 10, 
    src: 'https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1972', 
    title: 'Lifestyle', 
    size: 'col-span-1 row-span-1' 
  },
];

export const Portfolio = () => {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-zinc-500 mb-4">Selected Works</h2>
          <div className="h-[1px] w-24 bg-zinc-800"></div>
        </div>

        {/* Сетка */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group ${photo.size}`}
            >
              <img 
                src={photo.src} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Оверлей при наведении */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white uppercase tracking-[0.2em] text-sm font-light">
                  {photo.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};