import { Movie, Event, Offer, City, Theater } from '../types';

export const cities: City[] = [
  { id: '1', name: 'Mumbai' },
  { id: '2', name: 'Delhi' },
  { id: '3', name: 'Bangalore' },
  { id: '4', name: 'Hyderabad' },
  { id: '5', name: 'Chennai' },
  { id: '6', name: 'Kolkata' },
  { id: '7', name: 'Ahmedabad' },
  { id: '8', name: 'Pune' },
];

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Deadpool & Wolverine',
    imageUrl: 'https://images.pexels.com/photos/11796387/pexels-photo-11796387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 8.7,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    language: 'English',
    certificate: 'A',
    duration: '2h 7m',
  },
  {
    id: '2',
    title: 'Kalki 2898 AD',
    imageUrl: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 8.4,
    genres: ['Sci-Fi', 'Action', 'Adventure'],
    language: 'Hindi',
    certificate: 'UA',
    duration: '2h 51m',
  },
  {
    id: '3',
    title: 'Inside Out 2',
    imageUrl: 'https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 7.9,
    genres: ['Animation', 'Comedy', 'Family'],
    language: 'English',
    certificate: 'U',
    duration: '1h 36m',
  },
  {
    id: '4',
    title: 'Twisters',
    imageUrl: 'https://images.pexels.com/photos/8158130/pexels-photo-8158130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 7.5,
    genres: ['Action', 'Thriller', 'Drama'],
    language: 'English',
    certificate: 'UA',
    duration: '1h 55m',
  },
  {
    id: '5',
    title: 'Despicable Me 4',
    imageUrl: 'https://images.pexels.com/photos/9072223/pexels-photo-9072223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 7.2,
    genres: ['Animation', 'Comedy', 'Family'],
    language: 'English',
    certificate: 'U',
    duration: '1h 30m',
  },
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Zakir Khan Live',
    imageUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Comedy',
    date: 'Aug 18, 2024',
    venue: 'Jawaharlal Nehru Stadium',
    price: '₹ 999 onwards',
  },
  {
    id: '2',
    title: 'Arijit Singh India Tour',
    imageUrl: 'https://images.pexels.com/photos/1749822/pexels-photo-1749822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Music',
    date: 'Sep 10, 2024',
    venue: 'DY Patil Stadium',
    price: '₹ 1499 onwards',
  },
  {
    id: '3',
    title: 'Diljit Dosanjh: Dil-Luminati Tour',
    imageUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Music',
    date: 'Oct 5, 2024',
    venue: 'MMRDA Ground',
    price: '₹ 1999 onwards',
  },
  {
    id: '4',
    title: 'Sunburn Festival',
    imageUrl: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Music',
    date: 'Dec 28-30, 2024',
    venue: 'Oxford Golf Resort',
    price: '₹ 2500 onwards',
  },
];

export const offers: Offer[] = [
  {
    id: '1',
    title: 'ICICI Bank Offer',
    description: 'Get 20% off up to ₹200 on movie tickets',
    code: 'ICICIFILM',
    imageUrl: 'https://images.pexels.com/photos/5699403/pexels-photo-5699403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '2',
    title: 'PayTM Wallet',
    description: 'Flat ₹75 cashback on min. spend of ₹300',
    code: 'PAYTMBMS',
    imageUrl: 'https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '3',
    title: 'RuPay Card Offer',
    description: 'Get 15% off up to ₹150 on event tickets',
    code: 'RUPAYEVENT',
    imageUrl: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const theaters: Theater[] = [
  {
    id: '1',
    name: 'PVR: Phoenix Marketcity',
    location: 'Kurla, Mumbai',
    showTimes: ['9:00 AM', '12:30 PM', '3:45 PM', '7:15 PM', '10:30 PM'],
  },
  {
    id: '2',
    name: 'INOX: R City Mall',
    location: 'Ghatkopar, Mumbai',
    showTimes: ['10:15 AM', '1:20 PM', '4:30 PM', '8:00 PM', '11:15 PM'],
  },
  {
    id: '3',
    name: 'Cinepolis: Viviana Mall',
    location: 'Thane, Mumbai',
    showTimes: ['9:30 AM', '12:45 PM', '4:00 PM', '7:30 PM', '10:45 PM'],
  },
];