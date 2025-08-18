import { Link } from "wouter";
import heroImagePath from "@assets/Copy of _83A3865_1755456309034.jpg";
import logoTextPath from "@assets/Copy of 8_1755456309035.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Live performance background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImagePath} 
          alt="DCSS live on stage with full band" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dcss-dark bg-opacity-60"></div>
      </div>
      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Band logo image - Maximum size to dominate */}
        <div className="mb-8">
          <img 
            src={logoTextPath} 
            alt="Deer Creek Sharp Shooters" 
            style={{ height: 'auto', width: '100%', maxWidth: '800px' }}
            className="mx-auto block ml-[14px] mr-[14px] pl-[3px] pr-[3px] pt-[0px] pb-[0px] mt-[-193px] mb-[-193px]"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-dcss-orange">Hard-driving, Experimental Bluegrass from Colorado</h1>
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
