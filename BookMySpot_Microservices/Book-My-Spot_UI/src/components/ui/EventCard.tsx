import React from 'react';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
  onClick?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  return (
    <div 
      className="relative rounded-md overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="relative aspect-video bg-gray-200">
        <img 
          src={event.imageUrl} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 bg-[#E23744] text-white text-xs font-semibold px-2 py-1 rounded">
          {event.category}
        </div>
      </div>
      <div className="p-3 bg-white">
        <h3 className="font-bold text-lg line-clamp-1">{event.title}</h3>
        <p className="text-gray-600 text-sm">{event.venue}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-500 text-xs">{event.date}</p>
          <p className="text-[#E23744] font-semibold text-sm">{event.price}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;