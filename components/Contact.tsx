
import React from 'react';
import { MessageCircle, Phone, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-orange-600"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
          Precisa consertar seu <br className="hidden md:block" /> celular agora?
        </h2>
        <p className="text-orange-100 text-xl mb-12 max-w-2xl mx-auto font-medium">
          Não perca tempo! Fale agora com um de nossos técnicos e peça seu orçamento gratuito via WhatsApp.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/5511997234540"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-green-600 text-white hover:bg-green-700 px-12 py-6 rounded-full text-xl font-black uppercase transition-all hover:scale-105 animate-pulse-ws shadow-2xl w-full md:w-auto"
          >
            <MessageCircle className="w-8 h-8 fill-white" />
            WhatsApp
          </a>
          
          <div className="flex flex-wrap items-center justify-center gap-4 w-full md:w-auto">
            <a
              href="tel:+5511997234540"
              className="flex items-center justify-center gap-3 bg-orange-700 hover:bg-orange-800 text-white px-8 py-6 rounded-full text-lg font-bold w-full md:w-auto border border-orange-400/30 transition-all"
            >
              <Phone size={24} />
              (11) 99723-4540
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/tupancell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-20 h-20 bg-orange-700 hover:bg-orange-800 text-white rounded-full border border-orange-400/30 transition-all"
                title="Siga no Instagram"
              >
                <Instagram size={32} />
              </a>
              <a
                href="https://facebook.com/tupancell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-20 h-20 bg-orange-700 hover:bg-orange-800 text-white rounded-full border border-orange-400/30 transition-all"
                title="Siga no Facebook"
              >
                <Facebook size={32} />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-12 text-orange-200 font-bold uppercase tracking-widest text-sm">
          Atendimento humanizado • Sem robôs • Especialistas reais
        </p>
      </div>
    </section>
  );
};

export default Contact;
