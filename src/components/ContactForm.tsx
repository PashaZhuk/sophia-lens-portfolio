import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      client_name: formData.get('name'),
      phone: formData.get('phone'),
      service_type: formData.get('service'),
      message: formData.get('message'),
    };

    const { error } = await supabase.from('photographer_leads').insert([data]);

    if (!error) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }
    setLoading(false);
  };

  return (
    <section id="contacts" className="bg-zinc-950 py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.5em] text-zinc-500 mb-4">Contact</h2>
          <h3 className="text-3xl md:text-5xl font-extralight text-white tracking-tight">Забронировать съемку</h3>
        </div>

        {success ? (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 border border-white/10"
          >
            <p className="text-white tracking-widest uppercase text-sm font-light">Спасибо! Я свяжусь с вами в ближайшее время.</p>
            <button onClick={() => setSuccess(false)} className="mt-6 text-zinc-500 underline text-[10px] uppercase tracking-widest hover:text-white transition-colors">Отправить еще раз</button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <input required name="name" type="text" placeholder="Ваше имя" className="w-full bg-transparent border-b border-zinc-800 py-3 text-white outline-none focus:border-white transition-colors placeholder:text-zinc-700 font-light text-sm" />
              </div>
              
              <div className="relative">
                <input required name="phone" type="tel" placeholder="Телефон" className="w-full bg-transparent border-b border-zinc-800 py-3 text-white outline-none focus:border-white transition-colors placeholder:text-zinc-700 font-light text-sm" />
              </div>
            </div>

            {/* Выбор услуги с кастомной стилизацией */}
            <div className="relative group">
             <select 
  name="service" 
  defaultValue=""
  className="w-full bg-transparent border-b border-zinc-800 py-3 text-zinc-400 outline-none focus:border-white focus:text-white transition-colors font-light text-sm appearance-none cursor-pointer relative z-10"
>
  <option value="" disabled className="bg-zinc-950 text-zinc-600">Выберите тип съемки</option>
  <option value="portrait" className="bg-zinc-950 text-white">Портретная съемка</option>
  <option value="wedding" className="bg-zinc-950 text-white">Свадебная история</option>
  <option value="editorial" className="bg-zinc-950 text-white">Editorial / Fashion</option>
  <option value="event" className="bg-zinc-950 text-white">Мероприятие</option>
</select>
              
              {/* Кастомная стрелочка */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 group-hover:text-white transition-colors pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <textarea name="message" placeholder="Ваши пожелания" rows={1} className="w-full bg-transparent border-b border-zinc-800 py-3 text-white outline-none focus:border-white transition-colors placeholder:text-zinc-700 font-light resize-none text-sm" />
            </div>

            <div className="flex justify-center pt-6">
              <button 
                disabled={loading}
                type="submit"
                className="group relative overflow-hidden border border-white/20 px-16 py-4 text-[10px] font-medium uppercase tracking-[0.4em] text-white transition-all hover:bg-white hover:text-black disabled:opacity-50"
              >
                <span className="relative z-10">{loading ? 'Отправка...' : 'Отправить запрос'}</span>
                <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};