import React from 'react';
import { MapPin } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* 
          Image Source: Unsplash - Landscape typical of Oaxaca/Mixteca region (warm, hills, vegetation)
          Replaces the previous generic snowy mountain.
        */}
        <img 
          src="https://images.unsplash.com/photo-1588414734732-660b07584ea5?q=80&w=1974&auto=format&fit=crop" 
          alt="Paisaje de la Mixteca Oaxaqueña" 
          className="w-full h-full object-cover"
        />
        
        {/* Cinematic Warm Gradient Overlay */}
        {/* Top is dark for menu visibility, fading into a warm terracotta at the bottom to blend with the earth theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-black/20 to-brand-terracotta/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-semibold tracking-wider text-white mb-6 uppercase backdrop-blur-sm bg-white/10">
          Portal Oficial Comunitario
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 leading-tight drop-shadow-lg">
          Mariscala de Juárez
        </h1>
        <p className="text-lg md:text-xl text-white/95 mb-10 font-light max-w-2xl mx-auto drop-shadow-md">
          Conectando a nuestra comunidad. Un puente digital entre nuestra historia, nuestra gente y nuestro futuro.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="whatsapp">
            Únete al WhatsApp
          </Button>
          <Button variant="outline">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Ubícanos en Maps
            </span>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block z-20">
        <div className="w-0.5 h-16 bg-white/50 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
      </div>
    </section>
  );
};

export default Hero;