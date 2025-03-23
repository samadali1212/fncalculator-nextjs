
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPostBySlug, formatDate, getRelatedPosts } from '../utils/blogData';
import Header from '../components/Header';
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

// Helper function to generate schema markup JSON
const generateArticleSchema = (post) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "datePublished": post.publishedAt,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "BlogDomain",
      "logo": {
        "@type": "ImageObject",
        "url": window.location.origin + "/favicon.ico"
      }
    },
    "image": post.coverImage,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  };
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(slug ? getPostBySlug(slug) : undefined);
  const [relatedPosts, setRelatedPosts] = useState<ReturnType<typeof getRelatedPosts>>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!slug) return;
    
    // Simulate loading from an API
    const fetchPost = async () => {
      setIsLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const foundPost = getPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(getRelatedPosts(slug, 3));
      }
      
      setIsLoading(false);
    };
    
    fetchPost();
  }, [slug]);
  
  useEffect(() => {
    if (!post && !isLoading) {
      navigate('/404');
    }
  }, [post, isLoading, navigate]);
  
  // Render schema markup
  useEffect(() => {
    if (post && !isLoading) {
      // Create and add schema markup
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.innerHTML = JSON.stringify(generateArticleSchema(post));
      
      // Add an ID to easily find and remove it later
      schemaScript.id = 'article-schema';
      
      // Remove any existing schema to avoid duplicates
      const existingSchema = document.getElementById('article-schema');
      if (existingSchema) {
        existingSchema.remove();
      }
      
      document.head.appendChild(schemaScript);
      
      // Cleanup function to remove the script when component unmounts
      return () => {
        const script = document.getElementById('article-schema');
        if (script) {
          script.remove();
        }
      };
    }
  }, [post, isLoading]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f6f6f0]">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white p-6 sm:p-8 rounded-md shadow-sm mb-8">
              <Skeleton className="h-10 w-3/4 mb-4" />
              <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>
              <Skeleton className="h-48 w-full mb-8" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          </div>
        </main>
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
            
            <div 
              className="prose prose-sm sm:prose max-w-none prose-h2:text-xl prose-h2:font-bold prose-h3:text-lg prose-h3:font-bold prose-p:text-[#333] prose-a:text-[#ff6600] prose-blockquote:border-l-[#ff6600]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
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
          
          {/* Related posts section */}
          {relatedPosts.length > 0 && (
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-lg font-medium text-[#333] mb-4">
                Related Posts
              </h3>
              <div className="divide-y divide-gray-100">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div 
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group py-3"
                  >
                    <div className="flex items-center">
                      <div className="pr-3 text-center hidden sm:block">
                        <span className="text-gray-500 text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <Link 
                          to={`/post/${relatedPost.slug}`}
                          className="text-[#333] hover:underline text-base font-medium transition-colors group-hover:text-[#ff6600]"
                        >
                          {relatedPost.title}
                        </Link>
                        
                        <div className="flex items-center text-xs text-[#828282]">
                          <span>{formatDate(relatedPost.publishedAt)}</span>
                          <span className="mx-1">•</span>
                          <span>{relatedPost.readTime} min read</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#999] group-hover:text-[#ff6600] transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
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
