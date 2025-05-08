'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Menu } from 'lucide-react';
import { useCity } from '@/context/city-context';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { name: 'Movies', href: '/movies' },
  { name: 'Stream', href: '/stream' },
  { name: 'Events', href: '/events' },
  { name: 'Plays', href: '/plays' },
  { name: 'Sports', href: '/sports' },
  { name: 'Activities', href: '/activities' },
  { name: 'ListYourShow', href: '/list-your-show' },
  { name: 'Corporates', href: '/corporates' },
  { name: 'Offers', href: '/offers' },
  { name: 'Gift Cards', href: '/gift-cards' },
];

export function Header() {
  const { selectedCity, setShowCityModal } = useCity();

  return (
    <header className="border-b">
      <div className="bms-container">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-10 w-40">
              <Image
                src="/images/bookmyshow-logo.png"
                alt="BookMyShow"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for Movies, Events, Plays, Sports and Activities"
              className="pl-10 py-6 bg-gray-100 border-gray-200"
            />
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-3">
            <button
              className="flex items-center text-sm"
              onClick={() => setShowCityModal(true)}
            >
              {selectedCity ? (
                <span>{selectedCity.name}</span>
              ) : (
                <>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Select your location</span>
                </>
              )}
            </button>

            <Button className="bg-red-600 hover:bg-red-700 rounded-md">
              Sign in
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-8 space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block py-2 text-lg hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6 py-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
