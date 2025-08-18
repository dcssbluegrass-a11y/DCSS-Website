import { ExternalLink } from "lucide-react";
import logoPath from "@assets/Copy of Patch 2_1754928674012.png";

export default function Footer() {
  return (
    <footer className="bg-dark-earth text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src={logoPath} 
              alt="DCSS Footer Logo" 
              className="mx-auto h-16 w-auto logo-style"
            />
          </div>
          <p className="text-warm-beige mb-4">High Energy Experimental Bluegrass</p>
          <p className="text-gray-400 text-sm">© 2024 Deer Creek Sharp Shooters. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-6">
            <a 
              href="https://www.facebook.com/deercreeksharpshooters" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <i className="fab fa-facebook-f"></i>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            <a 
              href="https://www.instagram.com/deercreeksharpshooters" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <i className="fab fa-instagram"></i>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            <a 
              href="https://www.youtube.com/@deercreeksharpshooters" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <i className="fab fa-youtube"></i>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
            <a 
              href="https://open.spotify.com/artist/3weSOGXvC5AEaNN0VSZEbr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <i className="fab fa-spotify"></i>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
