import React from 'react'
import Helmet from 'react-helmet'

const SEO = ({ lang, title }) => {
  const description = 'site description'
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Mono&display=swap',
        },
      ]}
      // link={
      //   slug
      //     ? [
      //         {
      //           rel: 'canonical',
      //           key: fullCanonicalUrl,
      //           href: fullCanonicalUrl,
      //         },
      //       ]
      //     : [{ rel: 'canonical', key: siteMetaUrl, href: siteMetaUrl }]
      // }
      // meta={allMeta.concat(meta)}
      meta={[
        // {
        //   property: `og:image`,
        //   content: previewImage,
        // },
        // {
        //   property: `og:image:height`,
        //   content: '286',
        // },
        // {
        //   property: `og:image:width`,
        //   content: '590',
        // },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          // assumes that if type is not specified it is the home page
          property: `og:type`,
          content: `website`,
        },
        // {
        //   property: `og:url`,
        //   // content: ogUrl,
        //   content: fullCanonicalUrl,
        // },

        // TODO: KEEP THIS ONE
        // TODO: get new app_id
        {
          property: `fb:app_id`,
          content: 495377417716964,
        },
      ]}
    />
  )
}

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
//   ogimage: 'none',
// }

// SEO.propTypes = {
//   article: PropTypes.bool,
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   modifiedDate: PropTypes.string,
//   pageUrl: PropTypes.string,
//   previewImage: PropTypes.string,
//   publishedDate: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// }

export default SEO