import { googleDriveImages } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="bg-dcss-dark text-dcss-light py-8 border-t border-dcss-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <img src={googleDriveImages.logoText} alt="DCSS Logo" className="h-12 mx-auto" />
          </div>
          <p className="text-dcss-light mb-4">&copy; 2024 Deer Creek Sharp Shooters. All rights reserved.</p>
          <p className="text-dcss-orange font-heading">High-energy Colorado bluegrass.</p>
        </div>
      </div>
    </footer>
  );
}
