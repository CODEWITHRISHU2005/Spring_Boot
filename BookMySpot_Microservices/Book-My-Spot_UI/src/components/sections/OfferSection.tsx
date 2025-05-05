import React from 'react';
import OfferCard from '../ui/OfferCard';
import { Offer } from '../../types';

interface OfferSectionProps {
  offers: Offer[];
}

const OfferSection: React.FC<OfferSectionProps> = ({ offers }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Offers For You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;