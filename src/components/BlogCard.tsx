
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/blogData";
import type { BlogPost } from "../utils/blogData";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <motion.article 
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={`/post/${post.slug}`} className="block h-full">
        <div className="flex flex-col h-full">
          {post.coverImage && (
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-0 inset-0 bg-gradient-to-b from-black/0 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          )}
          
          <div className="p-5 flex flex-col flex-grow">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-blog-card rounded-full text-blog-subtle">
                {post.category}
              </span>
            </div>
            
            <h3 className="text-xl font-medium mb-2 text-blog-text group-hover:text-blog-accent transition-colors duration-200">
              {post.title}
            </h3>
            
            <p className="text-blog-subtle mb-4 text-sm flex-grow">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
              <div className="flex items-center">
                {post.author.avatar && (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full mr-2 object-cover"
                  />
                )}
                <span className="text-xs text-blog-subtle">{post.author.name}</span>
              </div>
              
              <div className="flex items-center text-xs text-blog-subtle">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
