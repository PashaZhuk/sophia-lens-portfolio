import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Те самые фото, что мы настраивали
const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070', title: 'Modern Portrait', size: 'col-span-2 row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069', title: 'Wedding Day', size: 'col-span-1 row-span-1' },
  { id: 3, src: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070', title: 'High Fashion', size: 'col-span-1 row-span-1' },
  { id: 4, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2042', title: 'Editorial', size: 'col-span-1 row-span-2' },
  { id: 5, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070', title: 'Atmosphere', size: 'col-span-1 row-span-1' },
  { id: 6, src: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1974', title: 'Minimalism', size: 'col-span-1 row-span-1' },
  { id: 7, src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2065', title: 'Atmospheric Light', size: 'col-span-2 row-span-1' },
  { id: 8, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964', title: 'Beauty', size: 'col-span-1 row-span-2' },
  { id: 9, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974', title: 'Commercial', size: 'col-span-1 row-span-1' },
  { id: 10, src: 'https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1972', title: 'Lifestyle', size: 'col-span-1 row-span-1' },
];

export const Portfolio = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section id="portfolio" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
          {photos.map((photo, i) => (
            <div 
              key={photo.id}
              onClick={() => setIndex(i)}
              className={`${photo.size} group relative overflow-hidden cursor-pointer bg-zinc-900`}
            >
              <img 
                src={photo.src} 
                alt={photo.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-[0.3em] font-light border-b border-white/30 pb-1">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos.map(p => ({ src: p.src }))}
        // Стилизуем под наш сайт
        styles={{ container: { backgroundColor: "rgba(9, 9, 11, 0.95)" } }}
      />
    </section>
  );
};