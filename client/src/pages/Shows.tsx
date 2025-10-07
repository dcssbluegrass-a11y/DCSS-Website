import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import stringsImagePath from "@assets/Strings_1755456309036.jpg";
import FollowUsSection from "@/components/FollowUsSection";
import { Button } from "@/components/ui/button";

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
  const [showType, setShowType] = useState<'upcoming' | 'past'>('upcoming');

  const { data: upcomingShows = [], isLoading: upcomingLoading } = useQuery<BandsinTownShow[]>({
    queryKey: ['bandsintown-shows', 'upcoming'],
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
    enabled: showType === 'upcoming',
  });

  const { data: pastShows = [], isLoading: pastLoading } = useQuery<BandsinTownShow[]>({
    queryKey: ['bandsintown-shows', 'past'],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://rest.bandsintown.com/artists/Deer%20Creek%20Sharp%20Shooters/events?app_id=9cf58ceab50e86d6c60ef79eaa4d023e&date=past`
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
    enabled: showType === 'past',
  });

  const notableFestivals = [
    { name: "WinterWonderGrass Steamboat", location: "Steamboat Springs, CO" },
    { name: "Palisade Bluegrass and Roots", location: "Palisade, CO" },
    { name: "The Ramble Festival", location: "Darlington, MD" },
    { name: "Tico Time Bluegrass Festival", location: "Aztec, NM" },
  ];

  const isLoading = showType === 'upcoming' ? upcomingLoading : pastLoading;
  const currentShows = showType === 'upcoming' ? upcomingShows : pastShows;

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-dcss-light p-1 shadow-lg">
              <Button
                data-testid="button-upcoming-shows"
                onClick={() => setShowType('upcoming')}
                className={`px-6 py-2 rounded-md font-heading font-semibold transition-all ${
                  showType === 'upcoming'
                    ? 'bg-dcss-orange text-dcss-light'
                    : 'bg-transparent text-dcss-dark hover:bg-dcss-warm'
                }`}
              >
                Upcoming Shows
              </Button>
              <Button
                data-testid="button-past-shows"
                onClick={() => setShowType('past')}
                className={`px-6 py-2 rounded-md font-heading font-semibold transition-all ${
                  showType === 'past'
                    ? 'bg-dcss-orange text-dcss-light'
                    : 'bg-transparent text-dcss-dark hover:bg-dcss-warm'
                }`}
              >
                Past Shows
              </Button>
            </div>
          </div>

          {/* Shows Display */}
          <div className="bg-dcss-light p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-heading font-bold text-dcss-dark mb-6">
              {showType === 'upcoming' ? 'Upcoming Shows' : 'Past Shows'}
            </h3>
            
            <div className="space-y-4">
              {isLoading ? (
                <div className="p-4 border-l-4 border-dcss-orange bg-dcss-warm">
                  <div className="font-heading font-semibold text-dcss-dark">
                    Loading {showType} shows...
                  </div>
                </div>
              ) : showType === 'upcoming' ? (
                upcomingShows.length > 0 ? (
                  upcomingShows.map((show) => (
                    <div key={show.id} data-testid={`show-upcoming-${show.id}`} className="p-4 border-l-4 border-dcss-orange bg-dcss-warm">
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
                          data-testid={`link-tickets-${show.id}`}
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
                )
              ) : (
                <>
                  {pastShows.length > 0 && (
                    <>
                      {pastShows
                        .sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime())
                        .map((show) => (
                          <div key={show.id} data-testid={`show-past-${show.id}`} className="p-4 border-l-4 border-dcss-accent bg-dcss-warm">
                            <div className="font-heading font-semibold text-dcss-dark mb-2">
                              {show.venue.name}
                            </div>
                            <p className="text-sm text-dcss-dark mb-1">
                              {show.venue.city}, {show.venue.region}
                            </p>
                            <p className="text-sm text-dcss-dark opacity-75">
                              {new Date(show.datetime).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                        ))}
                    </>
                  )}
                  
                  <div className="p-4 border-l-4 border-dcss-accent bg-dcss-warm mb-4 mt-6">
                    <div className="font-heading font-semibold text-dcss-dark">
                      Notable Festival Appearances
                    </div>
                  </div>
                  {notableFestivals.map((festival, index) => (
                    <div key={index} data-testid={`festival-${index}`} className="p-4 border-l-4 border-dcss-accent bg-dcss-warm">
                      <div className="font-heading font-semibold text-dcss-dark">{festival.name}</div>
                      <p className="text-sm text-dcss-dark opacity-75">{festival.location}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <FollowUsSection />
    </div>
  );
}
