import React, { useState, useEffect } from 'react';
import { Filter, MapPin } from 'lucide-react';
import Hero from '../components/sections/Hero';
import Card from '../components/ui/Card';
import { retreatData } from '../utils/data';

const Retreats = () => {
  const [activeFilters, setActiveFilters] = useState({
    type: 'all',
    price: 'all',
    features: [] as string[],
  });
  const [showFilters, setShowFilters] = useState(false);
  const [filteredRetreats, setFilteredRetreats] = useState(retreatData);
  
  useEffect(() => {
    document.title = 'Our Retreats | Mindful Escape';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    let filtered = [...retreatData];
    
    // Filter by type
    if (activeFilters.type !== 'all') {
      filtered = filtered.filter(retreat => retreat.type === activeFilters.type);
    }
    
    // Filter by price
    if (activeFilters.price === 'low') {
      filtered = filtered.filter(retreat => retreat.price < 150);
    } else if (activeFilters.price === 'medium') {
      filtered = filtered.filter(retreat => retreat.price >= 150 && retreat.price < 300);
    } else if (activeFilters.price === 'high') {
      filtered = filtered.filter(retreat => retreat.price >= 300);
    }
    
    // Filter by features
    if (activeFilters.features.length > 0) {
      filtered = filtered.filter(retreat => {
        return activeFilters.features.every(feature => retreat.features.includes(feature));
      });
    }
    
    setFilteredRetreats(filtered);
  }, [activeFilters]);
  
  const toggleFeature = (feature: string) => {
    setActiveFilters(prev => {
      const features = prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature];
      
      return { ...prev, features };
    });
  };
  
  const resetFilters = () => {
    setActiveFilters({
      type: 'all',
      price: 'all',
      features: [],
    });
  };
  
  const filterTypes = [
    { id: 'all', label: 'All Types' },
    { id: 'mountain', label: 'Mountains' },
    { id: 'forest', label: 'Forest' },
    { id: 'lake', label: 'Lakes' },
    { id: 'beach', label: 'Beach' },
  ];
  
  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'low', label: 'Under $150' },
    { id: 'medium', label: '$150 - $300' },
    { id: 'high', label: 'Over $300' },
  ];
  
  const features = [
    { id: 'wifi', label: 'Wi-Fi' },
    { id: 'fireplace', label: 'Fireplace' },
    { id: 'pets', label: 'Pet Friendly' },
    { id: 'hot-tub', label: 'Hot Tub' },
    { id: 'lake-access', label: 'Lake Access' },
    { id: 'hiking', label: 'Hiking Trails' },
  ];
  
  return (
    <>
      <Hero
        smallHeading="Our Retreats"
        heading="Find Your Perfect Nature Getaway"
        subheading="Browse our collection of handpicked retreats in the most serene natural settings"
        image="https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="py-12 md:py-16 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm mb-4"
            >
              <Filter className="w-4 h-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            <div className={`md:w-64 md:mr-8 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-forest-800">Filters</h3>
                  <button
                    onClick={resetFilters}
                    className="text-sm text-sky-600 hover:text-sky-700"
                  >
                    Reset All
                  </button>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Type</h4>
                  <div className="space-y-2">
                    {filterTypes.map(type => (
                      <label key={type.id} className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          checked={activeFilters.type === type.id}
                          onChange={() => setActiveFilters(prev => ({ ...prev, type: type.id }))}
                          className="text-forest-600 focus:ring-forest-500"
                        />
                        <span className="ml-2 text-gray-700">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <label key={range.id} className="flex items-center">
                        <input
                          type="radio"
                          name="price"
                          checked={activeFilters.price === range.id}
                          onChange={() => setActiveFilters(prev => ({ ...prev, price: range.id }))}
                          className="text-forest-600 focus:ring-forest-500"
                        />
                        <span className="ml-2 text-gray-700">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Features</h4>
                  <div className="space-y-2">
                    {features.map(feature => (
                      <label key={feature.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={activeFilters.features.includes(feature.id)}
                          onChange={() => toggleFeature(feature.id)}
                          className="text-forest-600 focus:ring-forest-500 rounded"
                        />
                        <span className="ml-2 text-gray-700">{feature.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
                <div className="flex items-center justify-between">
                  <p className="text-gray-600">
                    Showing <span className="font-medium text-forest-800">{filteredRetreats.length}</span> retreats
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <select className="bg-cream-50 border border-gray-200 rounded-md py-1 px-2 text-sm">
                      <option>Popular</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {filteredRetreats.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <h3 className="text-xl font-medium text-forest-800 mb-2">No retreats found</h3>
                  <p className="text-gray-600 mb-4">Try changing your filters or explore all of our retreats.</p>
                  <button
                    onClick={resetFilters}
                    className="bg-forest-600 hover:bg-forest-700 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredRetreats.map(retreat => (
                    <Card
                      key={retreat.id}
                      id={retreat.id}
                      title={retreat.title}
                      location={retreat.location}
                      image={retreat.image}
                      price={retreat.price}
                      rating={retreat.rating}
                      type={retreat.type}
                      description={retreat.description}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Retreats;