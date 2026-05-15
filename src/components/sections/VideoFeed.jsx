import { YoutubeIcon, PlayIcon, LINKS } from "../ui/Icons";
import { useYouTubeVideos } from "../../hooks/useYouTubeVideos";

export default function VideoFeed() {
  const { videos, loading, error } = useYouTubeVideos(6);

  return (
    <section
      id="ultimos-videos"
      className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Mi Trabajo Reciente
          </h2>
          <p className="text-slate-400">
            Los últimos episodios y proyectos publicados en mi canal.
          </p>
        </div>
        <a
          href={LINKS.youtube}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-red-500 hover:text-red-400 font-medium group bg-slate-900 border border-slate-800 px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
        >
          <YoutubeIcon className="w-6 h-6" />
          <span className="group-hover:underline">Ver todo en YouTube</span>
        </a>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
        </div>
      )}

      {error && (
        <div className="text-center text-red-400 bg-red-950/30 border border-red-900/50 p-6 rounded-2xl">
          <p className="font-medium mb-2">
            Hubo un problema al cargar los videos más recientes.
          </p>
          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noreferrer"
            className="text-amber-400 hover:underline"
          >
            Visita el canal directamente haciendo clic aquí.
          </a>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-amber-900/20 hover:shadow-2xl transition-all border border-slate-800 bg-slate-900 block relative"
            >
              <div className="relative overflow-hidden aspect-video border-b border-slate-800">
                <img
                  src={video.thumbnail}
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full p-4 text-slate-950 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <PlayIcon />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg text-slate-200 line-clamp-2 leading-snug group-hover:text-amber-400 transition-colors">
                  {video.title
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'")
                    .replace(/&amp;/g, "&")}
                </h3>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
