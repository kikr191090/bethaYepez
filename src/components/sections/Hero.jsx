export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center justify-center text-center px-4 py-32 bg-slate-950 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">
          Creadora de Contenido & Locutora
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Impulsa tu negocio con{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
            contenido que conecta.
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Ayudo a marcas y emprendedores a destacar en redes sociales mediante
          publicidad efectiva, patrocinios en el podcast y conducción
          profesional.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <a
            href="#contacto"
            className="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 px-8 py-4 rounded-full font-bold hover:from-amber-300 hover:to-yellow-400 transition-all shadow-lg hover:shadow-amber-500/25 hover:-translate-y-1"
          >
            Trabajemos Juntos
          </a>

          <a
            href="#servicios"
            className="bg-slate-900 text-white border-2 border-slate-800 px-8 py-4 rounded-full font-bold hover:border-amber-500/50 hover:text-amber-400 transition-all"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
}
