
import { Helmet } from "react-helmet-async";

interface BlogSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  category: string;
  imageUrl?: string;
  slug: string;
  content: string;
}

const BlogSchema = ({
  title,
  description,
  author,
  datePublished,
  dateModified,
  category,
  imageUrl,
  slug,
  content
}: BlogSchemaProps) => {
  const siteUrl = "https://denilagari.com";
  const articleUrl = `${siteUrl}/blog/${slug}`;
  
  // Convert date to ISO 8601 format with timezone
  const formatDateForSchema = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString();
  };
  
  // Extract plain text from HTML content for wordCount
  const plainTextContent = content.replace(/<[^>]*>/g, '').trim();
  const wordCount = plainTextContent.split(/\s+/).length;
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": title,
    "description": description,
    "articleBody": plainTextContent.substring(0, 500) + "...", // First 500 chars
    "url": articleUrl,
    "datePublished": formatDateForSchema(datePublished),
    "dateModified": dateModified ? formatDateForSchema(dateModified) : formatDateForSchema(datePublished),
    "author": {
      "@type": "Person",
      "name": author,
      "url": `${siteUrl}/author/${author.toLowerCase().replace(/\s+/g, '-')}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Deni La Gari",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/denilagarilogo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "articleSection": category,
    "wordCount": wordCount,
    "inLanguage": "en-TZ"
  };

  // Add image if available
  if (imageUrl) {
    schemaData["image"] = {
      "@type": "ImageObject",
      "url": imageUrl.startsWith('http') ? imageUrl : `${siteUrl}${imageUrl}`,
      "width": 1200,
      "height": 720
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default BlogSchema;
