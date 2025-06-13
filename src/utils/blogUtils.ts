
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

/**
 * Strip HTML tags from content and return plain text
 * @param htmlContent The HTML content to strip
 * @returns Plain text without HTML tags
 */
export const stripHtmlTags = (htmlContent: string): string => {
  if (!htmlContent) return "";
  
  // Create a temporary div element to parse HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  
  // Get text content and clean up extra whitespace
  return tempDiv.textContent || tempDiv.innerText || "";
};

/**
 * Function to limit text to a specific number of words
 * @param text The text to limit
 * @param wordLimit The maximum number of words
 * @returns Truncated text with ellipsis if needed
 */
export const limitWords = (text: string, wordLimit: number): string => {
  if (!text) return "";
  
  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) return text;
  
  return words.slice(0, wordLimit).join(' ') + '...';
};
