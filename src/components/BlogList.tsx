
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { formatDate } from "../utils/blogData";
import type { BlogPost } from "../utils/blogData";

interface BlogListProps {
  posts: BlogPost[];
  sortBy: string;
}

const BlogList = ({ posts, sortBy }: BlogListProps) => {
  // Sort posts based on the selected sort option
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    } else if (sortBy === "popular") {
      return b.views - a.views;
    } else if (sortBy === "trending") {
      // Combine recency and views for "trending"
      const aScore = a.views * (1 / ((Date.now() - new Date(a.publishedAt).getTime()) / 86400000 + 1));
      const bScore = b.views * (1 / ((Date.now() - new Date(b.publishedAt).getTime()) / 86400000 + 1));
      return bScore - aScore;
    }
    return 0;
  });

  return (
    <div className="bg-white rounded-sm shadow-sm border border-gray-200">
      {sortedPosts.map((post, index) => (
        <motion.div 
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className={`group px-4 py-3 ${index !== sortedPosts.length - 1 ? 'border-b border-gray-100' : ''}`}
        >
          <div className="flex items-start">
            <div className="pr-3 text-center hidden sm:block">
              <span className="text-gray-500 text-sm">{index + 1}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <Link 
                  to={`/post/${post.slug}`}
                  className="text-[#333] hover:underline text-base sm:text-lg font-medium transition-colors group-hover:text-blog-accent"
                >
                  {post.title}
                </Link>
                <ArrowUpRight 
                  className="h-3.5 w-3.5 text-blog-subtle opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="flex items-center text-xs text-[#828282]">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="mx-1">•</span>
                <span className="font-medium text-[#555]">{post.author.name}</span>
                <span className="mx-1">•</span>
                <span className="flex items-center">
                  <MessageSquare className="h-3.5 w-3.5 mr-1" />
                  {post.comments || 0}
                </span>
                <span className="mx-1">•</span>
                <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogList;
