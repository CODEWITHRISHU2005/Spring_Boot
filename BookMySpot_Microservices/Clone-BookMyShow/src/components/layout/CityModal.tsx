'use client';

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';
import { cities, type City } from '@/data/mock-data';
import { useCity } from '@/context/city-context';
import Image from 'next/image';

export function CityModal() {
  const { showCityModal, setShowCityModal, selectCity } = useCity();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = searchQuery
    ? cities.filter(city => city.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : cities;

  return (
    <Dialog open={showCityModal} onOpenChange={setShowCityModal}>
      <DialogContent className="p-0 max-w-md gap-0 border-0 rounded-none">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for your city"
              className="pl-10 border-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            className="flex items-center mt-4 text-red-500 font-medium"
            onClick={() => {
              // In a real app, this would use geolocation
              // For demo, just select the first city
              selectCity(cities[0]);
            }}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Detect my location
          </button>
        </div>

        <div className="p-4 border-b">
          <h3 className="text-lg font-medium text-center">Popular Cities</h3>
          <div className="grid grid-cols-5 gap-4 mt-4">
            {filteredCities.map((city) => (
              <CityItem key={city.id} city={city} onSelect={selectCity} />
            ))}
          </div>
        </div>

        <div className="p-4 text-center">
          <button
            className="text-red-500 font-medium"
            onClick={() => setShowCityModal(false)}
          >
            View All Cities
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CityItem({ city, onSelect }: { city: City; onSelect: (city: City) => void }) {
  return (
    <button
      className="flex flex-col items-center space-y-2"
      onClick={() => onSelect(city)}
    >
      <div className="relative w-11 h-11">
        <Image
          src={city.icon}
          alt={city.name}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-xs text-center">{city.name}</span>
    </button>
  );
}
