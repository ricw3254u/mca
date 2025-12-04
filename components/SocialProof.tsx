import React from 'react';
import { Instagram } from 'lucide-react';
import { SOCIAL_IMAGES } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Galería Comunitaria</h3>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">La voz del pueblo <span className="text-brand-primary/60 italic">#MiMariscala</span></h2>
          </div>
          <a href="#" className="inline-flex items-center text-gray-600 hover:text-brand-primary transition-colors font-medium">
            <Instagram className="w-5 h-5 mr-2" />
            Ver en Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOCIAL_IMAGES.map((img, idx) => (
            <div key={idx} className={`relative group overflow-hidden rounded-sm shadow-sm ${idx % 2 === 0 ? 'lg:row-span-2 h-80 lg:h-96' : 'h-64'}`}>
              <img 
                src={img} 
                alt={`Galería ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-medium tracking-wide transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Ver Foto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;