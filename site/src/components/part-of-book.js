import React from 'react'
import { Link } from 'gatsby'
import BlockQuote from './block-quote'

function PartOfBook() {
  return (
    <BlockQuote marginTopRhythm={2} marginBottomRhythm={3}>
      <p>
        This chapter/section is{' '}
        <Link to="/full-stack-mern-development-series">
          part of a future book
        </Link>{' '}
        on full-stack MERN (MongoDB, Express, React & Node) development. For the
        full table of contents with links to
        all completed chapters see{' '}
        <Link to="/full-stack-mern-development-series">
          Full-stack Mern Development
        </Link>
        .
      </p>
    </BlockQuote>
  )
}

export default PartOfBook
