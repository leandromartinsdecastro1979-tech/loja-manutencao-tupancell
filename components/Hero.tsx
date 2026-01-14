
import React from 'react';
import { Smartphone, CheckCircle2, ClipboardList } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-zinc-950 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-zinc-800/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="inline-block relative mb-10 group">
          <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-3xl group-hover:bg-orange-500/50 transition-all duration-700 animate-pulse"></div>
          <Smartphone size={100} className="text-orange-500 relative mb-4 mx-auto animate-[float_4s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
          
          <div className="flex items-center justify-center gap-4 mb-4">
             <span className="h-px w-6 bg-zinc-800"></span>
             <span className="text-zinc-500 font-black uppercase tracking-[0.4em] text-xs">Jardim Tupanci • Barueri</span>
             <span className="h-px w-6 bg-zinc-800"></span>
          </div>
        </div>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-none animate-[fadeInUp_0.8s_ease-out_forwards]">
          TUPAN<span className="text-orange-500 relative inline-block">CELL<span className="absolute -bottom-2 left-0 w-full h-2 bg-white/10 rounded-full"></span></span>
        </h1>
        
        <p className="text-xl md:text-3xl text-zinc-300 font-medium mb-12 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out_forwards] opacity-0 [animation-fill-mode:forwards]">
          Assistência técnica e acessórios para celulares em <span className="text-white font-extrabold">Barueri – SP</span>.
        </p>

        <div className="flex justify-center animate-[fadeInUp_1.2s_ease-out_forwards] opacity-0 [animation-fill-mode:forwards]">
          <a
            href="https://wa.me/5511997234540?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 bg-orange-500 hover:bg-orange-600 text-white px-10 md:px-16 py-6 md:py-8 rounded-[2rem] text-xl md:text-3xl font-black uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-15px_rgba(249,115,22,0.5)] animate-pulse-ws"
          >
            <ClipboardList className="w-8 h-8 md:w-10 md:h-10 shrink-0" />
            <span className="whitespace-nowrap">Faça seu orçamento aqui</span>
          </a>
        </div>
        
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-zinc-500 animate-[fadeInUp_1.4s_ease-out_forwards] opacity-0 [animation-fill-mode:forwards]">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Orçamento Grátis</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Peças Premium</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-orange-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Garantia em tudo</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hidden md:block">
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-scroll"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
