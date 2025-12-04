import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">Quiénes Hacen Esto Posible</h2>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            "Para el pueblo y por el pueblo". Un esfuerzo conjunto de vecinos comprometidos con Mariscala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-brand-sand shadow-lg group-hover:border-brand-terracotta transition-colors duration-300">
                <img 
                  src={member.image_placeholder} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter sepia-[.2] group-hover:sepia-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900">{member.name}</h3>
              <p className="text-sm font-bold text-brand-terracotta uppercase tracking-wide mb-3">{member.role}</p>
              <div className="w-12 h-0.5 bg-gray-200 mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm leading-relaxed px-4">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;