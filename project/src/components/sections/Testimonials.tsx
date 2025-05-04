import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonialData } from '../../utils/data';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const timerRef = useRef<number | null>(null);
  
  const resetTimer = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    
    timerRef.current = window.setTimeout(() => {
      nextSlide();
    }, 5000);
  };
  
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [activeIndex]);
  
  const slideTo = (index: number) => {
    if (sliding) return;
    
    setSliding(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setSliding(false);
    }, 500);
  };
  
  const nextSlide = () => {
    slideTo((activeIndex + 1) % testimonialData.length);
  };
  
  const prevSlide = () => {
    slideTo((activeIndex - 1 + testimonialData.length) % testimonialData.length);
  };
  
  return (
    <section className="py-16 md:py-24 bg-forest-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-forest-800 mb-3">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from people who have experienced the transformative power of our nature retreats
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => {
              if (timerRef.current) {
                window.clearTimeout(timerRef.current);
                timerRef.current = null;
              }
            }}
            onMouseLeave={resetTimer}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    name={testimonial.name}
                    location={testimonial.location}
                    testimonial={testimonial.testimonial}
                    rating={testimonial.rating}
                    image={testimonial.image}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => slideTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-forest-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-500"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5 text-forest-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-500"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5 text-forest-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;