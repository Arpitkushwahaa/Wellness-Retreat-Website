import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

interface HeroProps {
  smallHeading?: string;
  heading: string;
  subheading: string;
  image: string;
  cta?: {
    text: string;
    url: string;
  };
  secondaryCta?: {
    text: string;
    url: string;
  };
  overlay?: boolean;
  fullHeight?: boolean;
  isHome?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  smallHeading,
  heading,
  subheading,
  image,
  cta,
  secondaryCta,
  overlay = true,
  fullHeight = false,
  isHome = false,
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!isHome) return;
    
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className={`relative ${fullHeight ? 'h-screen' : 'h-[70vh] md:h-[80vh]'} flex items-center overflow-hidden`}
    >
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
          transform: isHome ? `translateY(${offset}px)` : 'none'
        }}
      >
        {overlay && (
          <div className="absolute inset-0 bg-forest-900/40"></div>
        )}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-4xl">
          {smallHeading && (
            <span className="inline-block border-b border-cream-200 pb-1 mb-3 text-cream-100 font-medium">
              {smallHeading}
            </span>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
            {heading}
          </h1>
          <p className="text-lg md:text-xl text-cream-100 mb-8 max-w-2xl">
            {subheading}
          </p>
          
          {(cta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {cta && (
                <Button 
                  href={cta.url} 
                  variant="primary" 
                  size="lg"
                >
                  {cta.text}
                </Button>
              )}
              
              {secondaryCta && (
                <Button 
                  href={secondaryCta.url} 
                  variant="outline" 
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      
      {isHome && (
        <button
          onClick={scrollToContent}
          className="absolute left-1/2 -translate-x-1/2 bottom-8 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </button>
      )}
    </section>
  );
};

export default Hero;