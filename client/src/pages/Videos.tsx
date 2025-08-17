export default function Videos() {
  return (
    <div className="pt-16 min-h-screen bg-dcss-dark">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dcss-light mb-6">
              Videos
            </h1>
            <p className="text-xl text-dcss-light">Get a feel for the live show energy</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Video */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-dcss-orange">Featured Video</h3>
              <div className="aspect-video bg-dcss-light rounded-xl flex items-center justify-center">
                <div className="text-center text-dcss-dark">
                  <i className="fas fa-play-circle text-6xl text-dcss-orange mb-4"></i>
                  <p className="font-heading font-semibold">Watch the Reel</p>
                  <p className="text-sm opacity-75">Coming Soon</p>
                </div>
              </div>
            </div>
            
            {/* Video Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-dcss-orange">More Videos</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div 
                    key={index}
                    className="aspect-video bg-dcss-light rounded-lg flex items-center justify-center cursor-pointer hover:bg-dcss-warm transition-colors duration-200"
                  >
                    <i className="fas fa-play text-2xl text-dcss-orange"></i>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a 
                  href="https://www.youtube.com/@deercreeksharpshooters" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-dcss-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-heading font-semibold transition-colors duration-200"
                >
                  <i className="fab fa-youtube"></i>
                  <span>View YouTube Channel</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
