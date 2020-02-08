/* eslint-disable */

import React from 'react'
import Helmet from 'react-helmet'

const googleFontHref = "https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Mono&display=swap"

const SEO = ({ lang, title }) => {
  const description = 'site description'
  return (
    <Helmet
      // meta={[
        // {
        //   property: `og:image`,
        //   content: previewImage,
        // },
        
        // {

      // ]}
    >
      <title>NodeSchool | East Bay</title>
      <meta name="description" content="A place to learn NodeJS and JavaScript" />
      <link rel="stylesheet" href={googleFontHref} />
      <link rel="canonical" href="https://nodeschool.io/eastbay" />
      <meta property="og:image" 
        content="https://res.cloudinary.com/klequis/image/upload/v1581179074/ns.east-bay/ns.social.png"
                 
        data-react-helmet="true">
      </meta>
      <meta property="og:image:height" content="286" />
      <meta property="og:image:width" content="590" />
      <meta name="description" content="A place to learn NodeJS and JavaScript"></meta>
      <meta property="og:description" content="A place to learn NodeJS and JavaScript"></meta>
      <meta property="og:type" content="website" />
      <meta property="og:title" content="NodeSchool East Bay (SF)"></meta>
      <meta property="og:url" content="https://nodeschool.io/eastbay/"></meta>
      <meta property="fb:app_id" content="2239915996309728" />
    </Helmet>
  )
}

export default SEO

// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-83381302-4"></script>