export default function Music() {
  const tracks = [
    { number: "01", title: "Intro" },
    { number: "02", title: "Goodbye Television" },
    { number: "03", title: "Foreign Waters" },
    { number: "04", title: "High Up On This Mountain" },
    { number: "05", title: "Palisade Breakdown" },
    { number: "06", title: "Ivy Branch Trail" },
    { number: "07", title: "Same Old Dance" },
    { number: "08", title: "Blue Salt (Live)" },
    { number: "09", title: "Rock Song" },
    { number: "10", title: "D-Town and Bound" },
    { number: "11", title: "Outro" },
  ];

  return (
    <div className="pt-16 min-h-screen bg-dcss-dark text-dcss-light">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Music</h1>
            <p className="text-xl text-dcss-light">Listen to our debut album "Crik" on Spotify</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Spotify Embed */}
            <div className="bg-dcss-light rounded-xl p-6">
              <iframe 
                src="https://open.spotify.com/embed/album/4rxFBL7xVADypnLF0PO968?utm_source=generator&theme=0" 
                width="100%" 
                height="380" 
                frameBorder="0" 
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="rounded-lg"
                title="Crik Album on Spotify"
              />
            </div>
            
            {/* Track Listing */}
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-dcss-orange mb-6">Track Listing</h3>
              <div className="space-y-3">
                {tracks.map((track) => (
                  <div 
                    key={track.number} 
                    className="flex items-center space-x-3 p-3 bg-dcss-accent bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors duration-200"
                  >
                    <span className="text-dcss-orange font-heading font-semibold w-8">
                      {track.number}.
                    </span>
                    <span>{track.title}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://open.spotify.com/album/4rxFBL7xVADypnLF0PO968" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-dcss-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-heading font-semibold transition-colors duration-200"
                >
                  <i className="fab fa-spotify"></i>
                  <span>Listen on Spotify</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
