import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import VideoFeed from "../components/sections/VideoFeed";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

const GoldDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent my-2" />
);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-300">
      <Navbar />
      <Hero />
      <GoldDivider />
      <Services />
      <GoldDivider />
      <VideoFeed />
      <GoldDivider />
      <About />
      <GoldDivider />
      <Contact />
      <Footer />
    </main>
  );
}
