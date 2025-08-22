export default function FollowUsSection() {
  return (
    <section className="py-8 bg-dcss-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-heading font-bold text-dcss-light mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/deercreeksharpshooters" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-dcss-orange hover:bg-orange-600 text-dcss-light rounded-full transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a 
              href="https://www.facebook.com/deercreeksharpshooters" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-dcss-orange hover:bg-orange-600 text-dcss-light rounded-full transition-colors duration-200"
              aria-label="Follow us on Facebook"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a 
              href="https://www.youtube.com/@deercreeksharpshooters" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-dcss-orange hover:bg-orange-600 text-dcss-light rounded-full transition-colors duration-200"
              aria-label="Watch us on YouTube"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a 
              href="https://open.spotify.com/search/Deer%20Creek%20Sharp%20Shooters" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-dcss-orange hover:bg-orange-600 text-dcss-light rounded-full transition-colors duration-200"
              aria-label="Listen on Spotify"
            >
              <i className="fab fa-spotify text-xl"></i>
            </a>
            <a 
              href="http://eepurl.com/jlJh8w" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 bg-dcss-orange hover:bg-orange-600 text-dcss-light rounded-full transition-colors duration-200"
              aria-label="Join Newsletter"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}