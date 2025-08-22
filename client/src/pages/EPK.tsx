import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import FollowUsSection from "@/components/FollowUsSection";
import JSZip from 'jszip';
import { googleDriveImages } from "@/lib/images";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function EPK() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const pressPhotos = [
    { url: googleDriveImages.pressPhoto1, name: 'DCSS_Press_Photo_1.jpg' },
    { url: googleDriveImages.pressPhoto2, name: 'DCSS_Press_Photo_2.jpg' },
    { url: googleDriveImages.pressPhoto3, name: 'DCSS_Press_Photo_3.jpg' },
    { url: googleDriveImages.pressPhoto4, name: 'DCSS_Press_Photo_4.jpg' },
    { url: googleDriveImages.pressPhoto5, name: 'DCSS_Press_Photo_5.jpg' },
    { url: googleDriveImages.pressPhoto6, name: 'DCSS_Press_Photo_6.jpg' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % pressPhotos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + pressPhotos.length) % pressPhotos.length);
  };

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };
  const downloadAsBlob = async (url: string): Promise<Blob> => {
    const response = await fetch(url);
    return response.blob();
  };

  const handleDownloadPhotos = async () => {
    console.log('Downloading photos');
    const zip = new JSZip();
    const photosFolder = zip.folder("DCSS_Photos");
    
    const photos = pressPhotos;
    
    try {
      // Add each photo to the zip folder
      for (const photo of photos) {
        const blob = await downloadAsBlob(photo.url);
        photosFolder?.file(photo.name, blob);
      }
      
      // Generate and download the zip file
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(zipBlob);
      link.download = 'DCSS_Photos.zip';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error creating photos zip:', error);
    }
  };

  const handleDownloadLogos = async () => {
    console.log('Downloading logos');
    const zip = new JSZip();
    const logosFolder = zip.folder("DCSS_Logos");
    
    const logos = [
      { url: googleDriveImages.logo1, name: 'DCSS_Logo_1.jpg' },
      { url: googleDriveImages.logo2, name: 'DCSS_Logo_2.png' },
      { url: googleDriveImages.logo3, name: 'DCSS_Logo_3.png' },
      { url: googleDriveImages.logo4, name: 'DCSS_Logo_4.jpg' },
      { url: googleDriveImages.logo5, name: 'DCSS_Logo_5.jpg' }
    ];
    
    try {
      // Add each logo to the zip folder
      for (const logo of logos) {
        const blob = await downloadAsBlob(logo.url);
        logosFolder?.file(logo.name, blob);
      }
      
      // Generate and download the zip file
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(zipBlob);
      link.download = 'DCSS_Logos.zip';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error creating logos zip:', error);
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-dcss-light">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dcss-dark mb-6">
              Electronic Press Kit
            </h1>
            <p className="text-xl text-gray-600">
              Press materials, high-resolution photos, and promotional assets for Deer Creek Sharp Shooters
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {/* Stage Plot Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-heading font-bold text-dcss-dark">Stage Plot</h3>
                <div className="p-2 bg-dcss-orange/10 rounded-lg">
                  <svg className="w-6 h-6 text-dcss-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Technical requirements and stage setup for DCSS performances</p>
              <Button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/DCSS_Stage_Plot_Input_List.pdf';
                  link.download = 'DCSS_Stage_Plot_Input_List.pdf';
                  link.click();
                }}
                className="w-full bg-dcss-dark hover:bg-gray-800 text-white"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Stage Plot
              </Button>
            </div>

            {/* High-Res Photos Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-heading font-bold text-dcss-dark">Press Photos</h3>
                <div className="p-2 bg-dcss-orange/10 rounded-lg">
                  <svg className="w-6 h-6 text-dcss-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">High-resolution performance and promotional photos</p>
              <Button 
                onClick={handleDownloadPhotos}
                className="w-full bg-dcss-dark hover:bg-gray-800 text-white"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Photos (ZIP)
              </Button>
            </div>

            {/* Logo Assets Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-heading font-bold text-dcss-dark">Logo Assets</h3>
                <div className="p-2 bg-dcss-orange/10 rounded-lg">
                  <svg className="w-6 h-6 text-dcss-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v1a1 1 0 01-1 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7a1 1 0 01-1-1V5a1 1 0 011-1h4zM9 3v1h6V3H9z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">DCSS logos and branding materials in various formats</p>
              <Button 
                onClick={handleDownloadLogos}
                className="w-full bg-dcss-dark hover:bg-gray-800 text-white"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Logos (ZIP)
              </Button>
            </div>
          </div>

          {/* Band Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
            <h2 className="text-3xl font-heading font-bold text-dcss-dark mb-6">Band Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-dcss-dark mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Genre:</strong> Bluegrass, Americana</li>
                  <li><strong>Location:</strong> Colorado, USA</li>
                  <li><strong>Formed:</strong> 2012</li>
                  <li><strong>Members:</strong> 6</li>
                  <li><strong>Latest Release:</strong> "Crik" (2023)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold text-dcss-dark mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Email:</strong> <a href="mailto:DCSSbluegrass@gmail.com" className="text-dcss-orange hover:underline">DCSSbluegrass@gmail.com</a></li>
                  <li><strong>Phone:</strong> <a href="tel:443-417-7287" className="text-dcss-orange hover:underline">443-417-7287</a></li>
                  <li><strong>Website:</strong> <a href="/" className="text-dcss-orange hover:underline">dcssbluegrass.com</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Photo Gallery Preview */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-heading font-bold text-dcss-dark mb-6">Photo Gallery Preview</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pressPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer group overflow-hidden rounded-lg"
                  onClick={() => openGallery(index)}
                >
                  <img 
                    src={photo.url} 
                    alt={`DCSS Press Photo ${index + 1}`} 
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Gallery Modal */}
            <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
              <DialogContent className="max-w-4xl w-full p-0 bg-black border-none">
                <div className="relative">
                  {/* Close button */}
                  <button
                    onClick={() => setIsGalleryOpen(false)}
                    className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors"
                  >
                    <X size={24} />
                  </button>

                  {/* Main image */}
                  <div className="relative">
                    <img
                      src={pressPhotos[currentImageIndex]?.url}
                      alt={`DCSS Press Photo ${currentImageIndex + 1}`}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />

                    {/* Navigation arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {pressPhotos.length}
                    </div>
                  </div>

                  {/* Thumbnail navigation */}
                  <div className="flex justify-center space-x-2 p-4 bg-black bg-opacity-75">
                    {pressPhotos.map((photo, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                          index === currentImageIndex ? 'border-dcss-orange' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={photo.url}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      <FollowUsSection />
    </div>
  );
}