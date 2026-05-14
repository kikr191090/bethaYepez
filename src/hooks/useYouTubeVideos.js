// src/hooks/useYouTubeVideos.js
import { useState, useEffect } from "react";

export function useYouTubeVideos(maxResults = 6) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelId = "UC2sasp0l2G1oZmwCqDyNb0Q";
        const rssUrl = encodeURIComponent(
          `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
        );
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === "ok") {
          const formattedVideos = data.items
            .slice(0, maxResults)
            .map((item) => {
              // NUEVO: Lógica a prueba de balas para extraer el ID
              let videoId = "";
              const url = item.link || "";

              // Buscamos el ID exacto de 11 caracteres sin importar el formato del link
              const match = url.match(
                /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/))([^"&?\/\s]{11})/,
              );

              if (match && match[1]) {
                videoId = match[1]; // Si es un video o Short
              } else if (item.guid && item.guid.includes("yt:video:")) {
                videoId = item.guid.split("yt:video:")[1]; // Plan B: leer el código interno
              } else {
                videoId = Math.random().toString(36).substr(2, 9); // Plan C: id de emergencia
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
          throw new Error("No se pudo leer el canal");
        }
      } catch (err) {
        console.error("Error al cargar RSS:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [maxResults]);

  return { videos, loading, error };
}
