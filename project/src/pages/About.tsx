import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Testimonials from '../components/sections/Testimonials';

const About = () => {
  useEffect(() => {
    document.title = 'About Us | Mindful Escape';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Hero
        smallHeading="About Us"
        heading="Our Journey to Mindful Escapes"
        subheading="Learn about our mission to connect people with nature and promote mindful living"
        image="https://images.pexels.com/photos/775418/pexels-photo-775418.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block border-b-2 border-forest-500 pb-1 mb-4 text-forest-600 font-medium">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-forest-800 mb-6">
                From City Burnout to Nature's Embrace
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                Mindful Escape was born from personal experience. After years in high-stress corporate jobs, founders Emma and David found themselves burned out and disconnected from what truly matters.
              </p>
              <p className="text-gray-700 mb-4">
                Their healing journey began during a spontaneous weekend in a remote mountain cabin. Surrounded by towering trees and the gentle sounds of nature, they experienced a profound shift in perspective. That weekend sparked not only their personal transformation but also the vision for Mindful Escape.
              </p>
              <p className="text-gray-700">
                Established in 2019, we've grown from a single cabin to dozens of carefully curated retreats across diverse natural settings. Our mission remains constant: to help people reconnect with nature, recharge their souls, and return to their daily lives with renewed clarity and purpose.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5911307/pexels-photo-5911307.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Founders hiking in nature" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-forest-50 rounded-lg hidden md:block"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-cream-200 rounded-lg hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-forest-50" id="sustainability">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block border-b-2 border-forest-500 pb-1 mb-4 text-forest-600 font-medium">
              Our Commitment
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-forest-800 mb-6">
              Sustainability at the Core
            </h2>
            <p className="text-gray-700 text-lg">
              We believe that enjoying nature comes with a responsibility to protect it. Sustainability isn't just a buzzword for us—it's woven into everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <img 
                src="https://images.pexels.com/photos/3682409/pexels-photo-3682409.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Eco-friendly cabin" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-serif text-xl font-medium text-forest-800 mb-2">
                Eco-Friendly Accommodations
              </h3>
              <p className="text-gray-700">
                Our retreats use sustainable building materials, renewable energy sources, and water conservation systems designed to minimize environmental impact.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <img 
                src="https://images.pexels.com/photos/7263018/pexels-photo-7263018.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Local community"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-serif text-xl font-medium text-forest-800 mb-2">
                Community Partnerships
              </h3>
              <p className="text-gray-700">
                We collaborate with local businesses, farmers, and artisans to support regional economies and reduce the carbon footprint of our operations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <img 
                src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Conservation efforts" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-serif text-xl font-medium text-forest-800 mb-2">
                Conservation Initiatives
              </h3>
              <p className="text-gray-700">
                A portion of every booking supports local conservation efforts, helping to preserve the natural landscapes that make our retreats so special.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block border-b-2 border-forest-500 pb-1 mb-4 text-forest-600 font-medium">
              Our Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-forest-800 mb-6">
              The People Behind Mindful Escape
            </h2>
            <p className="text-gray-700 text-lg">
              Our diverse team shares a common passion: helping others experience the transformative power of nature.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Emma Lawson"
              role="Co-Founder & CEO"
              image="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800"
              bio="Former marketing executive who found healing in nature after burnout. Passionate about sustainable business practices."
            />
            <TeamMember
              name="David Chen"
              role="Co-Founder & COO"
              image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800"
              bio="Environmental scientist turned entrepreneur. Ensures our retreats operate in harmony with their natural surroundings."
            />
            <TeamMember
              name="Maya Rodriguez"
              role="Experience Director"
              image="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=800"
              bio="Former wellness retreat coordinator with a gift for creating spaces that foster mindfulness and connection."
            />
            <TeamMember
              name="James Wilson"
              role="Sustainability Officer"
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800"
              bio="Environmental advocate dedicated to implementing and improving our eco-friendly initiatives."
            />
          </div>
        </div>
      </section>
      
      <Testimonials />
    </>
  );
};

const TeamMember = ({ name, role, image, bio }) => {
  return (
    <div className="text-center">
      <div className="relative mb-6 mx-auto w-48 h-48">
        <div className="absolute inset-0 rounded-full bg-forest-200 transform -rotate-6"></div>
        <img 
          src={image} 
          alt={name} 
          className="relative z-10 rounded-full w-48 h-48 object-cover"
        />
      </div>
      <h4 className="font-serif text-xl font-medium text-forest-800 mb-1">{name}</h4>
      <p className="text-forest-600 mb-3">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
};

export default About;