
import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-zinc-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block">Onde Estamos</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Visite nossa loja.</h2>
          <p className="text-zinc-400 text-lg">Referência em conserto de celular no Jardim Tupanci e região de Barueri.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Endereço</h4>
                  <p className="text-zinc-500 text-sm">Jardim Tupanci, Barueri</p>
                </div>
              </div>
              <p className="text-white font-medium text-lg leading-relaxed">
                Rua Marte, 403<br />
                Jardim Tupanci, Barueri – SP<br />
                CEP: 06414-000
              </p>
              <a 
                href="https://www.google.com/maps/dir//R.+Marte,+403+-+Jardim+Tupanci,+Barueri+-+SP,+06414-000/@-23.5049372,-46.8837119,17z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 bg-zinc-800 hover:bg-orange-500 text-white w-full py-4 rounded-xl font-bold transition-all"
              >
                <Navigation size={18} />
                Como Chegar
              </a>
            </div>

            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500">
                  <Clock />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Funcionamento</h4>
                  <p className="text-zinc-500 text-sm">Horários atualizados</p>
                </div>
              </div>
              <div className="space-y-3 text-sm font-medium">
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-400">Segunda – Sexta</span>
                  <span>09:30 – 18:30</span>
                </div>
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-400">Sábado</span>
                  <span>09:00 – 14:00</span>
                </div>
                <div className="flex justify-between text-orange-500">
                  <span className="font-bold">Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-zinc-800 h-[400px] lg:h-auto shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.1362779830573!2d-46.883711899999996!3d-23.5049372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03c734b41a53%3A0xa49a1da670868f36!2sR.%20Marte%2C%20403%20-%20Jardim%20Tupanci%2C%20Barueri%20-%20SP%2C%2006414-000!5e0!3m2!1spt-BR!2sbr!4v1715890000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
