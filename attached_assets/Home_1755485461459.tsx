import { Link } from "wouter";
import { Music, Calendar, ShirtIcon, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/Copy of 8_1754928628063.png";
import heroImagePath from "@assets/Copy of _83A3865_1754928637357.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-beige">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="hero-bg flex items-center justify-center text-center text-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(47, 27, 20, 0.6), rgba(47, 27, 20, 0.6)), url(${heroImagePath})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <img 
              src={logoPath} 
              alt="Deer Creek Sharp Shooters Logo" 
              className="mx-auto h-42 w-auto logo-style"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wide">
            High Energy Experimental Bluegrass
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 text-warm-chocolate">
            aka "Party-grass"
          </p>
          <div className="bg-wood-brown/90 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-2 text-yellow-300">"Best New Bluegrass Band"</h2>
            <p className="text-lg">- Westword Magazine, 2022</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/music" target="_blank">
              <Button className="bg-warm-chocolate hover:bg-wood-brown text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                <Music className="mr-2 h-4 w-4" />
                Listen Now
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </Link>
            <Link href="/shows" target="_blank">
              <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-dark-earth text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                <Calendar className="mr-2 h-4 w-4" />
                Upcoming Shows
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-forest-green rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Music className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Latest Album</h3>
              <p className="text-gray-600 mb-4">Stream "Crik" on all platforms</p>
              <Link href="/music" target="_blank" className="text-wood-brown hover:text-warm-chocolate font-semibold flex items-center justify-center">
                Listen Now 
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-warm-chocolate rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-video text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Live Performances</h3>
              <p className="text-gray-600 mb-4">Watch our latest videos</p>
              <Link href="/videos" target="_blank" className="text-wood-brown hover:text-warm-chocolate font-semibold flex items-center justify-center">
                Watch Videos 
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="text-center">
              <div className="bg-wood-brown rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <ShirtIcon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Merchandise</h3>
              <p className="text-gray-600 mb-4">Show your DCSS pride</p>
              <Link href="/merch" target="_blank" className="text-wood-brown hover:text-warm-chocolate font-semibold flex items-center justify-center">
                Shop Now 
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
