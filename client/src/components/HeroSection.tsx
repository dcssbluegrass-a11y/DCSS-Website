import { Link } from "wouter";
import heroImagePath from "@assets/Copy of sdf-21_1755486190033.jpg";
import logoTextPath from "@assets/Copy of 8_1755456309035.png";

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(38, 70, 83, 0.6), rgba(38, 70, 83, 0.6)), url(${heroImagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-12">
        {/* Band logo image - Maximum size to dominate */}
        <div className="mb-4">
          <img 
            src={logoTextPath} 
            alt="Deer Creek Sharp Shooters" 
            style={{ height: 'auto', width: '100%', maxWidth: '700px' }}
            className="mx-auto block"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-dcss-orange">Hard-driving, Experimental Bluegrass from Colorado</h1>
        <p className="text-xl md:text-2xl mb-8 text-dcss-light font-light">
          Fast tunes, big crowds, bigger smiles.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shows">
            <span className="bg-dcss-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-heading font-semibold transition-colors duration-200 inline-block cursor-pointer">
              See Our Shows
            </span>
          </Link>
          <button className="border-2 border-dcss-orange text-dcss-orange hover:bg-dcss-orange hover:text-white px-8 py-3 rounded-lg font-heading font-semibold transition-colors duration-200">
            Join Mailing List
          </button>
        </div>
      </div>
    </section>
  );
}
