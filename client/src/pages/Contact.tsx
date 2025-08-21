import FollowUsSection from "@/components/FollowUsSection";
import bandPhoto from "@assets/Copy of _83A3865_1755456309034.jpg";

export default function Contact() {
  return (
    <div className="pt-16 min-h-screen bg-dcss-dark text-dcss-light">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact</h1>
            <p className="text-xl">Get in touch for bookings, press, or just to say hello</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-dcss-orange mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-envelope text-dcss-orange text-xl w-6"></i>
                    <a 
                      href="mailto:DCSSbluegrass@gmail.com" 
                      className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                    >
                      DCSSbluegrass@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-phone text-dcss-orange text-xl w-6"></i>
                    <a 
                      href="tel:443-417-7287" 
                      className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                    >
                      443-417-7287
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-map-marker-alt text-dcss-orange text-xl w-6"></i>
                    <span>Colorado, USA</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-bold text-dcss-orange mb-6">Follow Us</h3>
                <div className="flex space-x-6">
                  <a 
                    href="https://www.facebook.com/deercreeksharpshooters" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                  >
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </a>
                  <a 
                    href="https://www.instagram.com/deercreeksharpshooters" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                  <a 
                    href="https://www.youtube.com/@deercreeksharpshooters" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                  >
                    <i className="fab fa-youtube text-2xl"></i>
                  </a>
                  <a 
                    href="https://open.spotify.com/search/Deer%20Creek%20Sharp%20Shooters" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                  >
                    <i className="fab fa-spotify text-2xl"></i>
                  </a>
                  <a 
                    href="http://eepurl.com/jlJh8w" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                    title="Join Newsletter"
                  >
                    <i className="fas fa-envelope text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Band Photo */}
            <div className="flex justify-center items-center">
              <img 
                src={bandPhoto}
                alt="Deer Creek Sharp Shooters Band" 
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <FollowUsSection />
    </div>
  );
}