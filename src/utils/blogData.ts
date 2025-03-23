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
  views: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development in 2023",
    slug: "future-web-development-2023",
    excerpt: "Explore emerging trends and technologies shaping the future of web development in 2023 and beyond.",
    content: `
# The Future of Web Development in 2023

Web development continues to evolve at a rapid pace. As we move through 2023, several key trends are emerging that will shape the way we build and interact with web applications.

## AI-Driven Development

Artificial Intelligence is no longer just a buzzword but a practical tool in a web developer's arsenal. AI-powered tools now help with:

- **Code suggestions and completion**: Tools like GitHub Copilot have revolutionized how we write code, often predicting entire functions before we type them.
- **Automated testing**: AI can now generate test cases and identify potential bugs in code.
- **Design assistance**: Converting sketches or mockups to code is becoming more automated through AI.

## WebAssembly Goes Mainstream

WebAssembly (Wasm) has been around for a few years, but 2023 is seeing its adoption accelerate dramatically. This technology allows high-performance code written in languages like C, C++, and Rust to run in browsers at near-native speed.

Some notable applications include:

- Complex data visualizations
- Browser-based video editing
- Advanced in-browser games
- Running desktop applications in browsers

## Edge Computing Takes Center Stage

The edge computing model is transforming how web applications are delivered. By deploying code closer to users at "edge" locations:

- Latency is dramatically reduced
- Applications remain functional even with unstable network connections
- Regional data compliance becomes easier to maintain

Frameworks like Next.js and Remix are leading the charge with edge runtime support, allowing developers to run more code at the edge than ever before.

## The Rise of Meta-Frameworks

While React, Vue, and Angular remain popular, we're seeing increasing adoption of meta-frameworks like Next.js, Nuxt, and SvelteKit. These frameworks offer:

- Improved performance out of the box
- Built-in SEO and accessibility features
- Better developer experience
- Hybrid rendering approaches (SSR, SSG, ISR)

As web applications grow more complex, these meta-frameworks provide the structure and conventions needed to build maintainable apps.

## Web Components Find Their Place

Though they've existed for years, Web Components are finally finding their niche in the ecosystem. They offer:

- Framework-agnostic reusability
- Native browser support
- Encapsulation via Shadow DOM

Libraries like Lit and Stencil are making Web Components more accessible to developers, leading to increased adoption.

## Conclusion

The web platform continues to mature and evolve at an impressive pace. For developers, 2023 represents an exciting time of new capabilities and approaches. By embracing these trends, we can build faster, more powerful, and more accessible applications than ever before.

The key will be balancing the adoption of new technologies with the fundamental principles of good web development: performance, accessibility, and user experience.
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
# Optimizing React Performance: A Practical Guide

React applications can sometimes suffer from performance issues as they grow in complexity. This guide covers practical techniques to optimize your React applications for better user experience and reduced load times.

## Identifying Performance Bottlenecks

Before optimizing, it's crucial to identify where the performance issues are occurring. React Developer Tools provide a Profiler that can help pinpoint problematic components.

## Memoization Techniques

React provides several APIs for memoization:

- **React.memo**: Prevent unnecessary rerenders by memoizing component output
- **useMemo**: Cache computed values
- **useCallback**: Prevent function recreations across renders

## Code Splitting

Splitting your JavaScript bundle can significantly improve initial load times:

\`\`\`jsx
// Before code splitting
import BigComponent from './BigComponent';

// After code splitting
const BigComponent = React.lazy(() => import('./BigComponent'));
\`\`\`

Use Suspense to handle the loading state:

\`\`\`jsx
<Suspense fallback={<Spinner />}>
  <BigComponent />
</Suspense>
\`\`\`

## Virtual List Optimization

When rendering large lists, consider using virtualization libraries like react-window or react-virtualized to only render items visible in the viewport.

## Server-Side Rendering & Static Generation

For content-heavy sites, server-side rendering (SSR) or static site generation (SSG) can dramatically improve perceived performance and SEO.

## Conclusion

Performance optimization should be an ongoing process. Start with the techniques that will give you the biggest wins for your specific application, and continuously monitor and refine as your application evolves.

Remember that premature optimization can sometimes lead to more complex code for minimal gains, so always measure the impact of your optimizations.
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
# Building a Design System from Scratch

Design systems have become essential for teams building modern digital products. They ensure consistency, improve collaboration between designers and developers, and speed up the product development process.

## What is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It typically includes:

- Design tokens (colors, typography, spacing, etc.)
- UI components
- Patterns
- Documentation
- Design files

## Step 1: Audit Your Existing UI

Before building a design system, take inventory of your current UI:

- Document all colors, typography, spacing, and other design elements
- Identify inconsistencies and redundancies
- Catalog component variations

## Step 2: Establish Design Tokens

Design tokens are the foundation of your design system:

- Colors (primary, secondary, accents, neutrals)
- Typography (font families, sizes, weights, line heights)
- Spacing (margin and padding scales)
- Borders, shadows, and other visual properties

## Step 3: Build Core Components

Start with the most commonly used components:

- Buttons
- Form elements (inputs, checkboxes, radio buttons)
- Cards
- Navigation elements

## Step 4: Document Everything

Documentation is what transforms a component library into a true design system:

- Usage guidelines
- Code examples
- Accessibility considerations
- Visual examples

## Step 5: Maintain and Evolve

A design system is never "finished":

- Establish a governance process
- Create a contribution workflow
- Regularly review and update components
- Version your system to manage changes

## Conclusion

Building a design system requires significant upfront investment but pays dividends through improved design consistency, development efficiency, and product quality. Start small, focus on the components that will have the biggest impact, and grow your system organically as your product evolves.
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
# Introduction to TypeScript for JavaScript Developers

If you're a JavaScript developer looking to make your code more robust and maintainable, TypeScript offers a compelling solution. This typed superset of JavaScript helps catch errors early and improves developer productivity.

## Why TypeScript?

TypeScript adds several key features to JavaScript:

- **Static Typing**: Catch type-related errors during development instead of runtime
- **Enhanced IDE Support**: Better autocompletion, navigation, and refactoring
- **Modern JavaScript Features**: Use the latest ECMAScript features with backward compatibility
- **Readability**: Code becomes self-documenting through type annotations

## Getting Started

First, install TypeScript:

\`\`\`bash
npm install -g typescript
\`\`\`

Create a simple TypeScript file (example.ts):

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, ${name}!\`;
}

const message = greet("TypeScript");
console.log(message);
\`\`\`

Compile it to JavaScript:

\`\`\`bash
tsc example.ts
\`\`\`

## Key TypeScript Concepts

### Basic Types

\`\`\`typescript
// Primitive types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";

// Arrays
let list: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jane"];

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
}
\`\`\`

### Interfaces

\`\`\`typescript
interface User {
  name: string;
  id: number;
  email?: string; // Optional property
  readonly createdAt: Date; // Can't be changed after creation
}

function createUser(user: User): User {
  return user;
}
\`\`\`

### Type Aliases

\`\`\`typescript
type Point = {
  x: number;
  y: number;
};

type ID = string | number;
\`\`\`

## Integrating with JavaScript

TypeScript can be gradually adopted in existing JavaScript projects. You can:

- Add .ts files alongside .js files
- Use declaration files (.d.ts) to add types to JavaScript libraries
- Set the compiler option \`allowJs\` to true

## Conclusion

TypeScript offers significant advantages for projects of all sizes, especially as they grow and evolve. While there is a learning curve and some additional setup, the benefits in code quality, developer experience, and maintainability often outweigh the costs.

Start with small, incremental adoption and gradually expand your TypeScript usage as you become more comfortable with the system.
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
# Using WebAssembly for High-Performance Web Applications

WebAssembly (Wasm) is revolutionizing web performance by allowing developers to run code written in languages like C, C++, and Rust directly in the browser at near-native speed. This guide introduces WebAssembly and shows how to use it in your web projects.

## What is WebAssembly?

WebAssembly is a binary instruction format that serves as a compilation target for high-level languages, enabling deployment on the web for client and server applications. Key features include:

- **Performance**: Executes at near-native speed
- **Efficiency**: Compact binary format for faster downloads
- **Safety**: Runs in a secure, sandboxed environment
- **Openness**: An open standard that works across all modern browsers

## When to Use WebAssembly

WebAssembly excels in computationally intensive tasks:

- Image and video editing
- Games and simulations
- Data visualization and analysis
- Audio processing
- Machine learning
- Cryptography

## Getting Started with WebAssembly

### Using Rust with wasm-pack

Rust has excellent WebAssembly support through wasm-pack:

1. Install Rust and wasm-pack
2. Create a new library project:

\`\`\`bash
cargo new --lib hello-wasm
cd hello-wasm
\`\`\`

3. Configure your Cargo.toml:

\`\`\`toml
[package]
name = "hello-wasm"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
\`\`\`

4. Write your Rust code:

\`\`\`rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}
\`\`\`

5. Build with wasm-pack:

\`\`\`bash
wasm-pack build --target web
\`\`\`

6. Use in JavaScript:

\`\`\`javascript
import init, { fibonacci } from './pkg/hello_wasm.js';

async function run() {
  await init();
  console.log(fibonacci(10)); // 55
}

run();
\`\`\`

## WebAssembly and JavaScript Interop

WebAssembly and JavaScript can work together seamlessly:

- JavaScript can call WebAssembly functions
- WebAssembly can call JavaScript functions
- Both can share memory

This allows for incremental adoption where performance-critical parts can be moved to WebAssembly while keeping the rest in JavaScript.

## Performance Considerations

To get the most out of WebAssembly:

- Use it for computationally intensive operations
- Minimize data transfer between JavaScript and WebAssembly
- Consider using SharedArrayBuffer for efficient memory sharing
- Profile your application to identify actual bottlenecks

## Conclusion

WebAssembly represents a significant advancement for web performance, enabling new categories of applications that previously would have been impractical to run in a browser. As the ecosystem matures, we can expect even more tools and frameworks to make WebAssembly development more accessible.

While WebAssembly won't replace JavaScript, it complements it by providing a high-performance solution for intensive operations, creating a more capable web platform.
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

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

