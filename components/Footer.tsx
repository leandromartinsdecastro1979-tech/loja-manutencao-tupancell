
import React from 'react';
import { Smartphone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <Smartphone className="text-orange-500 w-8 h-8" />
              <span className="text-2xl font-extrabold tracking-tighter">
                TUPAN<span className="text-orange-500">CELL</span>
              </span>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Especialistas em conserto de celulares e venda de acessórios no Jardim Tupanci, Barueri. Qualidade, rapidez e transparência.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Links Rápidos</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-semibold">
              <li><a href="#home" className="hover:text-orange-500 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">Sobre a Empresa</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Serviços</a></li>
              <li><a href="#location" className="hover:text-orange-500 transition-colors">Localização</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Palavras-chave</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li>Conserto de celular em Barueri</li>
              <li>Assistência técnica Jardim Tupanci</li>
              <li>Troca de tela em Barueri</li>
              <li>Loja de acessórios celular Barueri</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contato</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-semibold">
              <li>Rua Marte, 403 - Barueri</li>
              <li>(11) 99723-4540</li>
              <li>@tupancell</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs font-bold text-center md:text-left">
            © {new Date().getFullYear()} TUPANCELL – Todos os direitos reservados. 
            <br />Assistência Técnica e Acessórios em Barueri – SP.
          </p>
          <div className="flex items-center gap-2 text-zinc-600 text-xs font-bold uppercase tracking-widest">
            <span>Desenvolvido com</span>
            <Heart size={14} className="text-orange-500 fill-orange-500" />
            <span>para Barueri</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
