
import React, { useEffect, useState, useRef } from 'react';
import { Timer, MapPin, Award, BadgeDollarSign, HeartHandshake } from 'lucide-react';

const DifferentialCard: React.FC<{icon: React.ReactNode, title: string, text: string, isVisible: boolean, delay: number}> = ({icon, title, text, isVisible, delay}) => (
  <div 
    className={`flex flex-col items-center text-center gap-5 p-8 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/50 hover:border-orange-500/50 hover:bg-zinc-900 transition-all group duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="bg-orange-500/10 p-5 rounded-2xl text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 shadow-lg">
      {React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}
    </div>
    <div>
      <h4 className="font-black text-2xl mb-3 tracking-tight">{title}</h4>
      <p className="text-zinc-500 text-base leading-relaxed font-medium max-w-xs">{text}</p>
    </div>
  </div>
);

const Differentials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-zinc-950 overflow-hidden relative">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-6 justify-center">
            <span className="h-px w-10 bg-orange-500"></span>
            <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm">Nossos Diferenciais</span>
            <span className="h-px w-10 bg-orange-500"></span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
            A escolha de quem <span className="text-orange-500">não pode parar</span>.
          </h2>
          <p className="text-zinc-500 text-xl font-medium">Excelência técnica e atendimento humanizado em cada detalhe.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DifferentialCard 
            icon={<Timer />}
            title="Atendimento Express"
            text="Grande parte dos reparos são concluídos no mesmo dia."
            isVisible={isVisible}
            delay={0}
          />
          <DifferentialCard 
            icon={<MapPin />}
            title="Sede Própria"
            text="Segurança absoluta de uma loja física no Jardim Tupanci."
            isVisible={isVisible}
            delay={150}
          />
          <DifferentialCard 
            icon={<Award />}
            title="Expertise"
            text="Técnicos capacitados para os diagnósticos mais difíceis."
            isVisible={isVisible}
            delay={300}
          />
          <DifferentialCard 
            icon={<BadgeDollarSign />}
            title="Preço Justo"
            text="Transparência total desde o orçamento até a entrega."
            isVisible={isVisible}
            delay={450}
          />
        </div>

        {/* Floating 100% Guaranteed Badge centered at bottom */}
        <div className={`mt-20 flex justify-center transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-6 rounded-3xl shadow-2xl flex items-center gap-6">
              <div className="bg-orange-500 p-4 rounded-2xl text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]">
                 <HeartHandshake size={32} />
              </div>
              <div>
                 <p className="text-white font-black text-3xl">100%</p>
                 <p className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em]">Garantia de Satisfação</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
