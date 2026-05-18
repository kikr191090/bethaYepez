// src/hooks/useYouTubeVideos.js
import { useState, useEffect } from "react";

// EL SALVAVIDAS: Estos videos se mostrarán automáticamente si el servicio en vivo falla
const fallbackVideos = [
  {
    id: "aoQuxCEKRss&t=2134s",
    title: "",
    thumbnail: "https://i.ytimg.com/vi/aoQuxCEKRss/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=aoQuxCEKRss&t=2134s",
  },
  {
    id: "Vr1LOmnnJx8&t=4626s", // Puedes poner aquí sus 3 o 6 mejores videos
    title: "",
    thumbnail: "https://i.ytimg.com/vi/Vr1LOmnnJx8/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=Vr1LOmnnJx8&t=4626s",
  },
  {
    id: "aChGZBxe76U?feature",
    title: "",
    thumbnail:
      "https://img.youtube.com/vi/X8b9Y3kQ1s4/maxresdefault.jphttps://i.ytimg.com/vi/aChGZBxe76U/oardefault.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLAeVcycUlXp2OoyIrbLLqGZk1kUEA&usqp=CCk",
    url: "https://m.youtube.com/shorts/aChGZBxe76U?feature=share",
  },
];

export function useYouTubeVideos(maxResults = 6) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelId = "UC2sasp0l2G1oZmwCqDyNb0Q";

        // Volvemos a rss2json que es el estándar más estable
        const rssUrl = encodeURIComponent(
          `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
        );
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("El servicio de RSS está saturado");
        }

        const data = await response.json();

        if (data.status === "ok") {
          const formattedVideos = data.items
            .slice(0, maxResults)
            .map((item) => {
              // Extractor seguro de ID
              let videoId = "";
              const url = item.link || "";
              const match = url.match(
                /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/))([^"&?\/\s]{11})/,
              );

              if (match && match[1]) {
                videoId = match[1];
              } else if (item.guid && item.guid.includes("yt:video:")) {
                videoId = item.guid.split("yt:video:")[1];
              }

              return {
                id: videoId,
                title: item.title,
                thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                url: item.link,
              };
            });

          setVideos(formattedVideos);
        } else {
          throw new Error("Error en el formato de YouTube");
        }
      } catch (err) {
        // SI ALGO FALLA (Error 500, bloqueos, etc):
        // No mostramos error. Cargamos el salvavidas en silencio.
        console.warn(
          "Conexión en vivo pausada. Cargando portafolio de respaldo...",
        );
        setVideos(fallbackVideos);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [maxResults]);

  return { videos, loading, error }; // error siempre será null gracias al salvavidas
}
