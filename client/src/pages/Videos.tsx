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
          
          <div className="space-y-12">
            {/* YouTube Channel Embed */}
            <div className="bg-dcss-light rounded-xl p-6">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed?listType=user_uploads&list=UCHjXhxJw9MdYqGlNP6GQjvQ"
                  title="Deer Creek Sharp Shooters YouTube Videos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </div>
            
            {/* Featured Performance Videos */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-dcss-orange">Live Performances</h3>
                <div className="bg-dcss-light rounded-xl p-4">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/videoseries?list=PLrAXtmRdnEQeiGGtLRdimqjKAUTS-3_3d"
                      title="DCSS Live Performances"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded"
                    />
                  </div>
                  <p className="text-dcss-dark text-center mt-3 font-heading font-semibold">
                    Festival & Concert Footage
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-dcss-orange">Behind the Scenes</h3>
                <div className="bg-dcss-light rounded-xl p-4">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/videoseries?list=PLrAXtmRdnEQeiGGtLRdimqjKAUTS-3_3d"
                      title="DCSS Behind the Scenes"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded"
                    />
                  </div>
                  <p className="text-dcss-dark text-center mt-3 font-heading font-semibold">
                    Studio Sessions & More
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center">
              <a 
                href="https://www.youtube.com/@deercreeksharpshooters/videos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-dcss-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-heading font-semibold text-lg transition-colors duration-200"
              >
                <i className="fab fa-youtube text-xl"></i>
                <span>Subscribe to Our Channel</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
