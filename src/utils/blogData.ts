
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
  category: string;
}

// Simple array of blog posts
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Navigating Peace of Mind: Tanzania's Leading Insurance Companies",
    slug: "tanzania-best-insurance-companies",
    excerpt: "Looking for reliable insurance in Tanzania? Discover the top companies offering peace of mind and comprehensive coverage across the nation.",
    content: `
      <p>In a world full of uncertainties, having reliable insurance is like having a sturdy umbrella in a sudden downpour – it offers vital protection and peace of mind. Whether you're looking to safeguard your family, your business, or your valuable assets, choosing the right insurance provider in Tanzania is a crucial decision.</p>
      <p>The Tanzanian insurance landscape is vibrant and growing, with several companies dedicated to providing comprehensive and accessible coverage. To help you navigate this important choice, we've compiled a list of some of the leading insurance companies that have built a reputation for trust, service, and extensive offerings.</p>

      <h2>Top Insurance Companies in Tanzania</h2>

      <h3>1. Jubilee Insurance</h3>
      <p>A household name across East Africa, Jubilee Insurance stands out for its wide array of products, including life, medical, general, and even specialized agricultural insurance. They have a long-standing history of serving Tanzanians with innovative solutions and a strong customer-centric approach.</p>

      <h3>2. Britam Insurance Tanzania</h3>
      <p>Britam has firmly established itself as a major player in the Tanzanian market, offering a diverse portfolio that includes personal, commercial, and even unique niche insurance products. Their focus on digital solutions and accessible services makes them a popular choice for many.</p>

      <h3>3. Alliance Insurance Corporation Ltd.</h3>
      <p>Alliance Insurance is known for its robust and reliable services, catering to a broad spectrum of clients from individuals to large corporations. They provide a comprehensive range of general insurance products designed to meet diverse needs and offer solid financial protection.</p>

      <h3>4. NIC Insurance (National Insurance Corporation)</h3>
      <p>As one of the oldest and largest insurance providers in Tanzania, NIC Insurance boasts extensive experience and a deep understanding of the local market. They offer a wide range of life and general insurance products, serving both the public and private sectors with a strong national presence.</p>

      <h3>5. Heritage Insurance Company Tanzania</h3>
      <p>Heritage Insurance has earned a reputation for its personalized service and flexible insurance solutions. They offer a variety of general insurance covers, emphasizing tailored policies that truly meet the specific requirements of their clients.</p>

      <h3>6. Zanzibar Insurance Corporation</h3>
      <p>For those residing or operating businesses in Zanzibar, Zanzibar Insurance Corporation is a key player, providing specialized insurance solutions tailored to the unique economic and social landscape of the island. They play a vital role in ensuring local protection and stability.</p>

      <h3>7. GA Insurance Tanzania Ltd</h3>
      <p>GA Insurance is a growing force in the Tanzanian market, known for its commitment to customer satisfaction and efficient service delivery. They offer a range of general insurance products, continually adapting to market demands to provide relevant and effective coverage.</p>

      <h3>8. Mayfair Insurance Company Tanzania</h3>
      <p>Mayfair Insurance offers a dynamic approach to insurance, providing various general insurance products with a focus on quick claims processing and accessible customer support. They strive to make insurance understandable and hassle-free for their clients.</p>

      <h3>9. Bumaco Insurance Company Ltd</h3>
      <p>Bumaco Insurance has built a strong foundation in the Tanzanian market, providing dependable insurance services across different sectors. They are committed to offering secure and comprehensive coverage options to ensure their clients' financial well-being.</p>

      <h2>Leading Insurance Brokers in Tanzania</h2>
      <p>Beyond insurance companies, brokers play a crucial role in helping you find the best coverage by working with multiple insurers. Here are some prominent brokers in Tanzania:</p>

      <h3>10. Howden Puri Insurance Brokers / Howden Tanzania</h3>
      <p>As part of a global network, Howden Puri brings international expertise and local insight to the Tanzanian insurance brokerage scene. They specialize in complex risk management and bespoke insurance solutions for businesses and individuals.</p>

      <h3>11. Impex Insurance Brokers Limited</h3>
      <p>Impex Insurance Brokers are known for their dedication to client advocacy, ensuring that individuals and businesses receive the most suitable and cost-effective insurance plans available in the market.</p>

      <h3>12. Milmar Insurance Consultants Ltd</h3>
      <p>Milmar offers expert insurance consultancy services, guiding clients through the intricacies of various policies and helping them make informed decisions about their coverage needs.</p>

      <h3>13. Equity Group TZ Limited (Equity Insurance)</h3>
      <p>Leveraging its broader financial services background, Equity Group in Tanzania also offers insurance solutions, providing a seamless experience for clients looking for integrated financial and protection services.</p>

      <h3>14. Chippings TZ Limited</h3>
      <p>Chippings TZ Limited is a reputable insurance broker that provides tailored advice and access to a wide range of insurance products, ensuring clients receive comprehensive protection for their specific requirements.</p>

      <h3>15. African Alliance TZ Limited</h3>
      <p>African Alliance is a well-regarded financial services group that extends its expertise to insurance brokerage, offering clients strategic advice and access to suitable insurance solutions for both personal and corporate needs.</p>

      <p>Choosing an insurance provider or broker depends on your individual needs and preferences. It's always a good idea to research, compare quotes, and perhaps even speak directly with representatives to ensure you find the perfect fit for your insurance journey in Tanzania.</p>
    `,
    author: "Neema Juma", 
    date: "2025-06-13",
    imageUrl: "https://dailynews.co.tz/wp-content/uploads/2024/12/insurance-market.jpg", 
    category: "Finance"
  }

];

// Get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

// Find a blog post by slug
export function findBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Get blog posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

// Get all unique categories
export function getAllCategories(): string[] {
  const categories = blogPosts.map(post => post.category);
  return Array.from(new Set(categories));
}

// Get most recent posts
export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

// Format blog post date
export function formatBlogDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-ZA', options);
}
