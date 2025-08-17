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
                <a 
                  href="/attached_assets/Deer Creek Sharp Shooters Stage Plot Input List (3)_1755457651063.pdf"
                  target="_blank"
                  className="flex items-center space-x-3 p-3 bg-dcss-light rounded-lg hover:bg-dcss-warm transition-colors"
                >
                  <i className="fas fa-file-pdf text-dcss-orange"></i>
                  <span className="text-sm">Stage Plot & Input List</span>
                </a>
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

          {/* Technical Rider & Stage Plot */}
          <div className="mt-12 bg-dcss-warm p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-dcss-dark mb-6 text-center">
              Technical Rider & Stage Plot
            </h3>
            
            {/* Stage Layout */}
            <div className="mb-8 bg-dcss-light p-6 rounded-lg">
              <h4 className="font-heading font-semibold text-dcss-dark mb-4 text-center">Stage Layout</h4>
              <div className="text-xs font-mono bg-dcss-dark text-dcss-light p-6 rounded overflow-x-auto">
                <pre className="text-center whitespace-pre">{`
                      Band IEM Console
                     Rack w FOH Fanout 5'
                       (Need 16 channel
                      sub-snake to FOH)                          Band
                                                                  TB


                                              Bass
                                              (Dan)



                                                           Guitar
                   Dobro           Mandolin                (Alex)                     Fiddle
                   (Fritz)          (Luke)                                            (Kay)
                                                                           Banjo
                                                                         (Harrison)
                `}</pre>
              </div>
            </div>

            {/* Input List */}
            <div className="mb-8">
              <h4 className="font-heading font-semibold text-dcss-dark mb-4 text-center">Input List (16 Channels)</h4>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="bg-dcss-light p-4 rounded-lg">
                  <ul className="text-dcss-dark space-y-2">
                    <li><strong>1.</strong> Dobro DI</li>
                    <li><strong>2.</strong> Mandolin DI</li>
                    <li><strong>3.</strong> Bass DI (Dan)</li>
                    <li><strong>4.</strong> Guitar DI</li>
                    <li><strong>5.</strong> Banjo DI</li>
                    <li><strong>6.</strong> Fiddle DI</li>
                    <li><strong>7.</strong> Dobro Vox (Fritz)</li>
                    <li><strong>8.</strong> Mandolin Vox (Luke)</li>
                  </ul>
                </div>
                <div className="bg-dcss-light p-4 rounded-lg">
                  <ul className="text-dcss-dark space-y-2">
                    <li><strong>9.</strong> Guitar Vox (Alex)</li>
                    <li><strong>10.</strong> Banjo Vox (Harrison)</li>
                    <li><strong>11.</strong> Fiddle Vox (Kay)</li>
                    <li><strong>12.</strong> Guest DI 1</li>
                    <li><strong>13.</strong> Guest DI 2</li>
                    <li><strong>14.</strong> Band Talkback</li>
                    <li><strong>15.</strong> Ambient SR</li>
                    <li><strong>16.</strong> Ambient SL</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-dcss-light p-6 rounded-lg">
                <h4 className="font-heading font-semibold text-dcss-dark mb-3 text-center">Venue Provides:</h4>
                <ul className="text-dcss-dark space-y-2 text-sm">
                  <li>• 6 Tall Microphone Stands</li>
                  <li>• 2 Short Microphone Stands</li>
                  <li>• Power as indicated</li>
                  <li>• 16-channel mixing console capability</li>
                  <li>• Sub-snake connection to FOH</li>
                </ul>
              </div>
              
              <div className="bg-dcss-light p-6 rounded-lg">
                <h4 className="font-heading font-semibold text-dcss-dark mb-3 text-center">Band Provides:</h4>
                <ul className="text-dcss-dark space-y-2 text-sm">
                  <li>• DIs and Microphones</li>
                  <li>• IEM Console/Rack</li>
                  <li>• Stage Sub Snakes</li>
                  <li>• Backline Amplification</li>
                  <li>• All instruments and cables</li>
                </ul>
              </div>
            </div>

            <div className="text-center p-4 bg-dcss-orange bg-opacity-20 rounded-lg">
              <p className="text-dcss-dark">
                <strong>Technical Contact:</strong> Luke Hinder - 
                <a href="tel:443-417-3039" className="text-dcss-orange hover:underline ml-1 font-semibold">443-417-3039</a>
              </p>
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
