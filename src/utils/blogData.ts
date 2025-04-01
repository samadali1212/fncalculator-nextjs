export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  readTime: number;
  category: string;
  featured?: boolean;
  coverImage?: string;
  views?: number;
  comments?: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Reverse Your Money Using Capitec App",
    slug: "here-is-how-to-reverse-your-money-using-capitec-app",
    excerpt: "Hold on a sec, let’s see if we can get that money back in your Capitec account! Here’s how to try and reverse it using the app:",
    content: `<p>Hold on a sec, let’s see if we can get that money back in your Capitec account!</p><p>Here’s how to try and reverse it using the app:</p><p><strong>Before we dive in, there’s a few things to keep in mind:</strong></p><ul><li>This won’t work for all transactions. Capitec can only reverse certain types, especially if they were sent to someone you know. If you’re unsure, it’s&nbsp;always best to check&nbsp;with the bank directly.</li><li>This might take a few days to process, so don’t panic if you don’t see the money back right away.&nbsp;Capitec needs&nbsp;to make sure everything is legit.</li></ul><p><strong>Alright, with that out of the way, here’s what to do:</strong></p><ol><li class="ql-indent-1">Grab your phone and fire up the&nbsp;Capitec app. You know the drill, log in with your usual PIN or fingerprint.</li><li class="ql-indent-1">Now, find the&nbsp;<strong>“Transact”</strong>&nbsp;tab. It’s usually down at the bottom of the screen, easy to miss if you’re not looking.</li><li class="ql-indent-1">Alright, we’re getting closer. Inside “Transact” you should see an option for&nbsp;<strong>“View transaction history”</strong>. Tap on that to see your recent transactions.</li><li class="ql-indent-1">Here comes the detective work! Scroll through your transactions and find the one you want to reverse. Remember the date or amount to make it easier.</li><li>Once you’ve found the sneaky culprit, tap on it to see the details.</li><li>Look closely at the transaction details. If you’re lucky, you’ll see a button that says&nbsp;<strong>“Reverse transaction”</strong>&nbsp;near the bottom. This is your golden ticket!</li><li>If you see the button, tap on it. A message will pop up asking you to confirm.&nbsp;<strong>Double check everything is correct</strong>&nbsp;before you hit “OK”.</li><li>If everything looks good and you’re sure you want to reverse it, tap&nbsp;<strong>“OK”</strong>&nbsp;to confirm. Capitec will take it from there and start the reversal process.</li><li>You should get a confirmation message letting you know they’ve received your request. Now just sit tight and wait for the money to return to your account. It might take a few business days.</li></ol><p>This won’t always work, and Capitec can’t reverse everything. If you can’t find the “Reverse transaction” button, or you’re unsure if it’s the right move, the best option is to contact Capitec directly.</p><p>They can help you figure things out and see if there’s another&nbsp;way to get your money back.</p>`,
    author: {
      name: "Alex Chen",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    publishedAt: "2025-04-01",
    readTime: 3,
    category: "How Tos",
    featured: true,
    coverImage: "https://sassainsider.co.za/wp-content/uploads/2024/08/image.png"
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getPostBySlug(currentSlug);
  
  if (!currentPost) return [];
  
  // Find posts with the same category, excluding the current post
  const sameCategoryPosts = blogPosts.filter(post => 
    post.slug !== currentSlug && post.category === currentPost.category
  );
  
  // If we have enough posts from the same category, return them
  if (sameCategoryPosts.length >= limit) {
    return sameCategoryPosts.slice(0, limit);
  }
  
  // If we need more posts, get posts from other categories
  const otherPosts = blogPosts.filter(post => 
    post.slug !== currentSlug && post.category !== currentPost.category
  );
  
  // Combine posts, ensuring we don't exceed the limit
  return [...sameCategoryPosts, ...otherPosts].slice(0, limit);
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
