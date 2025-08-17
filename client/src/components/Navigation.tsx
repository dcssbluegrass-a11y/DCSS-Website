import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shows", href: "/shows" },
    { name: "About", href: "/about" },
    { name: "Music", href: "/music" },
    { name: "Videos", href: "/videos" },
    { name: "Merch", href: "/merch" },
    { name: "EPK", href: "/epk" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-dcss-dark text-dcss-light fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="text-dcss-orange font-heading font-bold text-lg tracking-wide">
                DEER CREEK SHARP SHOOTERS
              </div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-heading font-medium transition-colors duration-200 ${
                    location === item.href
                      ? "text-dcss-orange"
                      : "text-dcss-light hover:text-dcss-orange"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-dcss-light hover:text-dcss-orange"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dcss-dark">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 font-heading transition-colors duration-200 ${
                  location === item.href
                    ? "text-dcss-orange"
                    : "text-dcss-light hover:text-dcss-orange"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
