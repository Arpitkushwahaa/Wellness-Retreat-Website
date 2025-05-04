import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { retreatData } from '../../utils/data';

const LocationMap = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  
  // Group retreats by region
  const regions = retreatData.reduce((acc, retreat) => {
    const region = retreat.region;
    if (!acc[region]) {
      acc[region] = [];
    }
    acc[region].push(retreat);
    return acc;
  }, {} as Record<string, typeof retreatData>);
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-forest-800 mb-3">
            Our Retreat Locations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover peaceful sanctuaries nestled in nature's most breathtaking landscapes
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="bg-cream-50 rounded-xl p-6 shadow-sm h-full">
              <h3 className="font-serif text-xl font-medium text-forest-800 mb-4">
                Explore by Region
              </h3>
              
              <div className="space-y-4">
                {Object.keys(regions).map((region) => (
                  <div key={region}>
                    <h4 className="font-medium text-forest-700 mb-2">{region}</h4>
                    <ul className="space-y-2">
                      {regions[region].map((retreat) => (
                        <li key={retreat.id}>
                          <button
                            className={`flex items-center text-left w-full px-3 py-2 rounded-lg transition-colors ${
                              activeLocation === retreat.id
                                ? 'bg-forest-100 text-forest-800'
                                : 'hover:bg-cream-100 text-gray-700'
                            }`}
                            onClick={() => setActiveLocation(retreat.id)}
                          >
                            <MapPin className={`w-4 h-4 mr-2 ${
                              activeLocation === retreat.id
                                ? 'text-forest-600'
                                : 'text-gray-500'
                            }`} />
                            <span>{retreat.title}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 relative rounded-xl overflow-hidden shadow-md h-[500px]">
            {/* For a real implementation, replace with a proper map component */}
            <img 
              src="https://images.pexels.com/photos/2901619/pexels-photo-2901619.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Map of retreat locations"
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 pointer-events-none">
              {retreatData.map((retreat) => {
                const isActive = activeLocation === retreat.id;
                // These would be replaced with actual coordinates in a real map
                const style = {
                  left: `${retreat.mapPosition.x}%`,
                  top: `${retreat.mapPosition.y}%`,
                };
                
                return (
                  <div
                    key={retreat.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      isActive ? 'z-10 scale-125' : 'z-0'
                    }`}
                    style={style}
                  >
                    <div 
                      className={`w-4 h-4 rounded-full ${
                        isActive 
                          ? 'bg-forest-600 ring-4 ring-forest-200' 
                          : 'bg-forest-500 hover:bg-forest-600'
                      }`}
                    ></div>
                    
                    {isActive && (
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-white shadow-lg rounded-lg p-3 w-48 pointer-events-none">
                        <p className="font-medium text-forest-800">{retreat.title}</p>
                        <p className="text-sm text-gray-600">{retreat.location}</p>
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 bg-white transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;