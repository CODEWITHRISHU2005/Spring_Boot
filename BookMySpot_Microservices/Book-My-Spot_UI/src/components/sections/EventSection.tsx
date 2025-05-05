import React from 'react';
import EventCard from '../ui/EventCard';
import { Event } from '../../types';
import { ChevronRight } from 'lucide-react';

interface EventSectionProps {
  title: string;
  events: Event[];
}

const EventSection: React.FC<EventSectionProps> = ({ title, events }) => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <a href="/" className="flex items-center text-[#E23744] hover:underline">
            <span className="text-sm font-semibold">See All</span>
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;