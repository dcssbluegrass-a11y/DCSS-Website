import FollowUsSection from "@/components/FollowUsSection";

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
          
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="aspect-video bg-dcss-light rounded-xl overflow-hidden shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/videoseries?list=PLm_wtERb-bwySj7byt4pIVDLJJ3-5Wtnx" 
                  title="DCSS YouTube Playlist" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="https://youtube.com/playlist?list=PLm_wtERb-bwySj7byt4pIVDLJJ3-5Wtnx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-dcss-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-heading font-semibold transition-colors duration-200"
                >
                  <i className="fab fa-youtube"></i>
                  <span>View Full Playlist on YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FollowUsSection />
    </div>
  );
}