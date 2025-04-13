
import { BlogPost, getBlogPostsByCategory as getPostsByCategory } from './blogData';

/**
 * Get a specific number of blog posts from a category, excluding a specific post
 * @param category The category to get posts from
 * @param limit The maximum number of posts to return
 * @param excludeSlug The slug of the post to exclude
 * @returns An array of blog posts
 */
export const getRelatedPosts = (category: string, limit: number, excludeSlug: string): BlogPost[] => {
  // First get all posts from the category
  const allCategoryPosts = getPostsByCategory(category);
  
  // Filter out the current post and limit the results
  return allCategoryPosts
    .filter(post => post.slug !== excludeSlug)
    .slice(0, limit);
};
