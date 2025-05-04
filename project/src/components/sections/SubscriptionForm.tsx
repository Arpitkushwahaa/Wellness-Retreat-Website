import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../ui/Button';

interface SubscriptionFormProps {
  footer?: boolean;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ footer = false }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you'd send this to your API
    console.log('Subscribing email:', email);
    
    setSubmitted(true);
    setError('');
    setEmail('');
    
    // Reset success message after a delay
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className={footer ? '' : 'bg-forest-700 rounded-xl p-6 md:p-8 shadow-md'}>
      {!footer && (
        <div className="mb-6">
          <h3 className="font-serif text-2xl font-medium text-white mb-2">
            Get Nature-Inspired Deals
          </h3>
          <p className="text-forest-100">
            Sign up for our newsletter to receive exclusive offers and mindfulness tips.
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className={`relative ${submitted ? 'opacity-50' : ''}`}>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            placeholder="Your email address"
            className={`w-full rounded-lg border ${
              error 
                ? 'border-red-300 bg-red-50' 
                : (footer ? 'border-forest-600 bg-forest-700' : 'border-forest-500 bg-forest-600')
            } py-3 px-4 text-sm ${
              footer ? 'text-white' : 'text-white'
            } placeholder-forest-200 focus:outline-none focus:ring-2 focus:ring-forest-400`}
            disabled={submitted}
          />
          
          <Button
            type="submit"
            variant="secondary"
            disabled={submitted}
            className="absolute right-1 top-1 !py-2"
            icon={<Send className="w-4 h-4" />}
          >
            {footer ? 'Join' : 'Subscribe'}
          </Button>
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-red-300">{error}</p>
        )}
        
        {submitted && (
          <p className={`mt-2 text-sm ${footer ? 'text-cream-200' : 'text-forest-100'}`}>
            Thank you! Your subscription has been confirmed.
          </p>
        )}
        
        <p className={`mt-2 text-xs ${footer ? 'text-cream-300' : 'text-forest-200'}`}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
};

export default SubscriptionForm;