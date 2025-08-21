import { googleDriveImages } from "@/lib/images";

export default function HighlightsSection() {
  return (
    <section className="py-16 bg-dcss-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* WinterWonderGrass Highlight */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dcss-dark mb-6">Festival Tested, Venue Approved</h2>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={googleDriveImages.highlightsImage} 
                alt="DCSS performing to full audience at festival" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Westword Quote */}
          <div className="bg-dcss-dark text-dcss-light p-8 rounded-xl shadow-lg flex items-center justify-center h-full">
            <div className="text-center">
              <i className="fas fa-quote-left text-dcss-orange text-4xl mb-4"></i>
              <blockquote className="text-2xl md:text-3xl font-heading font-bold mb-4">
                "Best New Bluegrass Band"
              </blockquote>
              <cite className="text-dcss-orange font-heading font-semibold">
                — Denver Westword, 2022
              </cite>
              <div className="mt-6">
                <a 
                  href="https://www.westword.com/best-of/2022/music-and-venues/best-new-bluegrass-band-13811607" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-dcss-orange hover:text-orange-400 underline"
                >
                  Read Full Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
