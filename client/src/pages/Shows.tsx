import stringsImagePath from "@assets/Strings_1755456309036.jpg";

export default function Shows() {
  const upcomingShows = [
    // Will be populated from Bandsintown API or manual entry
  ];

  const pastShows = [
    { name: "WinterWonderGrass Steamboat", location: "Steamboat Springs, CO" },
    { name: "Palisade Bluegrass and Roots", location: "Palisade, CO" },
    { name: "The Ramble Festival", location: "Colorado" },
    { name: "Tico Time Bluegrass Festival", location: "Colorado" },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-dcss-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={stringsImagePath} 
            alt="DCSS performing live" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Shows</h1>
          <p className="text-xl">Catch us live at festivals and venues across Colorado</p>
        </div>
      </section>

      {/* Shows Content */}
      <section className="py-16 bg-dcss-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Upcoming Shows */}
            <div className="bg-dcss-light p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-dcss-dark mb-6">Upcoming Shows</h3>
              <div className="space-y-4">
                {upcomingShows.length > 0 ? (
                  upcomingShows.map((show, index) => (
                    <div key={index} className="p-4 border-l-4 border-dcss-orange bg-dcss-warm">
                      <div className="font-heading font-semibold text-dcss-dark">{show.name}</div>
                      <p className="text-sm text-dcss-dark opacity-75">{show.location}</p>
                    </div>
                  ))
                ) : (
                  <div className="p-4 border-l-4 border-dcss-orange bg-dcss-warm">
                    <div className="font-heading font-semibold text-dcss-dark">
                      Check back soon for upcoming dates!
                    </div>
                    <p className="text-sm text-dcss-dark opacity-75">
                      Follow us on social media for the latest announcements
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Past Shows */}
            <div className="bg-dcss-light p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-dcss-dark mb-6">Recent Performances</h3>
              <div className="space-y-4">
                {pastShows.map((show, index) => (
                  <div key={index} className="p-4 border-l-4 border-dcss-accent">
                    <div className="font-heading font-semibold text-dcss-dark">{show.name}</div>
                    <p className="text-sm text-dcss-dark opacity-75">{show.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
