import { Helmet } from 'react-helmet-async'

const SEO = () => {
  const siteData = {
    title: 'Simone Livraghi - AI Systems Engineer & Software Architect',
    description:
      'Experienced AI Systems Engineer and Software Architect based in Milan, Italy. Specializing in machine learning, cloud architecture, and scalable AI solutions.',
    url: 'https://simonelivraghi.com',
    image: 'https://simonelivraghi.com/og-image.jpg',
    twitterHandle: '@simonelivraghi',
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Simone Livraghi',
    jobTitle: 'AI Systems Engineer & Software Architect',
    url: siteData.url,
    sameAs: [
      'https://linkedin.com/in/simonelivraghi',
      'https://github.com/simonelivraghi',
      'https://twitter.com/simonelivraghi',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Milan',
      addressCountry: 'Italy',
    },
  }

  return (
    <Helmet>
      <title>{siteData.title}</title>
      <meta name="description" content={siteData.description} />
      <link rel="canonical" href={siteData.url} />

      {/* Open Graph */}
      <meta property="og:title" content={siteData.title} />
      <meta property="og:description" content={siteData.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteData.url} />
      <meta property="og:image" content={siteData.image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteData.twitterHandle} />
      <meta name="twitter:title" content={siteData.title} />
      <meta name="twitter:description" content={siteData.description} />
      <meta name="twitter:image" content={siteData.image} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

export default SEO
