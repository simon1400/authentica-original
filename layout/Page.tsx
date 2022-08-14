import { useState, FC } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import PageProps from 'interfaces/page';

const Page: FC<PageProps> = ({
  children,
  id,
  className,
  title,
  description,
  image,
  twitter,
  contentType,
  published,
  category,
  updated,
  noCrawl,
  tags,
  ogTitle = '',
  ogDescription = '',
}) => {

  const router = useRouter()
  const global = {
    site_url: process.env.APP_DOMAIN,
    facebook_app_id: '',
    defaultTitle: 'Authentica',
    defaultDescription: 'Authentica',
    defaultImage: process.env.APP_DOMAIN,
    defaultTwitter: '@cereallarceny',
    defaultSep: ' | ',
    gtm: ''
  }
  
  const [meta, setMeta] = useState({
    title: title || null,
    description: description || null,
    image: {
      data: null
    }
  })
  
  const theTitle = meta.title ? (meta.title + global.defaultSep + global.defaultTitle) : global.defaultTitle;
  const theDescription = meta.description ? meta.description : global.defaultDescription;
  const theImage = image ? image : global.defaultImage;

  return (
    <>
      <Head>

        <meta charSet="utf-8" />

        {/* FONTY */}
        <link rel="stylesheet preload prefetch" href="https://use.typekit.net/vpe5tmu.css" as="style" type="text/css" crossOrigin="anonymous" />

        {/* FAVICON */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#e4002b" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#e4002b" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#e4002b" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{theTitle}</title>
        <link rel="canonical" href={`${global.site_url}${router.locale !== 'cs' ? '/'+router.locale : ''}${router.asPath !== '/' ? router.asPath : ''}`} />
        <meta itemProp="name" content={theTitle} />
        <meta itemProp="description" content={theDescription} />
        <meta itemProp="image" content={theImage} />
        <meta name="description" content={theDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="AUTHENTICA" />
        <meta name="twitter:title" content={ogTitle || theTitle} />
        <meta name="twitter:description" content={ogDescription || theDescription} />
        <meta name="twitter:creator" content={twitter || global.defaultTwitter} />
        <meta name="twitter:image:src" content={theImage} />
        <meta property="og:title" content={ogTitle || theTitle} />
        <meta property="og:type" content={contentType || 'website'} />
        <meta property="og:url" content={global.site_url+router.asPath} />
        <meta property="og:image" content={theImage} />
        <meta property="og:description" content={ogDescription || theDescription} />
        <meta property="og:site_name" content="AUTHENTICA" />
        <meta property="fb:app_id" content={global.facebook_app_id} />

        {published && <meta name="article:published_time" content={published} />}
        {category && <meta name="article:section" content={category} />}
        {updated && <meta name="article:modified_time" content={updated} />}
        {noCrawl && <meta name="robots" content="noindex, nofollow" />}
        {tags && <meta name="article:tag" content={tags} />}

      </Head>
      <main id={id} style={{paddingBottom: "100px", zIndex: "10", background: "white"}} className={className}>{children}</main>
    </>
  );
}


export default Page
