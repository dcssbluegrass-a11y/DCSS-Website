import FollowUsSection from "@/components/FollowUsSection";

export default function Videos() {
  return (
    <div className="pt-16 min-h-screen bg-dcss-dark">
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dcss-light mb-4">
              Videos
            </h1>
            <p className="text-xl text-dcss-light">Browse our performances and choose a video to watch</p>
          </div>
          
          <div className="w-full">
            <div className="bg-dcss-light rounded-xl overflow-hidden shadow-2xl" style={{ height: 'calc(100vh - 220px)', minHeight: '500px' }}>
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
          </div>
        </div>
      </section>
      <FollowUsSection />
    </div>
  );
}