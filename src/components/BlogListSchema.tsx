import { Helmet } from "react-helmet";

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl?: string;
}

interface BlogListSchemaProps {
  blogPosts: BlogPost[];
}

const BlogListSchema = ({ blogPosts }: BlogListSchemaProps) => {
  const siteUrl = "https://denilagari.com";
  
  // Convert date to ISO 8601 format with timezone
  const formatDateForSchema = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString();
  };
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Deni La Gari",
    "description": "Latest news, insights, and guides about, finance, automobile and public affairs in Tanzania",
    "url": `${siteUrl}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": "Deni La Gari",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/denilagarilogo.png`
      }
    },
    "blogPost": blogPosts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `${siteUrl}/blog/${post.slug}`,
      "datePublished": formatDateForSchema(post.date),
      "author": {
        "@type": "Person",
        "name": post.author,
        "url": `${siteUrl}/author/${post.author.toLowerCase().replace(/\s+/g, '-')}`
      },
      "articleSection": post.category,
      ...(post.imageUrl && {
        "image": {
          "@type": "ImageObject",
          "url": post.imageUrl.startsWith('http') ? post.imageUrl : `${siteUrl}${post.imageUrl}`
        }
      })
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default BlogListSchema;
