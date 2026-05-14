// src/components/layout/Footer.jsx
import { YoutubeIcon, FacebookIcon, LINKS } from "../ui/Icons";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Marca y Propósito Comercial */}
        <h3 className="text-2xl font-bold mb-4 tracking-tight">Bertha Yepez</h3>
        <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">
          Estrategias de contenido, locución y publicidad digital. Hagamos que
          tu negocio conecte con la audiencia correcta.
        </p>

        {/* Enlaces a Redes Sociales */}
        <div className="flex gap-6 mb-12">
          <a
            href={LINKS.facebook}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-lg"
          >
            <FacebookIcon />
          </a>
          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-red-600 hover:-translate-y-1 transition-all shadow-lg"
          >
            <YoutubeIcon />
          </a>
        </div>

        {/* Línea Divisoria y Derechos */}
        <div className="w-full border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Bertha Yepez. Todos los derechos
            reservados.
          </p>

          {/* Opcional: Enlaces legales rápidos si en el futuro los necesita */}
          <div className="flex gap-6 text-sm text-slate-500 font-medium">
            <a
              href="#servicios"
              className="hover:text-blue-400 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="hover:text-blue-400 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
