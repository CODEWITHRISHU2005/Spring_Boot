import React from 'react';
import { Offer } from '../../types';

interface OfferCardProps {
  offer: Offer;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img 
            src={offer.imageUrl} 
            alt={offer.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-base">{offer.title}</h3>
          <p className="text-gray-600 text-sm">{offer.description}</p>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
        <div className="bg-gray-100 p-1 px-2 rounded text-gray-700 text-sm font-mono">
          {offer.code}
        </div>
        <button className="text-[#E23744] text-sm font-semibold">
          COPY CODE
        </button>
      </div>
    </div>
  );
};

export default OfferCard;