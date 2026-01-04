import Navbar from "./components/layout/Navbar";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import LatestArticles from "./components/sections/LatestArticles";
import Subscribe from "./components/sections/Subscribe";

export default function App() {
  return (
    <div className="min-h-screen bg-[#3f3f3f] text-white">
      <Hero>
        <Navbar />
      </Hero>
      <LatestArticles />
      <Subscribe />
      <Footer />
    </div>
  );
}
