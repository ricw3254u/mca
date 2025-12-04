import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gray-100 py-12 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">Mariscala.com</h4>
            <p className="text-sm text-gray-500">Un proyecto comunitario hecho con ❤️ por la gente.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Aviso Legal</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
          <p>© {year} Mariscala.com. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;