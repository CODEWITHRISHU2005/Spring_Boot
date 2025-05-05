export interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
  genres: string[];
  language: string;
  certificate: string;
  duration: string;
}

export interface Event {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
  venue: string;
  price: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  code: string;
  imageUrl: string;
}

export interface City {
  id: string;
  name: string;
}

export interface Theater {
  id: string;
  name: string;
  location: string;
  showTimes: string[];
}