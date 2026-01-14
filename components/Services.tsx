
import React, { useEffect, useState, useRef } from 'react';
import { Wrench, Smartphone, Battery, Zap, Headphones, Settings } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps & { index: number; isVisible: boolean }> = ({ icon, title, description, index, isVisible }) => (
  <div 
    className={`group bg-zinc-900/40 hover:bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 p-8 rounded-[2.5rem] transition-all duration-700 flex flex-col items-center text-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    style={{ transitionDelay: `${index * 150}ms` }}
  >
    <div className="w-20 h-20 bg-zinc-800/50 group-hover:bg-orange-500 rounded-3xl flex items-center justify-center text-orange-500 group-hover:text-white mb-8 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-xl">
      {/* Fixed: Added validation and cast to React.ReactElement<any> to allow the 'size' prop during cloning */}
      {React.isValidElement(icon) && React.cloneElement(icon as React.ReactElement<any>, { size: 40 })}
    </div>
    <h3 className="text-2xl font-black mb-4 tracking-tight">{title}</h3>
    <p className="text-zinc-500 text-base leading-relaxed">{description}</p>
    
    <div className="mt-8 pt-6 border-t border-zinc-800 w-full opacity-0 group-hover:opacity-100 transition-opacity">
       <span className="text-orange-500 text-xs font-black uppercase tracking-widest">Orçamento Grátis</span>
    </div>
  </div>
);

const Services: React.FC = () => {
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

  const services = [
    {
      icon: <Wrench />,
      title: "Conserto Geral",
      description: "Reparos avançados em hardware para todas as marcas: Samsung, iPhone, Xiaomi e Motorola."
    },
    {
      icon: <Smartphone />,
      title: "Troca de Tela",
      description: "Telas originais e premium com brilho e touch impecáveis. Serviço rápido com garantia total."
    },
    {
      icon: <Battery />,
      title: "Troca de Bateria",
      description: "Sua bateria não dura? Trocamos por modelos de alta performance para seu celular voltar a voar."
    },
    {
      icon: <Settings />,
      title: "Manutenção",
      description: "Limpeza química, reparo de botões, conectores de carga e atualizações completas de software."
    },
    {
      icon: <Zap />,
      title: "Acessórios",
      description: "Capas resistentes, películas de vidro 3D, cabos premium e carregadores ultra-rápidos de última geração."
    },
    {
      icon: <Headphones />,
      title: "Áudio e Som",
      description: "Reparo de alto-falantes e microfones, além de venda de fones bluetooth com graves potentes."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-zinc-950 relative">
      {/* Decorative background circle */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Especialidades</span>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">O que fazemos por você.</h2>
          <p className="text-zinc-500 text-xl font-medium">Assistência técnica de alto nível com transparência e agilidade.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} isVisible={isVisible} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
