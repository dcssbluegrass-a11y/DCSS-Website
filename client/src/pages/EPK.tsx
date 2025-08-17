import { Button } from "@/components/ui/button";
import logoPath from "@assets/Copy of Patch 5_1755456309036.png";
import livePhotoPath from "@assets/Copy of _83A3865_1755456309034.jpg";
import festivalPhotoPath from "@assets/Strings_1755456309036.jpg";
import groupPhotoPath from "@assets/Copy of sdf-21_1755456309036.jpg";

export default function EPK() {
  const handleDownload = (type: string) => {
    // Implement download functionality
    console.log(`Downloading ${type}`);
  };

  return (
    <div className="pt-16 min-h-screen bg-dcss-light">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dcss-dark mb-6">
              Electronic Press Kit
            </h1>
            <p className="text-xl text-dcss-dark">
              Download high-resolution assets and press materials
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logos Section */}
            <div className="bg-dcss-warm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-heading font-bold text-dcss-dark mb-4">Logos</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-dcss-dark p-4 rounded-lg">
                  <img 
                    src={logoPath} 
                    alt="DCSS Logo White" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-dcss-light p-4 rounded-lg border">
                  <img 
                    src={logoPath} 
                    alt="DCSS Patch" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <Button 
                onClick={() => handleDownload('logos')}
                className="w-full bg-dcss-orange hover:bg-orange-600 text-white font-heading font-semibold"
              >
                Download Logos
              </Button>
            </div>
            
            {/* Photos Section */}
            <div className="bg-dcss-warm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-heading font-bold text-dcss-dark mb-4">Photos</h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <img 
                  src={livePhotoPath} 
                  alt="Live Photo" 
                  className="w-full h-16 object-cover rounded"
                />
                <img 
                  src={festivalPhotoPath} 
                  alt="Festival Photo" 
                  className="w-full h-16 object-cover rounded"
                />
                <img 
                  src={groupPhotoPath} 
                  alt="Group Photo" 
                  className="w-full h-16 object-cover rounded"
                />
                <img 
                  src={groupPhotoPath} 
                  alt="Candid Photo" 
                  className="w-full h-16 object-cover rounded"
                />
              </div>
              <Button 
                onClick={() => handleDownload('photos')}
                className="w-full bg-dcss-orange hover:bg-orange-600 text-white font-heading font-semibold"
              >
                Download Photos
              </Button>
            </div>
            
            {/* Documents Section */}
            <div className="bg-dcss-warm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-heading font-bold text-dcss-dark mb-4">Documents</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3 p-3 bg-dcss-light rounded-lg">
                  <i className="fas fa-file-pdf text-dcss-orange"></i>
                  <span className="text-sm">One-Sheet</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-dcss-light rounded-lg">
                  <i className="fas fa-file-pdf text-dcss-orange"></i>
                  <span className="text-sm">Stage Plot</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-dcss-light rounded-lg">
                  <i className="fas fa-file-pdf text-dcss-orange"></i>
                  <span className="text-sm">Tech Rider</span>
                </div>
              </div>
              <Button 
                onClick={() => handleDownload('documents')}
                className="w-full bg-dcss-orange hover:bg-orange-600 text-white font-heading font-semibold"
              >
                Download All Docs
              </Button>
            </div>
          </div>

          {/* Music and Social Links */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-heading font-bold text-dcss-dark mb-6">Streaming & Social</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://open.spotify.com/album/4rxFBL7xVADypnLF0PO968" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-heading font-semibold transition-colors duration-200"
              >
                <i className="fab fa-spotify"></i>
                <span>Spotify</span>
              </a>
              <a 
                href="https://www.youtube.com/@deercreeksharpshooters" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-heading font-semibold transition-colors duration-200"
              >
                <i className="fab fa-youtube"></i>
                <span>YouTube</span>
              </a>
              <a 
                href="https://www.instagram.com/deercreeksharpshooters" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-heading font-semibold transition-colors duration-200"
              >
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/deercreeksharpshooters" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-heading font-semibold transition-colors duration-200"
              >
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
