
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
    title: "10 Ways to Save Money on Your Monthly Expenses",
    slug: "10-ways-to-save-money",
    excerpt: "Discover practical tips to reduce your monthly spending and build your savings without sacrificing your lifestyle.",
    content: `
      <h2>Introduction</h2>
      <p>Managing your monthly expenses effectively can help you save money and achieve your financial goals. Here are 10 practical ways to reduce your spending without drastically changing your lifestyle.</p>

      <h2>1. Create a Budget</h2>
      <p>Start by tracking your spending and creating a realistic budget. Understanding where your money goes is the first step to identifying areas where you can cut back.</p>

      <h2>2. Reduce Utility Bills</h2>
      <p>Simple changes like switching off lights when not in use, unplugging electronics, and using energy-efficient appliances can significantly reduce your utility bills.</p>

      <h2>3. Cook at Home</h2>
      <p>Eating out can be expensive. Try meal prepping and cooking at home to save money while also eating healthier.</p>

      <h2>4. Use Cashback and Rewards</h2>
      <p>Take advantage of cashback offers, loyalty programs, and credit card rewards for purchases you're already making.</p>

      <h2>5. Cancel Unused Subscriptions</h2>
      <p>Review your subscriptions and cancel those you rarely use. Many people pay for services they've forgotten about.</p>

      <h2>6. Buy Generic Brands</h2>
      <p>Generic or store-brand products are often just as good as name brands but cost much less.</p>

      <h2>7. Use Public Transportation</h2>
      <p>When possible, consider using public transportation, carpooling, or biking to save on fuel and parking costs.</p>

      <h2>8. Shop with a List</h2>
      <p>Always shop with a list and stick to it to avoid impulse purchases.</p>

      <h2>9. Wait Before Making Big Purchases</h2>
      <p>Implement a 48-hour rule before making any significant purchase to avoid buying things you don't need.</p>

      <h2>10. Negotiate Bills</h2>
      <p>Don't hesitate to negotiate bills like insurance, internet, and phone services. Providers often offer discounts to retain customers.</p>

      <h2>Conclusion</h2>
      <p>Small changes in your spending habits can lead to significant savings over time. Start implementing these tips today to see a difference in your monthly expenses.</p>
    `,
    author: "Sarah Johnson",
    date: "2025-04-02",
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    category: "Personal Finance"
  },
  {
    id: 2,
    title: "Understanding South Africa's Retirement Funds",
    slug: "understanding-south-africa-retirement-funds",
    excerpt: "A comprehensive guide to the different retirement funds available in South Africa and how to choose the right one for your needs.",
    content: `
      <h2>Introduction to Retirement Planning in South Africa</h2>
      <p>Planning for retirement is an essential part of financial management. South Africa offers various retirement fund options, each with its own benefits and considerations.</p>

      <h2>Types of Retirement Funds</h2>
      <p>South Africa has several retirement fund options:</p>
      
      <h3>Pension Funds</h3>
      <p>These are employer-sponsored retirement funds where both the employer and employee contribute. The funds are invested and paid out upon retirement.</p>
      
      <h3>Provident Funds</h3>
      <p>Similar to pension funds, but traditionally allowed for a lump sum withdrawal at retirement. Recent changes have aligned them more closely with pension funds.</p>
      
      <h3>Retirement Annuities (RAs)</h3>
      <p>Individual retirement funds that are not tied to employment. They offer tax benefits and can supplement employer-sponsored plans.</p>
      
      <h3>Preservation Funds</h3>
      <p>These funds hold retirement savings when changing jobs, preserving the tax benefits until retirement.</p>

      <h2>Tax Considerations</h2>
      <p>Retirement funds in South Africa offer significant tax advantages:</p>
      <ul>
        <li>Contributions are tax-deductible up to certain limits</li>
        <li>Growth within the fund is tax-free</li>
        <li>At retirement, a portion of the lump sum is tax-free</li>
      </ul>

      <h2>How to Choose the Right Fund</h2>
      <p>Consider these factors when selecting a retirement fund:</p>
      <ul>
        <li>Your age and years until retirement</li>
        <li>Investment risk tolerance</li>
        <li>Fee structure</li>
        <li>Fund performance history</li>
        <li>Additional benefits offered</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Understanding the different retirement fund options in South Africa is crucial for effective retirement planning. Consult with a financial advisor to determine the best approach for your specific circumstances.</p>
    `,
    author: "Thomas Ndlovu",
    date: "2025-03-15",
    imageUrl: "https://images.unsplash.com/photo-1586021280718-53fbadde8694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    category: "Retirement Planning"
  },
  {
    id: 3,
    title: "Investing in South African Property: A Beginner's Guide",
    slug: "investing-in-south-african-property",
    excerpt: "Learn the essentials of property investment in South Africa, including market trends, financing options, and potential returns.",
    content: `
      <h2>Introduction</h2>
      <p>Property investment has long been considered a reliable path to wealth creation in South Africa. This guide covers the essentials for beginners interested in entering the property market.</p>

      <h2>Current Market Trends</h2>
      <p>South Africa's property market varies significantly by region. Urban centers like Cape Town, Johannesburg, and Durban offer different investment opportunities, each with unique advantages and challenges.</p>

      <h2>Financing Your Property Investment</h2>
      <p>Most property investors use mortgage financing. South African banks typically offer loans of up to 100% for primary residences and up to 80% for investment properties. Understanding interest rates, loan terms, and qualification requirements is essential.</p>

      <h2>Types of Property Investments</h2>
      
      <h3>Residential Properties</h3>
      <p>Investing in homes, apartments, or townhouses for rental income. These offer stable returns and are easier to manage for beginners.</p>
      
      <h3>Commercial Properties</h3>
      <p>Office spaces, retail locations, and industrial properties typically offer higher yields but require more capital and expertise.</p>
      
      <h3>Property Development</h3>
      <p>Buying land or existing properties for development or renovation. This approach can offer significant returns but comes with higher risks.</p>

      <h2>Legal Considerations</h2>
      <p>Property investment in South Africa involves various legal aspects:</p>
      <ul>
        <li>Transfer duties and taxes</li>
        <li>Zoning regulations</li>
        <li>Tenant rights and landlord responsibilities</li>
        <li>Building codes and compliance</li>
      </ul>

      <h2>Calculating Returns</h2>
      <p>When evaluating a property investment, consider:</p>
      <ul>
        <li>Rental yield (annual rental income as a percentage of property value)</li>
        <li>Capital appreciation potential</li>
        <li>Operating expenses (maintenance, rates and taxes, insurance)</li>
        <li>Vacancy rates in the area</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Property investment in South Africa can be rewarding but requires research, planning, and sometimes professional guidance. Start small, learn the market, and gradually expand your portfolio as you gain experience.</p>
    `,
    author: "Michael Pretorius",
    date: "2025-02-28",
    imageUrl: "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    category: "Real Estate"
  },
  {
    id: 4,
    title: "Managing Debt in a High Interest Rate Environment",
    slug: "managing-debt-high-interest-environment",
    excerpt: "Strategies for managing and reducing debt when interest rates are high, focusing on practical approaches for South African consumers.",
    content: `
      <h2>Introduction</h2>
      <p>High interest rates can make debt management challenging. This article explores strategies to effectively manage and reduce debt in South Africa's current economic climate.</p>

      <h2>Understanding Your Debt</h2>
      <p>The first step is to comprehensively list all your debts, including:</p>
      <ul>
        <li>Credit card balances</li>
        <li>Personal loans</li>
        <li>Home loans</li>
        <li>Vehicle finance</li>
        <li>Store accounts</li>
      </ul>
      <p>Note the interest rate, minimum payment, and total balance for each.</p>

      <h2>Prioritization Strategies</h2>
      
      <h3>The Avalanche Method</h3>
      <p>Focus on paying off debts with the highest interest rates first while maintaining minimum payments on others. This method minimizes the total interest paid over time.</p>
      
      <h3>The Snowball Method</h3>
      <p>Pay off the smallest debts first to build momentum and motivation. While not mathematically optimal, the psychological benefits can help maintain commitment to debt reduction.</p>

      <h2>Reducing Interest Costs</h2>
      <p>Several approaches can help reduce the interest burden:</p>
      <ul>
        <li>Debt consolidation loans at lower interest rates</li>
        <li>Negotiating with creditors for better terms</li>
        <li>Balance transfer offers (especially for credit cards)</li>
        <li>Accelerating payments on high-interest debts</li>
      </ul>

      <h2>Creating a Debt Repayment Plan</h2>
      <p>A structured plan includes:</p>
      <ul>
        <li>A realistic budget that maximizes debt payments</li>
        <li>Clear timelines for paying off each debt</li>
        <li>Emergency fund planning to avoid new debt</li>
        <li>Regular review and adjustment of the plan</li>
      </ul>

      <h2>When to Seek Professional Help</h2>
      <p>Consider debt counseling or financial advice if:</p>
      <ul>
        <li>You're struggling to make minimum payments</li>
        <li>Debt is causing significant stress or family problems</li>
        <li>You're unsure how to prioritize multiple debts</li>
        <li>Your debt-to-income ratio exceeds 50%</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Managing debt in a high interest rate environment requires discipline and strategic planning. By understanding your debt, prioritizing repayments, and seeking ways to reduce interest costs, you can make progress even when rates are high.</p>
    `,
    author: "Lerato Moloi",
    date: "2025-01-18",
    imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    category: "Debt Management"
  },
  {
    id: 5,
    title: "Tax-Efficient Investing in South Africa",
    slug: "tax-efficient-investing-south-africa",
    excerpt: "Learn how to optimize your investment strategy to minimize tax liability while building wealth in South Africa.",
    content: `
      <h2>Introduction</h2>
      <p>Tax efficiency is a crucial but often overlooked aspect of investing. By understanding South Africa's tax laws and utilizing available vehicles, investors can significantly improve their returns over time.</p>

      <h2>Tax-Free Savings Accounts (TFSAs)</h2>
      <p>Introduced in 2015, TFSAs allow South Africans to invest up to R36,000 per year (with a lifetime limit of R500,000) without paying any tax on the returns. This includes:</p>
      <ul>
        <li>No tax on interest earned</li>
        <li>No tax on dividends</li>
        <li>No capital gains tax</li>
      </ul>
      <p>TFSAs are ideal for long-term investments due to these significant tax advantages.</p>

      <h2>Retirement Annuities (RAs)</h2>
      <p>RAs offer three key tax benefits:</p>
      <ul>
        <li>Contributions are tax-deductible (up to certain limits)</li>
        <li>Growth within the RA is tax-free</li>
        <li>At retirement, a portion of the withdrawal is tax-free</li>
      </ul>
      <p>These benefits make RAs an essential component of tax-efficient investing, especially for higher-income earners.</p>

      <h2>Endowments</h2>
      <p>For investors in the highest tax brackets, endowments can be tax-efficient as they're taxed at a flat rate of 30% within the policy, potentially lower than the investor's marginal tax rate.</p>

      <h2>Capital Gains Tax Management</h2>
      <p>Strategies to manage capital gains tax include:</p>
      <ul>
        <li>Utilizing the annual exclusion (currently R40,000)</li>
        <li>Timing the realization of gains</li>
        <li>Offsetting gains with losses</li>
        <li>Investing through tax-efficient vehicles</li>
      </ul>

      <h2>Dividend Withholding Tax Considerations</h2>
      <p>South African investors pay 20% withholding tax on dividends. Tax-efficient approaches include:</p>
      <ul>
        <li>Using TFSAs for dividend-paying investments</li>
        <li>Considering REITs for property exposure</li>
        <li>Understanding foreign dividend taxation</li>
      </ul>

      <h2>Offshore Investing Tax Implications</h2>
      <p>When investing internationally, South Africans need to consider:</p>
      <ul>
        <li>Foreign dividend withholding taxes</li>
        <li>Capital gains tax on foreign investments</li>
        <li>Exchange control regulations</li>
        <li>Potential double taxation issues</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Tax-efficient investing requires understanding various investment vehicles and how they're taxed. By strategically allocating investments across these vehicles, South African investors can significantly improve their after-tax returns and accelerate wealth building.</p>
    `,
    author: "James Smith",
    date: "2025-01-05",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
    category: "Investment"
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
