import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import SubscriptionForm from '../sections/SubscriptionForm';

const Footer = () => {
  return (
    <footer className="bg-forest-800 text-cream-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="text-xl font-serif font-medium">Mindful Escape</span>
            </Link>
            <p className="mb-6 text-cream-200 max-w-xs">
              Premium nature retreats designed to help you reconnect with nature and recharge your soul.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="https://facebook.com" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="mailto:info@mindfulescape.com" icon={<Mail className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Explore</h3>
            <ul className="space-y-3">
              <FooterLink href="/retreats" text="All Retreats" />
              <FooterLink href="/retreats?type=mountain" text="Mountain Retreats" />
              <FooterLink href="/retreats?type=forest" text="Forest Cabins" />
              <FooterLink href="/retreats?type=lake" text="Lakeside Getaways" />
              <FooterLink href="/retreats?type=beach" text="Beach Escapes" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-medium mb-4">About</h3>
            <ul className="space-y-3">
              <FooterLink href="/about" text="Our Story" />
              <FooterLink href="/about#sustainability" text="Sustainability" />
              <FooterLink href="/blog" text="Blog & Stories" />
              <FooterLink href="/contact" text="Contact Us" />
              <FooterLink href="/careers" text="Join Our Team" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-medium mb-4">Newsletter</h3>
            <p className="mb-4 text-cream-200">
              Sign up to receive nature-inspired deals and mindfulness tips.
            </p>
            <SubscriptionForm footer />
          </div>
        </div>

        <div className="pt-8 border-t border-forest-700 text-cream-300 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Mindful Escape. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-cream-50 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-cream-50 transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-cream-50 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-forest-700 hover:bg-forest-600 p-2 rounded-full transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, text }) => (
  <li>
    <Link to={href} className="text-cream-200 hover:text-cream-50 transition-colors">
      {text}
    </Link>
  </li>
);

export default Footer;