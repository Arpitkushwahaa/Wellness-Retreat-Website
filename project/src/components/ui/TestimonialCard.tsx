import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  testimonial: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  testimonial,
  rating,
  image
}) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
      <div className="flex items-center mb-6">
        <img 
          src={image} 
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-lg text-forest-800">{name}</h4>
          <p className="text-gray-500 text-sm">{location}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`} 
                fill={i < rating ? 'currentColor' : 'none'}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;