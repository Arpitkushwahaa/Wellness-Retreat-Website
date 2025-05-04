import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import Hero from '../components/sections/Hero';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({} as Record<string, string>);
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    document.title = 'Contact Us | Mindful Escape';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validate = () => {
    const newErrors = {} as Record<string, string>;
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // In a real app, you would send this to your API
      console.log('Form submitted:', formData);
      
      // Show success message
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };
  
  return (
    <>
      <Hero
        smallHeading="Contact Us"
        heading="Get in Touch"
        subheading="Have questions about our retreats? Reach out to our team for assistance."
        image="https://images.pexels.com/photos/7173859/pexels-photo-7173859.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-medium text-forest-800 mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-gray-700 mb-8">
                Whether you have questions about our retreats, need assistance with booking, or want to provide feedback about your experience, our team is here to help.
              </p>
              
              <div className="space-y-6 mb-8">
                <ContactInfo
                  icon={<MapPin className="w-6 h-6 text-forest-600" />}
                  title="Our Main Office"
                  details={[
                    "123 Mindful Way",
                    "Portland, OR 97201",
                    "United States"
                  ]}
                />
                
                <ContactInfo
                  icon={<Phone className="w-6 h-6 text-forest-600" />}
                  title="Phone"
                  details={["+1 (555) 123-4567"]}
                />
                
                <ContactInfo
                  icon={<Mail className="w-6 h-6 text-forest-600" />}
                  title="Email"
                  details={["info@mindfulescape.com", "support@mindfulescape.com"]}
                />
              </div>
              
              <div>
                <h3 className="font-medium text-forest-800 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <SocialLink 
                    href="https://instagram.com" 
                    icon={<Instagram className="w-5 h-5" />} 
                    label="Instagram"
                  />
                  <SocialLink 
                    href="https://facebook.com" 
                    icon={<Facebook className="w-5 h-5" />}
                    label="Facebook"
                  />
                  <SocialLink 
                    href="https://twitter.com" 
                    icon={<Twitter className="w-5 h-5" />}
                    label="Twitter"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                <h3 className="font-serif text-2xl font-medium text-forest-800 mb-6">
                  Send Us a Message
                </h3>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-green-800 mb-1">Thank you!</h4>
                    <p className="text-green-700">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full border ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-500`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full border ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-500`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full border ${
                        errors.subject ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-500`}
                    >
                      <option value="">Select a subject</option>
                      <option value="Booking Inquiry">Booking Inquiry</option>
                      <option value="Retreat Information">Retreat Information</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full border ${
                        errors.message ? 'border-red-300' : 'border-gray-300'
                      } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-500`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-forest-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our retreats and booking process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FAQ 
              question="How far in advance should I book a retreat?"
              answer="We recommend booking at least 3 months in advance for popular locations and peak seasons. Last-minute bookings are sometimes available, but selection may be limited."
            />
            <FAQ 
              question="What is your cancellation policy?"
              answer="Cancellations made more than 30 days before arrival receive a full refund minus a 10% processing fee. Cancellations within 30 days are eligible for a 50% refund. Within 7 days, no refunds are available."
            />
            <FAQ 
              question="Are your retreats suitable for families with children?"
              answer="Many of our retreats welcome families and offer activities suitable for children. Look for the 'Family-Friendly' tag when browsing our locations, and feel free to contact us for specific recommendations."
            />
            <FAQ 
              question="Do you offer guided experiences at your retreats?"
              answer="Yes, many locations offer optional guided experiences like nature walks, meditation sessions, and outdoor adventures. These can be added during the booking process."
            />
            <FAQ 
              question="Are meals included with the retreats?"
              answer="This varies by location. Some retreats include meals, while others feature fully-equipped kitchens. Check the specific retreat details for meal information."
            />
            <FAQ 
              question="Can I bring my pet to a retreat?"
              answer="Select retreats are pet-friendly. Look for the 'Pet-Friendly' tag in the retreat description, and note that a pet fee may apply."
            />
          </div>
        </div>
      </section>
    </>
  );
};

const ContactInfo = ({ icon, title, details }) => {
  return (
    <div className="flex">
      <div className="mt-1 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-forest-800 mb-1">{title}</h3>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">{detail}</p>
        ))}
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-forest-50 hover:bg-forest-100 p-3 rounded-full transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

const FAQ = ({ question, answer }) => {
  return (
    <div className="bg-cream-50 rounded-lg p-6">
      <h3 className="font-medium text-forest-800 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default Contact;