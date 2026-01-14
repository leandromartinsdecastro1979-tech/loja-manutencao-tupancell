
import React, { useState, useEffect, useRef } from 'react';
import { History, Smartphone, ShoppingBag, MessageCircle } from 'lucide-react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={countRef}>
      {count.toLocaleString('pt-BR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
};

const StatItem: React.FC<{ icon: React.ReactNode; end: number; suffix: string; label: string }> = ({ icon, end, suffix, label }) => (
  <div className="flex flex-col items-center p-6 group transition-all duration-300">
    <div className="w-14 h-14 mb-4 flex items-center justify-center text-zinc-500 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-500">
      {icon}
    </div>
    <div className="text-5xl md:text-6xl font-black text-orange-500 tracking-tighter mb-2">
      <CountUp end={end} suffix={suffix} />
    </div>
    <div className="text-white text-sm font-bold uppercase tracking-widest text-center">
      {label}
    </div>
  </div>
);

const Stats: React.FC = () => {
  const brands = [
    { name: "Samsung", slug: "samsung" },
    { name: "iPhone", slug: "apple" },
    { name: "Xiaomi", slug: "xiaomi" },
    { name: "Motorola", slug: "motorola" },
    { name: "LG", slug: "lg" }
  ];

  // Repeat brands to create a seamless loop
  const displayBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Brand Logo & Carousel Header */}
        <div className="mb-24 relative flex flex-col items-center">
          <div className="flex flex-col items-center justify-center mb-10 transition-all duration-500 hover:scale-105">
            <div className="bg-orange-500 p-4 rounded-3xl mb-4 shadow-[0_10px_30px_rgba(249,115,22,0.4)] rotate-3">
              <Smartphone className="text-white w-12 h-12" />
            </div>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              TUPAN<span className="text-orange-500">CELL</span>
            </h3>
            <div className="mt-2 h-1 w-24 bg-orange-500/20 rounded-full"></div>
            <p className="mt-4 text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">Especialista em todas as marcas</p>
          </div>
          
          <div className="relative w-full flex overflow-x-hidden border-y border-zinc-900/50 py-4">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-20 md:gap-32">
              {displayBrands.map((brand, index) => (
                <div key={index} className="flex items-center justify-center opacity-30 hover:opacity-100 transition-all duration-500 hover:scale-110">
                   <img 
                     src={`https://cdn.simpleicons.org/${brand.slug}/ffffff`} 
                     alt={brand.name} 
                     className="h-8 md:h-12 w-auto object-contain"
                   />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
          <StatItem 
            icon={<History size={40} />} 
            end={10} 
            suffix="+" 
            label="anos de serviços" 
          />
          <StatItem 
            icon={<Smartphone size={40} />} 
            end={3000} 
            suffix="+" 
            label="celulares consertados" 
          />
          <StatItem 
            icon={<ShoppingBag size={40} />} 
            end={100} 
            suffix="+" 
            label="modelos de acessórios" 
          />
          <StatItem 
            icon={<MessageCircle size={40} className="fill-current" />} 
            end={100} 
            suffix="%" 
            label="atendimento via WhatsApp" 
          />
        </div>

        <div className="flex justify-center">
          <a
            href="https://wa.me/5511997234540"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-black uppercase transition-all hover:scale-105 animate-pulse-ws shadow-[0_10px_30px_rgba(249,115,22,0.3)]"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            Falar no WhatsApp agora
          </a>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Stats;
