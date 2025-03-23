
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/blogData";
import type { BlogPost } from "../utils/blogData";

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <motion.article 
      className="relative overflow-hidden rounded-xl bg-blog-accent/5 mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-blog-accent text-white rounded-full mb-4">
                Featured Post
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-blog-text leading-tight">
                {post.title}
              </h2>
              
              <p className="text-blog-subtle mb-6 text-lg">
                {post.excerpt}
              </p>
              
              <div className="flex items-center mb-6">
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
              
              <Link 
                to={`/post/${post.slug}`}
                className="inline-flex items-center px-6 py-3 bg-blog-accent text-white rounded-lg transition-transform hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-blog-accent focus:ring-offset-2"
              >
                Read Article
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2">
            <motion.div 
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {post.coverImage && (
                <img 
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <svg 
        className="absolute bottom-0 left-0 right-0 w-full h-16 text-white" 
        preserveAspectRatio="none"
        viewBox="0 0 1200 120" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
          fill="currentColor" 
          opacity=".25" 
        />
        <path 
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
          fill="currentColor" 
          opacity=".5" 
        />
        <path 
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
          fill="currentColor" 
        />
      </svg>
    </motion.article>
  );
};

export default FeaturedPost;
