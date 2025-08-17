// YouTube API integration for Deer Creek Sharp Shooters
// Channel: https://www.youtube.com/@deercreeksharpshooters/videos

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  publishedAt: string;
  duration: string;
  viewCount: string;
}

// YouTube video IDs for DCSS content - these would normally come from the YouTube API
// For now, we'll use placeholder IDs that can be updated with real video IDs
export const featuredVideos: YouTubeVideo[] = [
  {
    id: "dQw4w9WgXcQ", // Placeholder - replace with actual DCSS video ID
    title: "DCSS - Live Performance Reel",
    description: "Get a feel for the live show energy with our performance highlights.",
    thumbnail: {
      url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      width: 1280,
      height: 720
    },
    publishedAt: "2024-01-15T00:00:00Z",
    duration: "PT3M30S",
    viewCount: "1500"
  },
  {
    id: "dQw4w9WgXcQ", // Placeholder - replace with actual DCSS video ID
    title: "Behind the Scenes - Recording Crik",
    description: "Studio footage from recording our debut album.",
    thumbnail: {
      url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      width: 1280,
      height: 720
    },
    publishedAt: "2023-12-01T00:00:00Z",
    duration: "PT5M45S",
    viewCount: "850"
  },
  {
    id: "dQw4w9WgXcQ", // Placeholder - replace with actual DCSS video ID
    title: "WinterWonderGrass 2024 Highlights",
    description: "Festival performance highlights from Steamboat Springs.",
    thumbnail: {
      url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      width: 1280,
      height: 720
    },
    publishedAt: "2024-02-20T00:00:00Z",
    duration: "PT4M15S",
    viewCount: "2100"
  },
  {
    id: "dQw4w9WgXcQ", // Placeholder - replace with actual DCSS video ID
    title: "Acoustic Session - Goodbye Television",
    description: "Stripped-down acoustic version of our popular track.",
    thumbnail: {
      url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      width: 1280,
      height: 720
    },
    publishedAt: "2023-11-10T00:00:00Z",
    duration: "PT3M52S",
    viewCount: "1200"
  }
];

export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}

export function getYouTubeThumbnailUrl(videoId: string, quality: 'default' | 'medium' | 'high' | 'standard' | 'maxres' = 'high'): string {
  return `https://img.youtube.com/vi/${videoId}/${quality === 'high' ? 'hqdefault' : quality === 'maxres' ? 'maxresdefault' : quality + 'default'}.jpg`;
}

export function formatYouTubeDuration(duration: string): string {
  // Parse ISO 8601 duration format (PT3M30S) to readable format (3:30)
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return '';
  
  const [, hours, minutes, seconds] = match;
  const h = parseInt(hours || '0');
  const m = parseInt(minutes || '0');
  const s = parseInt(seconds || '0');
  
  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function formatViewCount(count: string): string {
  const num = parseInt(count);
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M views`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K views`;
  }
  return `${num} views`;
}

// Channel information
export const channelInfo = {
  name: "Deer Creek Sharp Shooters",
  handle: "@deercreeksharpshooters",
  url: "https://www.youtube.com/@deercreeksharpshooters",
  videosUrl: "https://www.youtube.com/@deercreeksharpshooters/videos"
};