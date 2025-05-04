import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import Hero from '../components/sections/Hero';
import Button from '../components/ui/Button';
import { blogData } from '../utils/data';

const Blog = () => {
  useEffect(() => {
    document.title = 'Blog | Mindful Escape';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  // Get featured article (first one)
  const featuredArticle = blogData[0];
  
  // Get rest of the articles
  const articles = blogData.slice(1);
  
  return (
    <>
      <Hero
        smallHeading="Our Blog"
        heading="Mindful Living & Nature Stories"
        subheading="Explore our collection of articles on mindfulness, nature connection, and sustainable living"
        image="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Featured Article */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-96 object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div>
                <span className="inline-block bg-forest-100 text-forest-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h2 className="font-serif text-3xl font-medium text-forest-800 mb-4">
                  <Link 
                    to={`/blog/${featuredArticle.slug}`}
                    className="hover:text-forest-600 transition-colors"
                  >
                    {featuredArticle.title}
                  </Link>
                </h2>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredArticle.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredArticle.readTime} min read
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {featuredArticle.excerpt}
                </p>
                
                <Button 
                  href={`/blog/${featuredArticle.slug}`} 
                  variant="primary"
                >
                  Read Article
                </Button>
              </div>
            </div>
          </div>
          
          {/* Article Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-forest-600 text-white">
              All Topics
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 hover:bg-gray-100">
              Mindfulness
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 hover:bg-gray-100">
              Sustainability
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 hover:bg-gray-100">
              Nature Connection
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 hover:bg-gray-100">
              Travel Tips
            </button>
            <button className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-600 hover:bg-gray-100">
              Retreat Stories
            </button>
          </div>
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-md bg-white text-gray-600 hover:bg-gray-100">
                Previous
              </button>
              <button className="px-4 py-2 rounded-md bg-forest-600 text-white">
                1
              </button>
              <button className="px-4 py-2 rounded-md bg-white text-gray-600 hover:bg-gray-100">
                2
              </button>
              <button className="px-4 py-2 rounded-md bg-white text-gray-600 hover:bg-gray-100">
                3
              </button>
              <button className="px-3 py-2 rounded-md bg-white text-gray-600 hover:bg-gray-100">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

const ArticleCard = ({ article }) => {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:-translate-y-1">
      <Link to={`/blog/${article.slug}`} className="block overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {article.categories.map((category) => (
            <span 
              key={category}
              className="inline-block bg-forest-50 text-forest-700 px-2 py-1 rounded-full text-xs font-medium"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="font-serif text-xl font-medium text-forest-800 mb-3">
          <Link 
            to={`/blog/${article.slug}`}
            className="hover:text-forest-600 transition-colors"
          >
            {article.title}
          </Link>
        </h3>
        
        <div className="flex flex-wrap gap-4 mb-3 text-xs text-gray-500">
          <div className="flex items-center">
            <User className="w-3 h-3 mr-1" />
            {article.author}
          </div>
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {article.date}
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {article.readTime} min read
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <Link 
          to={`/blog/${article.slug}`}
          className="inline-block text-forest-600 font-medium hover:text-forest-700 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default Blog;