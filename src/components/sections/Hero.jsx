// src/components/sections/Hero.jsx
import { PlayIcon } from "../ui/Icons";

// src/components/sections/Hero.jsx
export default function Hero() {
  return (
    <section id="inicio" className="relative flex flex-col items-center justify-center text-center px-4 py-32 bg-slate-950 scroll-mt-20 border-b border-slate-800">
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        
        <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
          Creadora de Contenido & Locutora
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Impulsa tu negocio con <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">contenido que conecta.</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Ayudo a marcas y emprendedores a destacar en redes sociales mediante videos dinámicos, publicidad efectiva y conducción profesional.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <a href="#contacto" className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1">
            Trabajemos Juntos
          </a>
          
          <a href="#servicios" className="bg-slate-900 text-white border-2 border-slate-700 px-8 py-4 rounded-full font-bold hover:border-cyan-500 transition-all">
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
}
