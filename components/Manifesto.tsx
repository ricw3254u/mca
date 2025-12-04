import React from 'react';
import { MANIFESTO_DATA } from '../constants';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 bg-brand-sand overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark mb-8 relative inline-block lg:block">
              {MANIFESTO_DATA.title}
              <span className="hidden lg:block absolute -bottom-2 left-0 w-24 h-1 bg-brand-terracotta"></span>
              <span className="lg:hidden absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-brand-terracotta"></span>
            </h2>
            
            <div className="prose prose-lg text-gray-700 leading-relaxed font-light mb-10">
              <p className="text-xl md:text-2xl italic font-serif text-brand-dark/80 mb-6">
                "{MANIFESTO_DATA.content}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-brand-dark/10 pt-8">
              {MANIFESTO_DATA.values.map((value, index) => (
                <div key={index} className="text-center lg:text-left">
                  <span className="block text-xs font-bold tracking-widest uppercase text-brand-terracotta mb-1">Pilar 0{index + 1}</span>
                  <span className="text-lg font-medium text-brand-dark">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content - "El Tepeyac" */}
          <div className="flex-1 order-1 lg:order-2 relative w-full max-w-lg lg:max-w-full mx-auto">
            {/* Decorative backing for the sketch */}
            <div className="absolute inset-0 bg-brand-terracotta/10 transform rotate-3 rounded-sm scale-95 translate-y-2"></div>
            
            <div className="relative bg-white p-4 shadow-xl rounded-sm transform -rotate-1 transition-transform hover:rotate-0 duration-500">
              <div className="relative overflow-hidden aspect-[4/3] rounded-sm bg-brand-sand/20">
                {/* 
                  NOTE: Replace 'el-tepeyac.jpg' with the actual path to your image file.
                  The filters added (sepia, saturate) will warm up the image to remove the "snowy" blue tint 
                  and make it look more like the warm Oaxacan landscape.
                */}
                <img 
                  src="/el-tepeyac.jpg" 
                  onError={(e) => {
                    e.currentTarget.src = "https://picsum.photos/id/1036/800/600"; // Fallback if file not found
                    e.currentTarget.alt = "Placeholder landscape";
                  }}
                  alt="Dibujo de El Tepeyac, Mariscala" 
                  className="w-full h-full object-cover filter sepia-[.3] saturate-[.85] contrast-[1.05] hover:sepia-0 hover:saturate-100 transition-all duration-700"
                />
                
                {/* Vignette to blend edges slightly */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none"></div>
              </div>
              
              <div className="pt-4 pb-1 text-center">
                <p className="font-serif text-brand-dark text-sm italic">
                  "Es un nido de mi tierra..."
                </p>
                <p className="text-[10px] tracking-widest uppercase text-gray-400 mt-1">
                  El Tepeyac • Recuerdo Comunitario
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Manifesto;