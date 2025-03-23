
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
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development in 2023",
    slug: "future-web-development-2023",
    excerpt: "Explore emerging trends and technologies shaping the future of web development in 2023 and beyond.",
    content: `
<h1>The Future of Web Development in 2023</h1>

<p>Web development continues to evolve at a rapid pace. As we move through 2023, several key trends are emerging that will shape the way we build and interact with web applications.</p>

<h2>AI-Driven Development</h2>

<p>Artificial Intelligence is no longer just a buzzword but a practical tool in a web developer's arsenal. AI-powered tools now help with:</p>

<ul>
  <li><strong>Code suggestions and completion</strong>: Tools like GitHub Copilot have revolutionized how we write code, often predicting entire functions before we type them.</li>
  <li><strong>Automated testing</strong>: AI can now generate test cases and identify potential bugs in code.</li>
  <li><strong>Design assistance</strong>: Converting sketches or mockups to code is becoming more automated through AI.</li>
</ul>

<h2>WebAssembly Goes Mainstream</h2>

<p>WebAssembly (Wasm) has been around for a few years, but 2023 is seeing its adoption accelerate dramatically. This technology allows high-performance code written in languages like C, C++, and Rust to run in browsers at near-native speed.</p>

<p>Some notable applications include:</p>

<ul>
  <li>Complex data visualizations</li>
  <li>Browser-based video editing</li>
  <li>Advanced in-browser games</li>
  <li>Running desktop applications in browsers</li>
</ul>

<h2>Edge Computing Takes Center Stage</h2>

<p>The edge computing model is transforming how web applications are delivered. By deploying code closer to users at "edge" locations:</p>

<ul>
  <li>Latency is dramatically reduced</li>
  <li>Applications remain functional even with unstable network connections</li>
  <li>Regional data compliance becomes easier to maintain</li>
</ul>

<p>Frameworks like Next.js and Remix are leading the charge with edge runtime support, allowing developers to run more code at the edge than ever before.</p>

<h2>The Rise of Meta-Frameworks</h2>

<p>While React, Vue, and Angular remain popular, we're seeing increasing adoption of meta-frameworks like Next.js, Nuxt, and SvelteKit. These frameworks offer:</p>

<ul>
  <li>Improved performance out of the box</li>
  <li>Built-in SEO and accessibility features</li>
  <li>Better developer experience</li>
  <li>Hybrid rendering approaches (SSR, SSG, ISR)</li>
</ul>

<p>As web applications grow more complex, these meta-frameworks provide the structure and conventions needed to build maintainable apps.</p>

<h2>Web Components Find Their Place</h2>

<p>Though they've existed for years, Web Components are finally finding their niche in the ecosystem. They offer:</p>

<ul>
  <li>Framework-agnostic reusability</li>
  <li>Native browser support</li>
  <li>Encapsulation via Shadow DOM</li>
</ul>

<p>Libraries like Lit and Stencil are making Web Components more accessible to developers, leading to increased adoption.</p>

<h2>Conclusion</h2>

<p>The web platform continues to mature and evolve at an impressive pace. For developers, 2023 represents an exciting time of new capabilities and approaches. By embracing these trends, we can build faster, more powerful, and more accessible applications than ever before.</p>

<p>The key will be balancing the adoption of new technologies with the fundamental principles of good web development: performance, accessibility, and user experience.</p>
    `,
    author: {
      name: "Alex Chen",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    publishedAt: "2023-05-15",
    readTime: 8,
    category: "Technology",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    views: 1000,
    comments: 50
  },
  {
    id: "2",
    title: "Optimizing React Performance: A Practical Guide",
    slug: "optimizing-react-performance",
    excerpt: "Learn proven strategies to significantly improve the performance of your React applications.",
    content: `
<h1>Optimizing React Performance: A Practical Guide</h1>

<p>React applications can sometimes suffer from performance issues as they grow in complexity. This guide covers practical techniques to optimize your React applications for better user experience and reduced load times.</p>

<h2>Identifying Performance Bottlenecks</h2>

<p>Before optimizing, it's crucial to identify where the performance issues are occurring. React Developer Tools provide a Profiler that can help pinpoint problematic components.</p>

<h2>Memoization Techniques</h2>

<p>React provides several APIs for memoization:</p>

<ul>
  <li><strong>React.memo</strong>: Prevent unnecessary rerenders by memoizing component output</li>
  <li><strong>useMemo</strong>: Cache computed values</li>
  <li><strong>useCallback</strong>: Prevent function recreations across renders</li>
</ul>

<h2>Code Splitting</h2>

<p>Splitting your JavaScript bundle can significantly improve initial load times:</p>

<pre><code>// Before code splitting
import BigComponent from './BigComponent';

// After code splitting
const BigComponent = React.lazy(() => import('./BigComponent'));</code></pre>

<p>Use Suspense to handle the loading state:</p>

<pre><code>&lt;Suspense fallback={&lt;Spinner /&gt;}&gt;
  &lt;BigComponent /&gt;
&lt;/Suspense&gt;</code></pre>

<h2>Virtual List Optimization</h2>

<p>When rendering large lists, consider using virtualization libraries like react-window or react-virtualized to only render items visible in the viewport.</p>

<h2>Server-Side Rendering & Static Generation</h2>

<p>For content-heavy sites, server-side rendering (SSR) or static site generation (SSG) can dramatically improve perceived performance and SEO.</p>

<h2>Conclusion</h2>

<p>Performance optimization should be an ongoing process. Start with the techniques that will give you the biggest wins for your specific application, and continuously monitor and refine as your application evolves.</p>

<p>Remember that premature optimization can sometimes lead to more complex code for minimal gains, so always measure the impact of your optimizations.</p>
    `,
    author: {
      name: "Samantha Lee",
      avatar: "https://i.pravatar.cc/150?img=27"
    },
    publishedAt: "2023-04-28",
    readTime: 10,
    category: "Programming",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    views: 800,
    comments: 30
  },
  {
    id: "3",
    title: "Building a Design System from Scratch",
    slug: "building-design-system",
    excerpt: "A comprehensive guide to creating a robust design system that scales with your product.",
    content: `
<h1>Building a Design System from Scratch</h1>

<p>Design systems have become essential for teams building modern digital products. They ensure consistency, improve collaboration between designers and developers, and speed up the product development process.</p>

<h2>What is a Design System?</h2>

<p>A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It typically includes:</p>

<ul>
  <li>Design tokens (colors, typography, spacing, etc.)</li>
  <li>UI components</li>
  <li>Patterns</li>
  <li>Documentation</li>
  <li>Design files</li>
</ul>

<h2>Step 1: Audit Your Existing UI</h2>

<p>Before building a design system, take inventory of your current UI:</p>

<ul>
  <li>Document all colors, typography, spacing, and other design elements</li>
  <li>Identify inconsistencies and redundancies</li>
  <li>Catalog component variations</li>
</ul>

<h2>Step 2: Establish Design Tokens</h2>

<p>Design tokens are the foundation of your design system:</p>

<ul>
  <li>Colors (primary, secondary, accents, neutrals)</li>
  <li>Typography (font families, sizes, weights, line heights)</li>
  <li>Spacing (margin and padding scales)</li>
  <li>Borders, shadows, and other visual properties</li>
</ul>

<h2>Step 3: Build Core Components</h2>

<p>Start with the most commonly used components:</p>

<ul>
  <li>Buttons</li>
  <li>Form elements (inputs, checkboxes, radio buttons)</li>
  <li>Cards</li>
  <li>Navigation elements</li>
</ul>

<h2>Step 4: Document Everything</h2>

<p>Documentation is what transforms a component library into a true design system:</p>

<ul>
  <li>Usage guidelines</li>
  <li>Code examples</li>
  <li>Accessibility considerations</li>
  <li>Visual examples</li>
</ul>

<h2>Step 5: Maintain and Evolve</h2>

<p>A design system is never "finished":</p>

<ul>
  <li>Establish a governance process</li>
  <li>Create a contribution workflow</li>
  <li>Regularly review and update components</li>
  <li>Version your system to manage changes</li>
</ul>

<h2>Conclusion</h2>

<p>Building a design system requires significant upfront investment but pays dividends through improved design consistency, development efficiency, and product quality. Start small, focus on the components that will have the biggest impact, and grow your system organically as your product evolves.</p>
    `,
    author: {
      name: "David Wong",
      avatar: "https://i.pravatar.cc/150?img=59"
    },
    publishedAt: "2023-04-10",
    readTime: 12,
    category: "Design",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    views: 1200,
    comments: 40
  },
  {
    id: "4",
    title: "Introduction to TypeScript for JavaScript Developers",
    slug: "typescript-for-javascript-developers",
    excerpt: "Learn how TypeScript can enhance your JavaScript development experience with static typing.",
    content: `
<h1>Introduction to TypeScript for JavaScript Developers</h1>

<p>If you're a JavaScript developer looking to make your code more robust and maintainable, TypeScript offers a compelling solution. This typed superset of JavaScript helps catch errors early and improves developer productivity.</p>

<h2>Why TypeScript?</h2>

<p>TypeScript adds several key features to JavaScript:</p>

<ul>
  <li><strong>Static Typing</strong>: Catch type-related errors during development instead of runtime</li>
  <li><strong>Enhanced IDE Support</strong>: Better autocompletion, navigation, and refactoring</li>
  <li><strong>Modern JavaScript Features</strong>: Use the latest ECMAScript features with backward compatibility</li>
  <li><strong>Readability</strong>: Code becomes self-documenting through type annotations</li>
</ul>

<h2>Getting Started</h2>

<p>First, install TypeScript:</p>

<pre><code>npm install -g typescript</code></pre>

<p>Create a simple TypeScript file (example.ts):</p>

<pre><code>function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

const message = greet("TypeScript");
console.log(message);</code></pre>

<p>Compile it to JavaScript:</p>

<pre><code>tsc example.ts</code></pre>

<h2>Key TypeScript Concepts</h2>

<h3>Basic Types</h3>

<pre><code>// Primitive types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";

// Arrays
let list: number[] = [1, 2, 3];
let names: Array&lt;string&gt; = ["John", "Jane"];

// Tuple
let pair: [string, number] = ["hello", 10];

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string";

// Void
function warnUser(): void {
  console.log("This is a warning");
}</code></pre>

<h3>Interfaces</h3>

<pre><code>interface User {
  name: string;
  id: number;
  email?: string; // Optional property
  readonly createdAt: Date; // Can't be changed after creation
}

function createUser(user: User): User {
  return user;
}</code></pre>

<h3>Type Aliases</h3>

<pre><code>type Point = {
  x: number;
  y: number;
};

type ID = string | number;</code></pre>

<h2>Integrating with JavaScript</h2>

<p>TypeScript can be gradually adopted in existing JavaScript projects. You can:</p>

<ul>
  <li>Add .ts files alongside .js files</li>
  <li>Use declaration files (.d.ts) to add types to JavaScript libraries</li>
  <li>Set the compiler option \`allowJs\` to true</li>
</ul>

<h2>Conclusion</h2>

<p>TypeScript offers significant advantages for projects of all sizes, especially as they grow and evolve. While there is a learning curve and some additional setup, the benefits in code quality, developer experience, and maintainability often outweigh the costs.</p>

<p>Start with small, incremental adoption and gradually expand your TypeScript usage as you become more comfortable with the system.</p>
    `,
    author: {
      name: "Emily Johnson",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    publishedAt: "2023-03-22",
    readTime: 8,
    category: "Programming",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    views: 900,
    comments: 20
  },
  {
    id: "5",
    title: "Using WebAssembly for High-Performance Web Applications",
    slug: "webassembly-high-performance-apps",
    excerpt: "Learn how WebAssembly can bring near-native performance to your web applications.",
    content: `
<h1>Using WebAssembly for High-Performance Web Applications</h1>

<p>WebAssembly (Wasm) is revolutionizing web performance by allowing developers to run code written in languages like C, C++, and Rust directly in the browser at near-native speed. This guide introduces WebAssembly and shows how to use it in your web projects.</p>

<h2>What is WebAssembly?</h2>

<p>WebAssembly is a binary instruction format that serves as a compilation target for high-level languages, enabling deployment on the web for client and server applications. Key features include:</p>

<ul>
  <li><strong>Performance</strong>: Executes at near-native speed</li>
  <li><strong>Efficiency</strong>: Compact binary format for faster downloads</li>
  <li><strong>Safety</strong>: Runs in a secure, sandboxed environment</li>
  <li><strong>Openness</strong>: An open standard that works across all modern browsers</li>
</ul>

<h2>When to Use WebAssembly</h2>

<p>WebAssembly excels in computationally intensive tasks:</p>

<ul>
  <li>Image and video editing</li>
  <li>Games and simulations</li>
  <li>Data visualization and analysis</li>
  <li>Audio processing</li>
  <li>Machine learning</li>
  <li>Cryptography</li>
</ul>

<h2>Getting Started with WebAssembly</h2>

<h3>Using Rust with wasm-pack</h3>

<p>Rust has excellent WebAssembly support through wasm-pack:</p>

<ol>
  <li>Install Rust and wasm-pack</li>
  <li>Create a new library project:</li>
</ol>

<pre><code>cargo new --lib hello-wasm
cd hello-wasm</code></pre>

<ol start="3">
  <li>Configure your Cargo.toml:</li>
</ol>

<pre><code>[package]
name = "hello-wasm"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"</code></pre>

<ol start="4">
  <li>Write your Rust code:</li>
</ol>

<pre><code>use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}</code></pre>

<ol start="5">
  <li>Build with wasm-pack:</li>
</ol>

<pre><code>wasm-pack build --target web</code></pre>

<ol start="6">
  <li>Use in JavaScript:</li>
</ol>

<pre><code>import init, { fibonacci } from './pkg/hello_wasm.js';

async function run() {
  await init();
  console.log(fibonacci(10)); // 55
}

run();</code></pre>

<h2>WebAssembly and JavaScript Interop</h2>

<p>WebAssembly and JavaScript can work together seamlessly:</p>

<ul>
  <li>JavaScript can call WebAssembly functions</li>
  <li>WebAssembly can call JavaScript functions</li>
  <li>Both can share memory</li>
</ul>

<p>This allows for incremental adoption where performance-critical parts can be moved to WebAssembly while keeping the rest in JavaScript.</p>

<h2>Performance Considerations</h2>

<p>To get the most out of WebAssembly:</p>

<ul>
  <li>Use it for computationally intensive operations</li>
  <li>Minimize data transfer between JavaScript and WebAssembly</li>
  <li>Consider using SharedArrayBuffer for efficient memory sharing</li>
  <li>Profile your application to identify actual bottlenecks</li>
</ul>

<h2>Conclusion</h2>

<p>WebAssembly represents a significant advancement for web performance, enabling new categories of applications that previously would have been impractical to run in a browser. As the ecosystem matures, we can expect even more tools and frameworks to make WebAssembly development more accessible.</p>

<p>While WebAssembly won't replace JavaScript, it complements it by providing a high-performance solution for intensive operations, creating a more capable web platform.</p>
    `,
    author: {
      name: "Michael Zhang",
      avatar: "https://i.pravatar.cc/150?img=69"
    },
    publishedAt: "2023-03-10",
    readTime: 15,
    category: "Technology",
    coverImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    views: 1100,
    comments: 35
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
