import React, { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { retreatData } from '../../utils/data';

interface FeaturedRetreatsProps {
  title?: string;
  subtitle?: string;
  featured?: boolean;
  maxItems?: number;
}

const FeaturedRetreats: React.FC<FeaturedRetreatsProps> = ({
  title = "Featured Retreats",
  subtitle = "Discover our most popular nature escapes",
  featured = true,
  maxItems = 3
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'mountain', label: 'Mountains' },
    { id: 'forest', label: 'Forest' },
    { id: 'lake', label: 'Lakes' },
    { id: 'beach', label: 'Beach' }
  ];
  
  const filteredRetreats = activeFilter === 'all' 
    ? retreatData.slice(0, maxItems)
    : retreatData.filter(retreat => retreat.type === activeFilter).slice(0, maxItems);
  
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-forest-800 mb-3">
              {title}
            </h2>
            <p className="text-gray-600 max-w-2xl">
              {subtitle}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-forest-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRetreats.map((retreat) => (
            <Card
              key={retreat.id}
              id={retreat.id}
              title={retreat.title}
              location={retreat.location}
              image={retreat.image}
              price={retreat.price}
              rating={retreat.rating}
              type={retreat.type}
              featured={featured && filteredRetreats.length <= 2}
              description={retreat.description}
            />
          ))}
          
          {filteredRetreats.length === 0 && (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-600 mb-4">No retreats found for this filter.</p>
              <Button 
                onClick={() => setActiveFilter('all')} 
                variant="outline"
              >
                View All Retreats
              </Button>
            </div>
          )}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/retreats" variant="outline">
            View All Retreats
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRetreats;