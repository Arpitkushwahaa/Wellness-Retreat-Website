import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import Button from './Button';

interface CardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  type: string;
  description?: string;
  featured?: boolean;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  location,
  image,
  price,
  rating,
  type,
  description,
  featured = false,
}) => {
  return (
    <div 
      className={`overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg ${
        featured ? 'md:flex md:h-64' : ''
      }`}
    >
      <div 
        className={`relative overflow-hidden ${
          featured ? 'md:w-1/2 h-64 md:h-full' : 'h-60'
        }`}
      >
        <span className="absolute top-4 left-4 z-10 rounded-full bg-forest-600 px-3 py-1 text-xs font-medium text-white">
          {type}
        </span>
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className={`p-5 ${featured ? 'md:w-1/2 md:p-6' : ''}`}>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4 text-forest-500" />
            <span className="text-sm text-gray-500">{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <h3 className="mb-2 font-serif text-xl font-medium text-forest-800">
          <Link 
            to={`/retreats/${id}`}
            className="hover:text-forest-600 transition-colors"
          >
            {title}
          </Link>
        </h3>
        
        {description && (
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className={`flex items-center justify-between ${description ? '' : 'mt-4'}`}>
          <div className="font-medium">
            <span className="text-lg text-forest-700">${price}</span>
            <span className="text-sm text-gray-500"> / night</span>
          </div>
          <Button href={`/retreats/${id}`} variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;