import React from 'react';
import { Bus, Stethoscope, Store, Map, ArrowRight } from 'lucide-react';
import { SERVICES_LIST } from '../constants';

const Services: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'transport': return <Bus className="w-8 h-8" />;
      case 'emergency': return <Stethoscope className="w-8 h-8" />;
      case 'commerce': return <Store className="w-8 h-8" />;
      case 'tourism': return <Map className="w-8 h-8" />;
      default: return <Store className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-terracotta text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/20 pb-8">
          <div className="max-w-xl">
            <h3 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2">Directorio del Pueblo</h3>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Lo que necesitas, cerca de ti</h2>
            <p className="text-white/90 font-light text-lg">
              Guía rápida de servicios para vecinos y visitantes. Apoya el comercio local.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-2 bg-white text-brand-terracotta font-medium rounded-sm hover:bg-brand-sand transition-colors flex items-center shadow-lg">
            Ver directorio completo <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-black/10 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-lg cursor-pointer backdrop-blur-sm"
            >
              <div className="mb-6 text-white/80 group-hover:text-white transition-colors p-3 bg-white/10 w-fit rounded-full">
                {getIcon(service.iconType)}
              </div>
              <h3 className="text-xl font-bold font-serif mb-2">{service.label}</h3>
              <p className="text-sm text-white/70 group-hover:text-white/90 leading-relaxed">
                Consulta horarios, ubicaciones y números de teléfono directos.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;