import logoTextPath from "@assets/Copy of 8_1755456309035.png";

export default function Merch() {
  const merchItems = [
    {
      id: 1,
      name: "DCSS Logo T-Shirt",
      price: "$25",
      image: logoTextPath,
      description: "High-quality cotton tee with our signature orange logo"
    },
    {
      id: 2, 
      name: "Crik Album CD",
      price: "$15",
      image: logoTextPath,
      description: "Physical copy of our debut album with liner notes"
    },
    {
      id: 3,
      name: "DCSS Trucker Hat",
      price: "$20",
      image: logoTextPath,
      description: "Mesh back trucker hat with embroidered skull logo"
    },
    {
      id: 4,
      name: "Bluegrass Picks Set",
      price: "$10",
      image: logoTextPath,
      description: "Set of 5 custom guitar picks with band logo"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-dcss-light">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dcss-dark mb-6">
              Merch
            </h1>
            <p className="text-xl text-dcss-dark">
              Support the band with official merchandise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {merchItems.map((item) => (
              <div key={item.id} className="bg-dcss-warm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="bg-dcss-dark p-4 rounded-lg mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-32 object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-dcss-dark mb-2">
                  {item.name}
                </h3>
                <p className="text-dcss-dark opacity-75 mb-4 text-sm">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-bold text-dcss-orange">
                    {item.price}
                  </span>
                  <button className="bg-dcss-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-heading font-semibold transition-colors duration-200">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-dcss-dark text-dcss-light p-6 rounded-xl inline-block">
              <h3 className="text-xl font-heading font-bold mb-4">
                Coming Soon: Online Store
              </h3>
              <p className="mb-4">
                We're working on setting up our online merchandise store. In the meantime, you can purchase items at our shows or contact us directly.
              </p>
              <a 
                href="mailto:DCSSbluegrass@gmail.com?subject=Merchandise%20Inquiry" 
                className="inline-flex items-center space-x-2 bg-dcss-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-heading font-semibold transition-colors duration-200"
              >
                <i className="fas fa-envelope"></i>
                <span>Contact About Merch</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}