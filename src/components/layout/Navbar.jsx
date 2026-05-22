import { useState } from "react";
import {
  YoutubeIcon,
  FacebookIcon,
  MenuIcon,
  CloseIcon,
  LINKS,
} from "../ui/Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#inicio" className="flex items-center">
            
            {/* Logo Flotante (Hanging Badge) */}
            <img 
              src="/logo-bertha.png"
              alt="Logo Bertha Yepez Podcast"
              style={{ clipPath: 'circle(48%)' }}
              // h-24 y h-32 lo hacen grande. translate-y lo empuja hacia abajo para que "cuelgue" de la barra
              className="h-24 md:h-32 w-auto rounded-full shadow-xl group-hover:scale-110 transition-transform duration-300  translate-y-3 md:translate-y-6"
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-slate-300 hover:text-amber-400 font-medium transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-slate-300 hover:text-amber-400 font-medium transition-colors"
            >
              Servicios
            </a>
            <a
              href="#ultimos-videos"
              className="text-slate-300 hover:text-amber-400 font-medium transition-colors"
            >
              Portafolio
            </a>
            <a
              href="#acerca"
              className="text-slate-300 hover:text-amber-400 font-medium transition-colors"
            >
              Sobre Mí
            </a>
            <a
              href="#contacto"
              className="text-amber-400 font-medium hover:text-amber-300 transition-colors"
            >
              Contacto
            </a>

            <div className="flex items-center gap-4 pl-6 border-l border-slate-800">
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-red-500 transition-colors"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-amber-400 focus:outline-none"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-amber-500/20 px-4 pt-2 pb-6 space-y-4 shadow-lg absolute w-full">
          <a
            href="#inicio"
            onClick={closeMenu}
            className="block text-slate-300 hover:text-amber-400 font-medium py-2"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            onClick={closeMenu}
            className="block text-slate-300 hover:text-amber-400 font-medium py-2"
          >
            Servicios
          </a>
          <a
            href="#ultimos-videos"
            onClick={closeMenu}
            className="block text-slate-300 hover:text-amber-400 font-medium py-2"
          >
            Portafolio
          </a>
          <a
            href="#acerca"
            onClick={closeMenu}
            className="block text-slate-300 hover:text-amber-400 font-medium py-2"
          >
            Sobre Mí
          </a>
          <a
            href="#contacto"
            onClick={closeMenu}
            className="block text-amber-400 font-medium py-2"
          >
            Contacto
          </a>
          <div className="flex gap-6 pt-4 border-t border-slate-800">
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              <FacebookIcon className="w-8 h-8" />
            </a>
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noreferrer"
              className="text-red-500"
            >
              <YoutubeIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
