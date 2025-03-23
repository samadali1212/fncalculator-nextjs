
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPostBySlug, formatDate } from '../utils/blogData';
import Header from '../components/Header';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  const post = slug ? getPostBySlug(slug) : undefined;
  
  useEffect(() => {
    if (!post && !isLoading) {
      navigate('/404');
    }
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [post, isLoading, navigate]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-16 h-16 border-4 border-blog-accent border-t-transparent rounded-full animate-spin"
        ></motion.div>
      </div>
    );
  }
  
  if (!post) {
    return null;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Header />
      
      <main className="pt-24 pb-16">
        <article>
          {/* Hero section */}
          <div className="w-full bg-blog-card py-12 mb-8">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
              >
                <Link 
                  to="/"
                  className="inline-flex items-center text-sm text-blog-accent mb-6 hover:underline"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 mr-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                    />
                  </svg>
                  Back to articles
                </Link>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-blog-text mb-4">
                  {post.title}
                </h1>
                
                <div className="flex items-center justify-center mb-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-white rounded-full text-blog-subtle">
                    {post.category}
                  </span>
                </div>
                
                <div className="flex items-center justify-center">
                  {post.author.avatar && (
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                  )}
                  <div>
                    <p className="font-medium text-blog-text">{post.author.name}</p>
                    <p className="text-sm text-blog-subtle">
                      {formatDate(post.publishedAt)} • {post.readTime} min read
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Cover image */}
          {post.coverImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="container mx-auto px-4 md:px-6 mb-12"
            >
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="container mx-auto px-4 md:px-6"
          >
            <div className="max-w-3xl mx-auto">
              <div className="blog-content prose prose-lg prose-slate">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blog-card rounded-full text-blog-subtle text-sm">
                    {post.category}
                  </span>
                  <span className="px-3 py-1 bg-blog-card rounded-full text-blog-subtle text-sm">
                    Web Development
                  </span>
                  <span className="px-3 py-1 bg-blog-card rounded-full text-blog-subtle text-sm">
                    Programming
                  </span>
                </div>
              </div>
              
              {/* Author bio */}
              <div className="mt-12 p-6 bg-blog-card rounded-xl">
                <div className="flex items-start">
                  {post.author.avatar && (
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-medium text-blog-text mb-2">
                      About {post.author.name}
                    </h3>
                    <p className="text-blog-subtle">
                      A professional writer and web developer with over 10 years of experience in the industry.
                      Passionate about creating elegant user experiences and teaching others.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </article>
      </main>
      
      <footer className="bg-blog-card border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 md:px-6 text-center text-blog-subtle">
          <p>
            &copy; {new Date().getFullYear()} BlogDomain. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default BlogPost;
