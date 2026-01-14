
import React, { useState, useEffect } from 'react';
import { Smartphone, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Localização', href: '#location' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-zinc-900' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="bg-orange-500 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <Smartphone className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase">
            TUPAN<span className="text-orange-500">CELL</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/5511997234540"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f97316] hover:bg-orange-600 text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_-5px_rgba(249,115,22,0.4)]"
          >
            Orçamento
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute w-full bg-black border-b border-zinc-800 transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen py-10 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-black uppercase tracking-tighter"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5511997234540"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-10 py-4 rounded-2xl text-lg font-black uppercase tracking-widest"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
