import './App.css'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { ContactForm } from './components/ContactForm';
import { PriceList } from './components/PriceList';

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 antialiased selection:bg-white selection:text-black">
      {/* 1. Навигация (фиксирована) */}
      <Navbar />
      
      {/* 2. Главный экран */}
      <section id="home">
        <Hero />
      </section>
      
      {/* 3. Галерея работ */}
      <section id="portfolio" className="bg-zinc-950">
        <Portfolio />
      </section>

      {/* 4. Услуги (пока оставляем место под PriceList) */}
      <section id="services" className="bg-zinc-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
           <PriceList />
           <div className="h-[1px] w-full bg-white/5" /> 
        </div>
      </section>

      {/* 5. Контакты и Форма Supabase */}
      <section id="contacts">
        <ContactForm />
      </section>

      {/* 6. Подвал сайта */}
      <footer className="py-12 bg-zinc-950 border-t border-white/5 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="text-white font-light tracking-[0.3em] uppercase text-[10px]">
            Sophia <span className="font-serif italic text-zinc-500">Lens</span>
          </div>
          <p className="text-zinc-600 text-[9px] uppercase tracking-[0.2em]">
            &copy; 2026. Designed for Kwork Portfolio
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
