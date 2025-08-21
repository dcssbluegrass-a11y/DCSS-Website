import { Link } from "wouter";
import { googleDriveImages } from "@/lib/images";

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${googleDriveImages.heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability - reduced opacity by 25% */}
      <div className="absolute inset-0 bg-black/35"></div>
      
      {/* Gradient overlay for better text contrast - reduced opacity by 25% */}
      <div className="absolute inset-0 bg-gradient-to-b from-dcss-dark/60 via-dcss-dark/40 to-dcss-dark/60"></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Band logo with dramatic shadow */}
        <div className="mb-32 mt-20">
          <img 
            src={googleDriveImages.patch8} 
            alt="Deer Creek Sharp Shooters" 
            style={{ height: 'auto', width: '100%', maxWidth: '800px' }}
            className="mx-auto block drop-shadow-2xl filter brightness-110"
          />
        </div>
        
        {/* Tagline */}
        <div className="mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-6 text-dcss-orange drop-shadow-lg">
            Hard-driving, Experimental Bluegrass from Colorado
          </h1>
          
        </div>
        
        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/shows">
            <span className="bg-dcss-orange hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-200 inline-block cursor-pointer shadow-xl hover:shadow-2xl transform hover:scale-105">
              See Our Shows
            </span>
          </Link>
          <button 
            onClick={() => {
              const subscribeSection = document.querySelector('.subscribe-section');
              if (subscribeSection) {
                subscribeSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="border-3 border-dcss-orange text-dcss-orange hover:bg-dcss-orange hover:text-white px-10 py-4 rounded-xl font-heading font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 bg-black/40 backdrop-blur-sm"
          >
            Join Mailing List
          </button>
        </div>
      </div>
    </section>
  );
}
