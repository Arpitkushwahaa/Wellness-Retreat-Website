import React from 'react';
import { Heart, Leaf, Shield } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-forest-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-forest-800 mb-4">
            Reconnect with Nature. Recharge Your Soul.
          </h2>
          <p className="text-gray-600 text-lg">
            At Mindful Escape, we believe that spending time in nature is essential for our wellbeing. Our carefully curated retreats offer the perfect balance of adventure, relaxation, and mindfulness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Leaf className="h-8 w-8 text-forest-600" />}
            title="Sustainable Retreats"
            description="Our eco-friendly accommodations minimize environmental impact while maximizing your connection to the natural world."
          />
          <FeatureCard
            icon={<Heart className="h-8 w-8 text-forest-600" />}
            title="Mindfulness Practices"
            description="Each retreat offers optional guided meditation, yoga, and forest bathing sessions to enhance your experience."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-forest-600" />}
            title="Local Community Support"
            description="We partner with local businesses and communities to create authentic experiences that benefit the regions we visit."
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-serif text-2xl font-medium text-forest-800 mb-4">
              Our Story
            </h3>
            <p className="text-gray-700 mb-4">
              Mindful Escape was born from a deep love of nature and a vision to help others reconnect with the natural world. Founded in 2019 by avid hikers Emma and David, our company began with a single mountain cabin and a dream to create spaces where people could truly unplug.
            </p>
            <p className="text-gray-700 mb-4">
              Today, we've grown to offer dozens of unique retreats across diverse landscapes, from secluded mountain cabins to beachfront cottages. Each location is personally selected for its natural beauty, tranquility, and potential to inspire awe.
            </p>
            <p className="text-gray-700">
              What hasn't changed is our commitment to mindfulness and sustainability. We believe that by fostering a deeper connection with nature, we can help people live more balanced, present, and fulfilling lives.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mountain retreat" 
                className="rounded-lg h-48 w-full object-cover object-center"
              />
              <img 
                src="https://images.pexels.com/photos/5843603/pexels-photo-5843603.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Couple enjoying nature" 
                className="rounded-lg h-64 w-full object-cover object-center"
              />
            </div>
            <div className="space-y-4 mt-6">
              <img 
                src="https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Forest cabin" 
                className="rounded-lg h-64 w-full object-cover object-center"
              />
              <img 
                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Lake view" 
                className="rounded-lg h-48 w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm text-center transition-transform hover:-translate-y-1">
      <div className="flex justify-center mb-4">
        <div className="bg-forest-50 rounded-full p-4">
          {icon}
        </div>
      </div>
      <h3 className="font-serif text-xl font-medium text-forest-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default AboutSection;