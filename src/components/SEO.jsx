import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * SEO component to manage all document head changes
 * 
 * @param {Object} props
 * @param {string} props.title - The page title
 * @param {string} props.description - Meta description
 * @param {string} props.canonical - Canonical URL
 * @param {Object} props.meta - Additional meta tags
 * @param {string} props.lang - Page language
 * @param {Object} props.schema - JSON-LD schema data
 */
const SEO = ({ 
  title, 
  description,
  canonical,
  meta = [],
  lang = 'en',
  schema = null
}) => {
  const metaDescription = description || 'शहीद पंडित रामप्रसाद बिस्मिल स्मारक बालिका इंटर कॉलेज - Official website of Shahid Pandit Ram Prasad Bismil Smarak Balika Inter College';
  const defaultTitle = 'शहीद पंडित रामप्रसाद बिस्मिल स्मारक बालिका इंटर कॉलेज | Shahid Pandit Ram Prasad Bismil Smarak Balika Inter College';
  
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={title ? `%s | ${defaultTitle}` : defaultTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title || defaultTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title || defaultTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        // Include additional meta tags
        ...meta,
      ]}
    >
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
