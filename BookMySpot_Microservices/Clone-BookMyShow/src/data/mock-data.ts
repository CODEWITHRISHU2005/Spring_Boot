export type Movie = {
  id: string;
  title: string;
  image: string;
  rating?: string;
  genres: string[];
  languages: string[];
  certification: string;
  releaseDate?: string;
  duration?: string;
  description?: string;
  interested?: number;
};

export type City = {
  id: string;
  name: string;
  icon: string;
};

export type Event = {
  id: string;
  title: string;
  image: string;
  category: string;
};

export const cities: City[] = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    icon: 'https://ext.same-assets.com/2789891457/1217692439.png'
  },
  {
    id: 'delhi-ncr',
    name: 'Delhi-NCR',
    icon: 'https://ext.same-assets.com/2789891457/1540207890.png'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    icon: 'https://ext.same-assets.com/2789891457/3505454515.png'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    icon: 'https://ext.same-assets.com/2789891457/1554150646.png'
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    icon: 'https://ext.same-assets.com/2789891457/1756295143.png'
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    icon: 'https://ext.same-assets.com/2789891457/2991433225.png'
  },
  {
    id: 'pune',
    name: 'Pune',
    icon: 'https://ext.same-assets.com/2789891457/2953535177.png'
  },
  {
    id: 'chennai',
    name: 'Chennai',
    icon: 'https://ext.same-assets.com/2789891457/1949274167.png'
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    icon: 'https://ext.same-assets.com/2789891457/2366324500.png'
  },
  {
    id: 'kochi',
    name: 'Kochi',
    icon: 'https://ext.same-assets.com/2789891457/1164898961.jpeg'
  }
];

export const movies: Movie[] = [
  {
    id: 'bhool-chuk-maaf',
    title: 'Bhool Chuk Maaf',
    image: 'https://ext.same-assets.com/2789891457/1026487719.jpeg',
    genres: ['Comedy', 'Romantic'],
    languages: ['Hindi'],
    certification: 'UA13+',
    duration: '2h 1m',
    releaseDate: '9 May, 2025',
    description: 'Titli hai Ranjan ka pyaar; par haldi par atka hai uska sansaar, Toh dekhne zaroor aaiyega inki kahaani with parivaar.',
    interested: 55100
  },
  {
    id: 'thunderbolts',
    title: 'Thunderbolts*',
    image: 'https://ext.same-assets.com/2789891457/1371554276.jpeg',
    genres: ['Action', 'Adventure', 'Sci-Fi', 'Superhero'],
    languages: ['English', 'Hindi', 'Telugu', 'Tamil'],
    certification: 'UA13+',
    rating: '8.2/10'
  },
  {
    id: 'raid-2',
    title: 'Raid 2',
    image: 'https://ext.same-assets.com/2789891457/904954549.jpeg',
    genres: ['Drama', 'Thriller'],
    languages: ['Hindi'],
    certification: 'UA13+',
    rating: '8.3/10'
  },
  {
    id: 'shinchan',
    title: 'Shinchan: Our Dinosaur Diary',
    image: 'https://ext.same-assets.com/2789891457/710365223.jpeg',
    genres: ['Adventure', 'Anime', 'Comedy', 'Drama'],
    languages: ['Japanese', 'Hindi', 'Telugu', 'Tamil'],
    certification: 'U',
    rating: '9.1/10'
  },
  {
    id: 'kesari-chapter-2',
    title: 'Kesari Chapter 2: The Untold Story of Jallianwala Bagh',
    image: 'https://ext.same-assets.com/2789891457/2291249316.jpeg',
    genres: ['Drama', 'Historical'],
    languages: ['Hindi'],
    certification: 'A',
    rating: '9.3/10'
  }
];

export const events: Event[] = [
  {
    id: 'vilen-live',
    title: 'VILEN LIVE - CHANDIGARH',
    image: 'https://ext.same-assets.com/2789891457/1369463210.jpeg',
    category: 'Music Shows'
  },
  {
    id: 'swiftchella',
    title: 'Swiftchella - A Taylor Swift-Themed Fan Party',
    image: 'https://ext.same-assets.com/2789891457/3104509074.jpeg',
    category: 'Music Shows'
  },
  {
    id: 'harsh-gujral',
    title: 'Jo Bolta Hai Wohi Hota Hai feat Harsh Gujral',
    image: 'https://ext.same-assets.com/2789891457/1743523663.jpeg',
    category: 'Comedy Shows'
  },
  {
    id: 'qawwali',
    title: 'Sagar Waali Qawwali - Bharat Tour 2025 (Jaipur)',
    image: 'https://ext.same-assets.com/2789891457/313975588.jpeg',
    category: 'Music Shows'
  }
];

export const activities: Event[] = [
  {
    id: 'funcity',
    title: 'Funcity Amusement and waterpark',
    image: 'https://ext.same-assets.com/2789891457/3406051060.jpeg',
    category: 'Theme Parks'
  },
  {
    id: 'mystery-rooms',
    title: 'Mystery Rooms - Chandigarh',
    image: 'https://ext.same-assets.com/2789891457/3499708682.jpeg',
    category: 'Adventure'
  },
  {
    id: 'game-palacio',
    title: 'The Game Palacio - Chandigarh',
    image: 'https://ext.same-assets.com/2789891457/125517968.jpeg',
    category: 'Gaming'
  },
  {
    id: 'pool-party',
    title: 'Jaipur Pool Party 3.0',
    image: 'https://ext.same-assets.com/2789891457/2625703285.jpeg',
    category: 'Party'
  }
];
