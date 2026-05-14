// src/pages/Home.jsx
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import VideoFeed from "../components/sections/VideoFeed";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-300">
      <Navbar />
      <Hero />
      <Services />
      <VideoFeed />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
