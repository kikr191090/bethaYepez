// src/components/layout/Navbar.jsx
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
    // Fondo oscuro con desenfoque
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#inicio" className="flex items-center">
            {/* Texto del logo en blanco */}
            <span className="text-2xl font-bold text-white tracking-tight">
              Bertha Yepez
            </span>
          </a>

          {/* Menú Desktop (Textos claros) */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
            >
              Servicios
            </a>
            <a
              href="#ultimos-videos"
              className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
            >
              Portafolio
            </a>
            <a
              href="#acerca"
              className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
            >
              Sobre Mí
            </a>
            <a
              href="#contacto"
              className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
            >
              Contacto
            </a>

            <div className="flex items-center gap-4 pl-6 border-l border-slate-700">
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

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-cyan-400 focus:outline-none"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable (Fondo oscuro) */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-4 shadow-lg absolute w-full">
          <a
            href="#inicio"
            onClick={closeMenu}
            className="block text-slate-300 hover:text-cyan-400 font-medium py-2"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            onClick={closeMenu}
            className="block text-slate-300 hover:text-cyan-400 font-medium py-2"
          >
            Servicios
          </a>
          <a
            href="#ultimos-videos"
            onClick={closeMenu}
            className="block text-slate-300 hover:text-cyan-400 font-medium py-2"
          >
            Portafolio
          </a>
          <a
            href="#acerca"
            onClick={closeMenu}
            className="block text-slate-300 hover:text-cyan-400 font-medium py-2"
          >
            Sobre Mí
          </a>
          <a
            href="#contacto"
            onClick={closeMenu}
            className="block text-cyan-400 font-medium py-2"
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
