import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSectionProps {
  slides: {
    id: string;
    imageUrl: string;
    title: string;
  }[];
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Reset transition state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative overflow-hidden bg-black">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-[200px] sm:h-[300px] md:h-[400px]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="flex-shrink-0 w-full h-full"
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                currentIndex === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;