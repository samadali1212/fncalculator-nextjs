
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { formatDate } from "../utils/blogData";
import type { BlogPost } from "../utils/blogData";

interface BlogListProps {
  posts: BlogPost[];
  searchQuery: string;
}

const BlogList = ({ posts, searchQuery }: BlogListProps) => {
  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : posts;

  // Sort posts by most recent date
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <div className="bg-white rounded-sm shadow-sm border border-gray-200">
      {sortedPosts.length === 0 ? (
        <div className="p-6 text-center text-gray-500">
          No posts found matching "{searchQuery}"
        </div>
      ) : (
        sortedPosts.map((post, index) => (
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
                  <span className="px-1.5 py-0.5 bg-gray-100 rounded text-[#666] text-xs">
                    {post.category}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default BlogList;
