import React from 'react';

function Footer(){
  return (
    <footer className="w-full bg-[#081f38] text-white pt-10 pb-6 mt-auto">
      <div className="mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-row gap-x-8 gap-y-4 text-sm font-medium">
            <a href="#" className="hover:underline decoration-[#add600] underline-offset-4">Términos y condiciones</a>
            <a href="#" className="hover:underline decoration-[#add600] underline-offset-4">Política de cookies</a>
            <a href="#" className="hover:underline decoration-[#add600] underline-offset-4">Política de privacidad</a>
            <a href="#" className="hover:underline decoration-[#add600] underline-offset-4">Oficial de Datos Personales</a>
          </div>
        </div>

        <hr className="border-white/10 mb-8" />

        <div className="flex flex-col gap-1 text-[13px] text-white/70">
          <p className="font-bold text-white uppercase tracking-wider">
            © Todos los derechos reservados
          </p>
          <p>
            fernanditostore.com S.A.C. Pachacamac, Perú
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;