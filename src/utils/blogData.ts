
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
    title: "15 Best Insurance Companines In Tanzania 2025",
    slug: "best-insurance-companies",
    excerpt: "Looking for reliable insurance in Tanzania? Here are the top companies offering peace of mind and comprehensive coverage across the nation.",
        content: `
      <p>Having reliable insurance offers vital protection and peace of mind. It’s like having a sturdy umbrella in a sudden downpour. Choosing the right insurance provider in Tanzania is a crucial decision. Tanzania's insurance sector is developing and growing, with many companies providing comprehensive and accessible coverage. To help you make this important choice, we've put together a list of leading insurance companies. These companies are known for their trust, service, and wide range of offerings.</p>

      <h2>1. Jubilee Insurance</h2>
      <p>Jubilee Insurance is a prominent name across East Africa. It offers a wide range of products. These include life, medical, general, and even specialized agricultural insurance. They have a long history of serving Tanzanians. Jubilee is known for innovative solutions. They focus strongly on customer satisfaction. They provide comprehensive coverage for diverse needs.</p>

      <h2>2. Britam Insurance Tanzania</h2>
      <p>Britam has become a key player in Tanzania. They offer a diverse portfolio of insurance products. These cover personal, commercial, and niche areas. Britam emphasizes digital solutions. They provide accessible services. This makes them a popular choice. They safeguard individuals and businesses. Britam ensures comprehensive protection for its clients.</p>

      <h2>3. Alliance Insurance Corporation Ltd.</h2>
      <p>Alliance Insurance is known for its strong and dependable services. They cater to a wide range of clients. This includes individuals and large corporations. They provide a full suite of general insurance products. These are designed to meet various needs. Alliance offers solid financial protection. They prioritize client security and satisfaction.</p>

      <h2>4. NIC Insurance (National Insurance Corporation)</h2>
      <p>NIC Insurance is one of Tanzania's oldest and largest providers. They have extensive experience in the local market. They offer a broad range of life and general insurance products. NIC serves both public and private sectors. They have a strong national presence. They are a reliable choice for comprehensive coverage.</p>

      <h2>5. Heritage Insurance Company Tanzania</h2>
      <p>Heritage Insurance is recognized for its personalized service and flexible insurance solutions. They provide various general insurance covers, designed to fit different situations. Their main focus is on tailored policies that truly meet each client's specific requirements. Heritage ensures clients receive customized protection, prioritizing individual needs and preferences to offer true peace of mind.</p>

      <h2>6. Zanzibar Insurance Corporation</h2>
      <p>Zanzibar Insurance Corporation is very important for residents and businesses in Zanzibar. They offer specialized insurance solutions, created specifically for the island's unique economic and social situation. They play a vital role in ensuring local protection and stability for the community. ZIC is a key provider for the Zanzibari people, offering essential coverage.</p>

      <h2>7. GA Insurance Tanzania Ltd</h2>
      <p>GA Insurance is a growing force in the Tanzanian market. They are known for their commitment to customer satisfaction. They deliver efficient service. They offer a range of general insurance products. They continuously adapt to market demands. This ensures relevant and effective coverage. GA Insurance focuses on client needs.</p>

      <h2>8. Mayfair Insurance Company Tanzania</h2>
      <p>Mayfair Insurance offers a dynamic approach. They provide various general insurance products. They prioritize quick claims processing. Accessible customer support is a key feature. They aim to make insurance easy to understand. They strive for a hassle-free experience. Mayfair focuses on client convenience and efficiency.</p>

      <h2>9. Bumaco Insurance Company Ltd</h2>
      <p>Bumaco Insurance has a strong and reliable presence in Tanzania. They provide dependable insurance services across various sectors. They are committed to offering secure and comprehensive coverage options. This ensures their clients' financial well-being and provides a sense of security. Bumaco focuses on complete protection, making them a trusted partner for diverse insurance needs.</p>

      <h2>Leading Insurance Brokers in Tanzania</h2>
      <p>Beyond insurance companies, brokers help you find the best coverage. They work with multiple insurers. Here are some prominent brokers in Tanzania:</p>

      <h2>10. Howden Puri Insurance Brokers / Howden Tanzania</h2>
      <p>Howden Puri brings global expertise. They combine it with local insights. They are part of an international network. They specialize in complex risk management. They offer bespoke insurance solutions. These cater to businesses and individuals. Howden Puri provides expert brokerage services. They navigate intricate insurance needs.</p>

      <h2>11. Impex Insurance Brokers Limited</h2>
      <p>Impex Insurance Brokers are fully dedicated to advocating for their clients. They work to ensure clients receive the most suitable and cost-effective insurance plans available in the market. Impex helps both individuals and businesses find the best coverage options. They consistently prioritize client interests, aiming for optimal protection and value in every policy.</p>

      <h2>12. Milmar Insurance Consultants Ltd</h2>
      <p>Milmar offers expert insurance consultancy services. They guide clients through the complexities of various policies. Their goal is to help clients make informed decisions about their coverage needs. This ensures optimal protection. Milmar provides clear, simple advice. They simplify the insurance selection process, acting as trusted advisors for a complete understanding.</p>

      <h2>13. Equity Group TZ Limited (Equity Insurance)</h2>
      <p>Equity Group in Tanzania provides reliable insurance solutions. They use their strong background in financial services. They offer a seamless experience for clients. This means financial and protection services are integrated smoothly. Equity provides comprehensive coverage options. They focus on accessible and unified financial solutions, making insurance easy to manage with other banking needs.</p>

      <h2>14. Chippings TZ Limited</h2>
      <p>Chippings TZ Limited is a respected insurance broker. They offer tailored advice to suit individual needs. They provide access to a wide range of insurance products. They ensure comprehensive protection that meets specific client requirements. Chippings focuses on providing personalized service, always working to help clients secure the most suitable coverage for their assets and peace of mind.</p>

      <h2>15. African Alliance TZ Limited</h2>
      <p>African Alliance is a reputable financial services group. They extend their expertise to insurance brokerage. They offer clients strategic advice. They provide access to suitable insurance solutions. These cover both personal and corporate needs. African Alliance is a trusted partner. They help clients achieve financial security.</p>

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
