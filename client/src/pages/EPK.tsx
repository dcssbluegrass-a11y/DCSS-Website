import { Button } from "@/components/ui/button";
import FollowUsSection from "@/components/FollowUsSection";
import JSZip from 'jszip';
import photo1 from "@assets/Copy of 44313_53ceb03475c266827a4fcb1a8ab528ab-5_21_2024, 12_34_25 PM_1755487774820.jpg";
import photo2 from "@assets/Copy of _83A3865_1755456309034.jpg";
import photo3 from "@assets/Copy of DSC02921_1755456309035.jpg";
import photo4 from "@assets/Copy of JMP_3850_1755456309035.jpg";
import photo5 from "@assets/Copy of sdf-21_1755456309036.jpg";
import photo6 from "@assets/Strings_1755456309036.jpg";
import patch2 from "@assets/Copy of Patch 2_1755456309035.png";
import patch5 from "@assets/Copy of Patch 5_1755456309036.png";
import patch8 from "@assets/Patches - 8 - Edited_1755487516598.png";

export default function EPK() {
  const downloadAsBlob = async (url: string): Promise<Blob> => {
    const response = await fetch(url);
    return response.blob();
  };

  const handleDownloadPhotos = async () => {
    console.log('Downloading photos');
    const zip = new JSZip();
    const photosFolder = zip.folder("DCSS_Photos");
    
    const photos = [
      { url: photo1, name: 'Band_Performance_1.jpg' },
      { url: photo2, name: 'Live_Show_2.jpg' },
      { url: photo3, name: 'Band_Group_3.jpg' },
      { url: photo4, name: 'Stage_Performance_4.jpg' },
      { url: photo5, name: 'Concert_Photo_5.jpg' },
      { url: photo6, name: 'Festival_Performance_6.jpg' }
    ];
    
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
      { url: patch2, name: 'DCSS_Logo_Patch_2.png' },
      { url: patch5, name: 'DCSS_Logo_Patch_5.png' },
      { url: patch8, name: 'DCSS_Logo_Patch_8_Edited.png' }
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
                  <li><strong>Website:</strong> <a href="/" className="text-dcss-orange hover:underline">deercreeksharpshooters.com</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Photo Gallery Preview */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-3xl font-heading font-bold text-dcss-dark mb-6">Photo Gallery Preview</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <img src={photo1} alt="DCSS Performance" className="w-full h-32 object-cover rounded-lg" />
              <img src={photo2} alt="DCSS Live Show" className="w-full h-32 object-cover rounded-lg" />
              <img src={photo3} alt="DCSS Band Group" className="w-full h-32 object-cover rounded-lg" />
              <img src={photo4} alt="DCSS Stage Performance" className="w-full h-32 object-cover rounded-lg" />
              <img src={photo5} alt="DCSS Concert" className="w-full h-32 object-cover rounded-lg" />
              <img src={photo6} alt="DCSS Festival Performance" className="w-full h-32 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      <FollowUsSection />
    </div>
  );
}