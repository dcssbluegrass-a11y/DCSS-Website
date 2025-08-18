import { Button } from "@/components/ui/button";
import logoPath from "@assets/Copy of Patch 5_1755456309036.png";
import logoTextPath from "@assets/Patches - 8 - Edited_1755487516598.png";
import logoWhitePath from "@assets/Copy of Logo 1 w White Outline_1755456309035.png";
import photo1 from "@assets/Copy of 44313_53ceb03475c266827a4fcb1a8ab528ab-5_21_2024, 12_34_25 PM_1755487774820.jpg";
import photo2 from "@assets/Copy of _83A3865_1755456309034.jpg";
import photo3 from "@assets/Copy of DSC02921_1755456309035.jpg";
import photo4 from "@assets/Copy of JMP_3850_1755456309035.jpg";
import photo5 from "@assets/Copy of sdf-21_1755486190033.jpg";
import photo6 from "@assets/Strings_1755487567666.jpg";

export default function EPK() {
  const handleDownloadPhotos = () => {
    const photos = [photo1, photo2, photo3, photo4, photo5, photo6];
    photos.forEach((photo, index) => {
      const link = document.createElement('a');
      link.href = photo;
      link.download = `DCSS_Photo_${index + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const handleDownloadLogos = () => {
    const logos = [logoPath, logoTextPath, logoWhitePath];
    logos.forEach((logo, index) => {
      const link = document.createElement('a');
      link.href = logo;
      link.download = `DCSS_Logo_${index + 1}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
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
                    src={logoWhitePath} 
                    alt="DCSS Logo White" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-dcss-light p-4 rounded-lg border">
                  <img 
                    src={logoTextPath} 
                    alt="DCSS Wood Text Logo" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <Button 
                onClick={handleDownloadLogos}
                className="w-full bg-dcss-orange hover:bg-orange-600 text-white font-heading font-semibold"
              >
                Download All Logos
              </Button>
            </div>
            
            {/* Photos Section */}
            <div className="bg-dcss-warm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-heading font-bold text-dcss-dark mb-4">Photos</h3>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <img 
                  src={photo1} 
                  alt="Band Performance" 
                  className="w-full h-16 object-cover rounded"
                />
                <img 
                  src={photo2} 
                  alt="Live Performance" 
                  className="w-full h-16 object-cover rounded"
                />
                <img 
                  src={photo3} 
                  alt="Band Photo" 
                  className="w-full h-16 object-cover rounded"
                />
                <img 
                  src={photo4} 
                  alt="Stage Performance" 
                  className="w-full h-16 object-cover rounded"
                />
                <img 
                  src={photo5} 
                  alt="Concert Photo" 
                  className="w-full h-16 object-cover rounded"
                />
                <img 
                  src={photo6} 
                  alt="Festival Performance" 
                  className="w-full h-16 object-cover rounded"
                />
              </div>
              <Button 
                onClick={handleDownloadPhotos}
                className="w-full bg-dcss-orange hover:bg-orange-600 text-white font-heading font-semibold"
              >
                Download All Photos
              </Button>
            </div>
            
            {/* Documents Section */}
            <div className="bg-dcss-warm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-heading font-bold text-dcss-dark mb-4">Documents</h3>
              <div className="space-y-3 mb-4">
                <a 
                  href="/attached_assets/Deer Creek Sharp Shooters Stage Plot Input List (3)_1755457651063.pdf"
                  download="DCSS_Stage_Plot_Input_List.pdf"
                  className="flex items-center space-x-3 p-3 bg-dcss-light rounded-lg hover:bg-dcss-warm transition-colors cursor-pointer"
                >
                  <i className="fas fa-file-pdf text-dcss-orange"></i>
                  <span className="text-sm">Stage Plot & Input List</span>
                  <i className="fas fa-download text-dcss-orange ml-auto"></i>
                </a>
              </div>
              <a 
                href="/attached_assets/Deer Creek Sharp Shooters Stage Plot Input List (3)_1755457651063.pdf"
                download="DCSS_Stage_Plot_Input_List.pdf"
                className="block w-full bg-dcss-orange hover:bg-orange-600 text-white font-heading font-semibold py-2 px-4 rounded text-center transition-colors"
              >
                Download Document
              </a>
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
