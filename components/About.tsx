
import React, { useEffect, useRef, useState } from 'react';
import { Store, MapPin, ShieldCheck, Clock } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-800/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-orange-500"></div>
            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm">Nossa História</span>
            <div className="h-px w-12 bg-orange-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black mb-10 leading-tight tracking-tighter">
            Especialistas em dar <span className="text-orange-500">vida nova</span> ao seu celular.
          </h2>
          
          <div className="space-y-8 text-zinc-400 text-xl md:text-2xl leading-relaxed font-medium mb-16">
            <p>
              A <span className="text-white font-bold">Tupancell</span> nasceu com o propósito de oferecer transparência e agilidade no conserto de smartphones em <span className="text-white">Barueri</span>.
            </p>
            <p>
              Nossa loja física no <span className="text-orange-500 font-bold">Jardim Tupanci</span> é equipada com laboratório moderno e uma equipe pronta para resolver qualquer defeito, desde trocas de tela até reparos avançados em placa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/50 hover:border-orange-500/30 transition-all group">
              <Store className="text-orange-500 mb-4 mx-auto group-hover:scale-110 transition-transform" size={32} />
              <p className="text-white font-black text-xl mb-1">Loja Física</p>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Sede em Barueri</p>
            </div>
            <div className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/50 hover:border-orange-500/30 transition-all group">
              <ShieldCheck className="text-orange-500 mb-4 mx-auto group-hover:scale-110 transition-transform" size={32} />
              <p className="text-white font-black text-xl mb-1">Qualidade</p>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Peças Selecionadas</p>
            </div>
            <div className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/50 hover:border-orange-500/30 transition-all group">
              <Clock className="text-orange-500 mb-4 mx-auto group-hover:scale-110 transition-transform" size={32} />
              <p className="text-white font-black text-xl mb-1">Agilidade</p>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Reparos Express</p>
            </div>
          </div>

          {/* Simple Address Highlight */}
          <div className="mt-16 inline-flex items-center gap-4 bg-zinc-900/80 px-8 py-4 rounded-2xl border border-zinc-800 shadow-xl">
             <MapPin size={24} className="text-orange-500" />
             <p className="text-white font-bold tracking-tight text-lg">
               Rua Marte, 403 – Jardim Tupanci, Barueri – SP
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
