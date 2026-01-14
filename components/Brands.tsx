
import React from 'react';

const Brands: React.FC = () => {
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
    <section className="py-20 bg-zinc-950 border-y border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.4em]">Marcas que atendemos</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-24 py-4">
          {displayBrands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center grayscale brightness-150 hover:grayscale-0 transition-all duration-500">
               <img 
                 src={`https://cdn.simpleicons.org/${brand.slug}/FFD700`} 
                 alt={brand.name} 
                 className="h-12 md:h-16 w-auto object-contain"
                 onError={(e) => {
                   // Fallback to text if image fails
                   (e.target as HTMLImageElement).style.display = 'none';
                 }}
               />
               <span className="sr-only">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
