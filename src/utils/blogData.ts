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
    title: "Black Coffee Net Worth And How He Made $60 Million",
    slug: "black-coffee-net-worth-and-how-he-made-60-million",
    excerpt: "Black Coffee’s net worth is huge, as of 2025, his net worth is estimated at $60 million (R1.1 billion).",
    content: `
Black Coffee, whose real name is Nkosinathi Innocent Maphumulo, is a highly acclaimed South African DJ, record producer, and songwriter. Born on March 11, 1976, he has become one of the most prominent figures in electronic music globally. He has achieved international acclaim, winning multiple awards including a Grammy, and has collaborated with major artists like Drake and Usher. Despite losing the use of his left arm early in his life, Black Coffee has become a leading figure in electronic music, celebrated for his innovative sound and contributions to the global music scene.
<h2>Black Coffee Net Worth</h2>Black Coffee's net worth is estimated to be around $60 million. This figure places him among the wealthiest musicians in Africa, with his income stemming from his successful career as a DJ, record producer, and songwriter, as well as investments in properties.
<h2>Black Coffee Businesses and How He Makes His Money</h2>
<p>​Black Coffee, born Nkosinathi Maphumulo, has diversified his income through various ventures spanning music, technology, hospitality, and healthcare.</p>
<p>Below is an overview of his business interests and revenue streams:</p>
<p><strong>Music Industry Ventures:</strong></p>
<ul>
  <li>
    <p><strong>Soulistic Music:</strong> Established in 2005, this record label nurtures and promotes South African musical talent, generating income through artist development, music production, and distribution deals.​</p>
  </li>
  <li>
    <p><strong>Gallo Record Company:</strong> In May 2020, Black Coffee acquired a significant stake in this historic South African record label, which boasts a vast music library and artist representation deals, providing a steady stream of income through royalties and licensing agreements.</p>
  </li>
</ul>
<p><strong>Hospitality and Entertainment:</strong></p>
<ul>
  <li>
    <p><strong>Zone 6 Venue:</strong> Acquired in June 2017, this popular Soweto club hosts major artists and events, generating revenue through ticket sales, bar sales, and event fees.</p>
  </li>
  <li>
    <p><strong>GOSPËL:</strong> An investment in a New York City-based establishment that combines a restaurant with a performance stage, creating a space for artistic expression and community gatherings.</p>
  </li>
</ul>
<p><strong>Technology Investments:</strong></p>
<ul>
  <li>
    <p><strong>Yoco:</strong> An African technology company offering mobile payment solutions and business tools to small and medium enterprises (SMEs). Black Coffee's investment supports economic empowerment and yields returns as the company grows.</p>
  </li>
  <li>
    <p><strong>SweepSouth:</strong> A tech-powered platform connecting clients with home cleaning service providers across Africa. His stake provides a share of the platform's profits.</p>
  </li>
  <li>
    <p><strong>Andela:</strong> A company that bridges the gap between African software developers and global companies, reflecting his commitment to fostering tech talent on the continent.</p>
  </li>
  <li>
    <p><strong>Yamee:</strong> An eCommerce platform aiding food merchants in Africa to grow their businesses by providing access to digital customers and payment solutions.</p>
  </li>
  <li>
    <p><strong>Rensource Energy:</strong> A leading provider of off-grid energy solutions in West Africa, focusing on building micro-utilities.</p>
  </li>
  <li>
    <p><strong>Rocean:</strong> A company committed to sustainable, eco-friendly practices, creating smart home products aimed at reducing reliance on disposable plastics.</p>
  </li>
  <li>
    <p><strong>GongBox:</strong> An app that combines music-streaming and social-networking elements, serving as a home for African music and allowing musicians to retain ownership of their creations.</p>
  </li>
</ul>
<p><strong>Healthcare:</strong></p>
<ul>
  <li>
    <p><strong>Epione Healthcare Solutions:</strong> A partnership focused on developing, investing in, owning, and operating healthcare facilities in Africa, aiming to provide quality, affordable, and sustainable healthcare services.</p>
  </li>
</ul>
<p><strong>Primary Income Sources:</strong></p>
<ul>
  <li>
    <p><strong>Live Performances:</strong> As a globally renowned DJ, Black Coffee commands high fees for performances at prestigious venues and festivals worldwide.​</p>
  </li>
  <li>
    <p><strong>Music Sales and Streaming:</strong> Revenue from album sales, digital downloads, and streaming platforms contributes significantly to his earnings.​</p>
  </li>
  <li>
    <p><strong>Brand Endorsements:</strong> Collaborations with brands such as BMW, Ray-Ban, and Absolut Vodka provide additional income through endorsement deals.</p>
  </li>
  <li>
    <p><strong>Business Investments:</strong> Returns from his diverse investment portfolio across various industries further bolster his financial standing.</p>
  </li>
</ul>
    `,
    author: {
      name: "Alex Chen",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    publishedAt: "2025-03-24",
    readTime: 8,
    category: "Celebs",
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
