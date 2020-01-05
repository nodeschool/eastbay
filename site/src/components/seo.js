import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({
  article = false,
  slug,
  description,
  lang,
  meta,
  modifiedDate,
  pageUrl,
  previewImage,
  publishedDate,
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const {
    description: siteMetaDescription,
    siteUrl: siteMetaUrl,
    title: siteMetaTitle,
  } = site.siteMetadata

  // Fixing this error:
  //   We could not resolve the canonical URL because the
  //   redirect path contained a cycle.
  // Requires a '/' on the end of fullCononicalUrl
  // https://github.com/klequis/coding-notebook/issues/5
  const fullCanonicalUrl = `${siteMetaUrl}/${slug}/`

  let pageUrlNoFinalSlash
  if (pageUrl !== undefined) {
    pageUrlNoFinalSlash = pageUrl.substring(0, pageUrl.length - 1)
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        slug
          ? [
              {
                rel: 'canonical',
                key: fullCanonicalUrl,
                href: fullCanonicalUrl,
              },
            ]
          : [{ rel: 'canonical', key: siteMetaUrl, href: siteMetaUrl }]
      }
      // meta={allMeta.concat(meta)}
      meta={[
        {
          property: `og:image`,
          content: previewImage,
        },
        {
          property: `og:image:height`,
          content: '286',
        },
        {
          property: `og:image:width`,
          content: '590',
        },
        {
          name: `description`,
          content: siteMetaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: siteMetaDescription,
        },
        {
          // assumes that if type is not specified it is the home page
          property: `og:type`,
          content: article ? 'article' : `website`,
        },
        {
          property: `og:url`,
          // content: ogUrl,
          content: fullCanonicalUrl,
        },
        {
          property: `fb:app_id`,
          content: 495377417716964
        }
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  ogimage: 'none',
}

SEO.propTypes = {
  article: PropTypes.bool,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  modifiedDate: PropTypes.string,
  pageUrl: PropTypes.string,
  previewImage: PropTypes.string,
  publishedDate: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SEO
