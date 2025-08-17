import { Button } from "@/components/ui/button";
import logoPath from "@assets/Copy of 8_1755456309035.png";

export default function Merch() {
  const merchItems = [
    {
      name: "DCSS T-Shirt",
      price: "$25",
      image: logoPath,
      description: "Official band t-shirt with orange logo design"
    },
    {
      name: "DCSS Patch",
      price: "$10",
      image: logoPath, 
      description: "Embroidered patch perfect for jackets and bags"
    },
    {
      name: "DCSS Sticker Pack",
      price: "$5",
      image: logoPath,
      description: "Pack of 5 vinyl stickers featuring band logo"
    },
    {
      name: "Crik Album CD",
      price: "$15",
      image: logoPath,
      description: "Physical copy of our debut album 'Crik'"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-dcss-warm">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dcss-dark mb-6">
              Merch
            </h1>
            <p className="text-xl text-dcss-dark">
              Show your support with official DCSS merchandise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {merchItems.map((item, index) => (
              <div key={index} className="bg-dcss-light rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-dcss-dark flex items-center justify-center p-6">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-dcss-dark text-lg mb-2">
                    {item.name}
                  </h3>
                  <p className="text-dcss-dark text-sm mb-4 opacity-75">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-dcss-orange font-heading font-bold text-xl">
                      {item.price}
                    </span>
                    <Button className="bg-dcss-orange hover:bg-orange-600 text-white font-heading font-semibold">
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter Signup for Merch Updates */}
          <div className="mt-16 bg-dcss-dark text-dcss-light p-8 rounded-xl text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Get Notified About New Merch
            </h3>
            <p className="mb-6">
              Sign up for our mailing list to be the first to know when merchandise becomes available!
            </p>
            <Button className="bg-dcss-orange hover:bg-orange-600 text-white font-heading font-semibold px-8 py-3">
              Join Mailing List
            </Button>
          </div>
          
          {/* Contact for Bulk Orders */}
          <div className="mt-8 text-center">
            <p className="text-dcss-dark">
              Interested in bulk orders or custom merchandise? 
              <a 
                href="mailto:DCSSbluegrass@gmail.com" 
                className="text-dcss-orange hover:text-orange-600 font-semibold ml-1"
              >
                Contact us directly
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}