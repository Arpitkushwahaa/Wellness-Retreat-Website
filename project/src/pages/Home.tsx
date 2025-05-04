import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import FeaturedRetreats from '../components/sections/FeaturedRetreats';
import AboutSection from '../components/sections/AboutSection';
import Testimonials from '../components/sections/Testimonials';
import LocationMap from '../components/sections/LocationMap';
import SubscriptionForm from '../components/sections/SubscriptionForm';

const Home = () => {
  useEffect(() => {
    document.title = 'Mindful Escape | Premium Nature Retreats';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Hero
        heading="Reconnect with Nature. Recharge Your Soul."
        subheading="Discover our collection of premium nature retreats designed to help you unplug, recharge, and reconnect with the natural world."
        image="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920"
        cta={{ text: "Find Your Retreat", url: "/retreats" }}
        secondaryCta={{ text: "Learn More", url: "/about" }}
        fullHeight
        isHome
      />
      
      <FeaturedRetreats />
      
      <AboutSection />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-forest-800 mb-4">
                Nature-Inspired Wellness
              </h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for exclusive retreat deals, seasonal discounts, and mindfulness tips inspired by nature.
              </p>
              
              <SubscriptionForm />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Person meditating in nature" 
                className="rounded-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/4353287/pexels-photo-4353287.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Wellness tea" 
                className="rounded-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/6550909/pexels-photo-6550909.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Person doing yoga" 
                className="rounded-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/3060324/pexels-photo-3060324.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Peaceful lake" 
                className="rounded-lg h-48 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <LocationMap />
    </>
  );
};

export default Home;