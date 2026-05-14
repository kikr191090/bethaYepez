// src/components/sections/Services.jsx

// src/components/sections/Services.jsx
const servicesList = [
  {
    title: "Publicidad para Negocios",
    description: "Visitas a tu local, creación de Reels, TikToks y menciones en transmisiones en vivo para atraer clientes de la región.",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
    )
  },
  {
    title: "El Podcast",
    description: "Un nuevo espacio de entrevistas y charlas. Ideal para posicionar tu marca como patrocinador o contar la historia de tu emprendimiento.",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
    )
  },
  {
    title: "Locución y Conducción",
    description: "Voz profesional para spots comerciales, videos corporativos y conducción de eventos públicos o privados.",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    )
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-900 scroll-mt-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Servicios Profesionales</h2>
          <p className="text-lg text-slate-400">
            Soluciones creativas para dar a conocer tu producto o servicio ante una audiencia leal y activa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center shadow-inner mb-6 border border-slate-700">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}