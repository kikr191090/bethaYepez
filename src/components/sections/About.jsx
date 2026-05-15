import { FacebookIcon, LINKS } from "../ui/Icons";

export default function About() {
  return (
    <section id="acerca" className="py-24 bg-slate-950 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="aspect-[4/5] md:aspect-square rounded-[2rem] bg-slate-800 overflow-hidden shadow-2xl shadow-amber-900/10 relative border border-slate-700">
            <img
              src="https://placehold.co/800x1000/1e293b/fbbf24?text=Foto+Profesional"
              alt="Bertha Yepez en cabina o grabando"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <span className="text-amber-400 font-bold tracking-wider uppercase text-sm">
            Sobre Mí
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            La voz detrás de tu próxima campaña
          </h2>

          <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
            <p>
              Soy Bertha Yepez, creadora de contenido y locutora. Mi trabajo se
              centra en ayudar a los emprendedores y empresas locales a destacar
              en el mundo digital mediante estrategias auténticas y cercanas.
            </p>
            <p>
              Comprendo que cada negocio tiene una historia única. Por eso, ya
              sea grabando directamente en tus instalaciones, prestando mi voz
              para tus comerciales, o dándote un espacio en mi podcast, me
              aseguro de que tu mensaje resuene con tu cliente ideal.
            </p>
          </div>

          <div className="pt-6">
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-500 transition-colors shadow-lg"
            >
              <FacebookIcon className="w-5 h-5" />
              Conoce mi comunidad
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
