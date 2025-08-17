import { useState } from "react";
import { featuredVideos, getYouTubeEmbedUrl, getYouTubeThumbnailUrl, formatYouTubeDuration, formatViewCount, channelInfo } from "@/lib/youtube";

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(featuredVideos[0]);

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
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Video Player */}
            <div className="lg:col-span-2 space-y-6">
              <div className="aspect-video bg-dcss-light rounded-xl overflow-hidden">
                <iframe
                  src={getYouTubeEmbedUrl(selectedVideo.id)}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              
              <div className="text-dcss-light">
                <h3 className="text-xl font-heading font-bold mb-2">{selectedVideo.title}</h3>
                <p className="text-dcss-light opacity-75 mb-4">{selectedVideo.description}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-dcss-orange">{formatViewCount(selectedVideo.viewCount)}</span>
                  <span>•</span>
                  <span>{formatYouTubeDuration(selectedVideo.duration)}</span>
                  <span>•</span>
                  <span>{new Date(selectedVideo.publishedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            {/* Video Playlist */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-dcss-orange">More Videos</h3>
              <div className="space-y-4">
                {featuredVideos.map((video) => (
                  <div 
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-200 hover:bg-dcss-accent hover:bg-opacity-20 p-2 ${
                      selectedVideo.id === video.id ? 'bg-dcss-accent bg-opacity-30' : ''
                    }`}
                  >
                    <div className="flex space-x-3">
                      <div className="relative flex-shrink-0">
                        <img
                          src={getYouTubeThumbnailUrl(video.id)}
                          alt={video.title}
                          className="w-24 h-16 object-cover rounded"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <i className="fas fa-play text-white text-lg opacity-80"></i>
                        </div>
                        <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 rounded">
                          {formatYouTubeDuration(video.duration)}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading font-semibold text-dcss-light text-sm leading-tight mb-1 line-clamp-2">
                          {video.title}
                        </h4>
                        <p className="text-xs text-dcss-light opacity-60">
                          {formatViewCount(video.viewCount)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <a 
                  href={channelInfo.videosUrl} 
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