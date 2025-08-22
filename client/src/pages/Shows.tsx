import { useQuery } from "@tanstack/react-query";
import stringsImagePath from "@assets/Strings_1755456309036.jpg";
import FollowUsSection from "@/components/FollowUsSection";

interface BandsinTownShow {
  id: string;
  url: string;
  on_sale_datetime: string;
  datetime: string;
  description: string;
  venue: {
    name: string;
    location: string;
    city: string;
    region: string;
    country: string;
  };
  offers: Array<{
    type: string;
    url: string;
    status: string;
  }>;
}

export default function Shows() {
  const { data: upcomingShows = [], isLoading } = useQuery<BandsinTownShow[]>({
    queryKey: ['bandsintown-shows'],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://rest.bandsintown.com/artists/Deer%20Creek%20Sharp%20Shooters/events?app_id=9cf58ceab50e86d6c60ef79eaa4d023e&date=upcoming`
        );
        if (!response.ok) {
          console.log('Bandsintown API response not ok:', response.status);
          return [];
        }
        const data = await response.json();
        return Array.isArray(data) ? data : [];
      } catch (error) {
        console.log('Error fetching shows:', error);
        return [];
      }
    },
  });

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
        <div className="relative z-10 text-center text-dcss-light">
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
                {isLoading ? (
                  <div className="p-4 border-l-4 border-dcss-orange bg-dcss-warm">
                    <div className="font-heading font-semibold text-dcss-dark">
                      Loading upcoming shows...
                    </div>
                  </div>
                ) : upcomingShows.length > 0 ? (
                  upcomingShows.map((show) => (
                    <div key={show.id} className="p-4 border-l-4 border-dcss-orange bg-dcss-warm">
                      <div className="font-heading font-semibold text-dcss-dark mb-2">
                        {show.venue.name}
                      </div>
                      <p className="text-sm text-dcss-dark mb-1">
                        {show.venue.city}, {show.venue.region}
                      </p>
                      <p className="text-sm text-dcss-dark opacity-75 mb-2">
                        {new Date(show.datetime).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                      {show.offers && show.offers.length > 0 && show.offers[0].url && (
                        <a 
                          href={show.offers[0].url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block text-dcss-orange hover:text-orange-600 font-semibold text-sm"
                        >
                          Get Tickets →
                        </a>
                      )}
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
              <h3 className="text-2xl font-heading font-bold text-dcss-dark mb-6">Notable Festival Appearances</h3>
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
      <FollowUsSection />
    </div>
  );
}
