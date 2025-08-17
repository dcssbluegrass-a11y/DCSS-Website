const BANDSINTOWN_API_KEY = '9cf58ceab50e86d6c60ef79eaa4d023e';
const BANDSINTOWN_API_BASE = 'https://rest.bandsintown.com/artists';

export interface BandsintownEvent {
  id: string;
  title: string;
  description: string;
  artist_id: string;
  url: string;
  on_sale_datetime: string;
  datetime: string;
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
  lineup: string[];
}

export interface BandsintownArtist {
  id: string;
  name: string;
  url: string;
  image_url: string;
  thumb_url: string;
  facebook_page_url: string;
  mbid: string;
  tracker_count: number;
  upcoming_event_count: number;
}

export async function fetchArtistInfo(artistName: string): Promise<BandsintownArtist | null> {
  try {
    const response = await fetch(
      `${BANDSINTOWN_API_BASE}/${encodeURIComponent(artistName)}?app_id=${BANDSINTOWN_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch artist info: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching artist info:', error);
    return null;
  }
}

export async function fetchUpcomingEvents(artistName: string): Promise<BandsintownEvent[]> {
  try {
    const response = await fetch(
      `${BANDSINTOWN_API_BASE}/${encodeURIComponent(artistName)}/events?app_id=${BANDSINTOWN_API_KEY}`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        return []; // No events found
      }
      throw new Error(`Failed to fetch events: ${response.status}`);
    }
    
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    return [];
  }
}

export async function fetchPastEvents(artistName: string, date?: string): Promise<BandsintownEvent[]> {
  try {
    const dateParam = date || '2020-01-01,2024-12-31';
    const response = await fetch(
      `${BANDSINTOWN_API_BASE}/${encodeURIComponent(artistName)}/events?app_id=${BANDSINTOWN_API_KEY}&date=${dateParam}`
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        return []; // No events found
      }
      throw new Error(`Failed to fetch past events: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Filter past events (events before today)
    const now = new Date();
    const pastEvents = Array.isArray(data) 
      ? data.filter(event => new Date(event.datetime) < now)
      : [];
    
    return pastEvents;
  } catch (error) {
    console.error('Error fetching past events:', error);
    return [];
  }
}

export function formatEventDate(datetime: string): string {
  const date = new Date(datetime);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export function formatEventLocation(venue: BandsintownEvent['venue']): string {
  const parts = [venue.name];
  if (venue.city) parts.push(venue.city);
  if (venue.region) parts.push(venue.region);
  if (venue.country && venue.country !== 'United States') parts.push(venue.country);
  
  return parts.join(', ');
}