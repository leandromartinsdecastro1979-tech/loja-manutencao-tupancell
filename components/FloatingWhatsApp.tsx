
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511997234540"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-green-500 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform animate-pulse-ws flex items-center justify-center group"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle size={32} className="fill-white" />
      <span className="absolute right-full mr-4 bg-zinc-950 text-white px-4 py-2 rounded-lg text-sm font-bold border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco agora!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
