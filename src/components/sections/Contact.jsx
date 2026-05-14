// src/components/sections/Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const formData = new FormData(form);

    try {
      // Recuerda poner aquí tu enlace de Formspree
      const response = await fetch("https://formspree.io/f/mykoqjzn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm mb-2 block">
          Trabajemos Juntos
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          ¿Listo para impulsar tu marca?
        </h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Mándame un mensaje para platicar sobre cómo podemos colaborar. Ya sea
          para publicidad en redes, locución o para aparecer en el podcast.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto text-left space-y-6 bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl"
        >
          {/* Cuadrícula de 2 columnas para balancear los campos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Nombre o Empresa
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                placeholder="Ej. Mi Restaurante"
              />
            </div>

            {/* 2. Correo */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                placeholder="hola@empresa.com"
              />
            </div>

            {/* 3. Teléfono (NUEVO) */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Teléfono / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                placeholder="Ej. 33 1234 5678"
              />
            </div>

            {/* 4. Servicio */}
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                ¿En qué te puedo ayudar?
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
              >
                <option value="" className="text-slate-500">
                  Selecciona una opción...
                </option>
                <option value="Publicidad">
                  Publicidad y Visita al Negocio
                </option>
                <option value="Locución">Locución Comercial</option>
                <option value="Podcast">
                  Patrocinio / Entrevista en el Podcast
                </option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>

          {/* Mensaje de texto (Ocupa todo el ancho) */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all resize-none"
              placeholder="Cuéntame más sobre tu proyecto..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-cyan-500 text-slate-950 font-bold py-4 rounded-lg hover:bg-cyan-400 transition-colors shadow-lg hover:shadow-cyan-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Enviando mensaje..." : "Enviar Mensaje"}
          </button>

          {status === "success" && (
            <div className="p-4 bg-emerald-900/50 border border-emerald-500/50 text-emerald-400 rounded-lg text-center font-medium">
              ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
            </div>
          )}
          {status === "error" && (
            <div className="p-4 bg-red-900/50 border border-red-500/50 text-red-400 rounded-lg text-center font-medium">
              Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
