
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPostBySlug, formatDate } from '../utils/blogData';
import Header from '../components/Header';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

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
          className="w-16 h-16 border-4 border-[#ff6600] border-t-transparent rounded-full animate-spin"
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
      className="min-h-screen bg-[#f6f6f0]"
    >
      <Header />
      
      <main className="pt-20 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link 
            to="/"
            className="inline-flex items-center text-sm text-[#ff6600] mb-6 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to posts
          </Link>
          
          <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#333] mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#666] mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-[#999]" />
                {formatDate(post.publishedAt)}
              </div>
              
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1 text-[#999]" />
                {post.author.name}
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-[#999]" />
                {post.readTime} min read
              </div>
              
              <span className="px-2 py-1 bg-gray-100 rounded text-[#666] text-xs">
                {post.category}
              </span>
            </div>
            
            {post.coverImage && (
              <div className="mb-8">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full rounded-md"
                />
              </div>
            )}
            
            <div className="prose prose-sm sm:prose max-w-none prose-h2:text-xl prose-h2:font-bold prose-h3:text-lg prose-h3:font-bold prose-p:text-[#333] prose-a:text-[#ff6600] prose-blockquote:border-l-[#ff6600]">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
          
          {/* Author bio */}
          <div className="bg-white p-6 rounded-md shadow-sm mb-8">
            <h3 className="text-lg font-medium text-[#333] mb-4">
              About the author
            </h3>
            <div className="flex items-start">
              {post.author.avatar && (
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
              )}
              <div>
                <h4 className="font-medium text-[#333] mb-1">{post.author.name}</h4>
                <p className="text-sm text-[#666]">
                  A professional writer and web developer with over 10 years of experience in the industry.
                  Passionate about creating elegant user experiences and teaching others.
                </p>
              </div>
            </div>
          </div>
          
          {/* Related discussion section */}
          <div className="bg-white p-6 rounded-md shadow-sm">
            <h3 className="text-lg font-medium text-[#333] mb-4">
              Discussion
            </h3>
            <div className="text-center py-8">
              <p className="text-[#666] mb-4">Join the conversation</p>
              <button className="px-4 py-2 bg-[#ff6600] text-white rounded hover:bg-[#e55c00] transition-colors">
                Add Comment
              </button>
            </div>
          </div>
        </article>
      </main>
      
      <footer className="border-t border-gray-300 py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} BlogDomain. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default BlogPost;
