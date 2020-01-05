import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'var(--textTitle)',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            // fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              // color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          color: 'var(--textNormal)',
          background: 'var(--bg)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2>Main section - not much to see yet</h2>
          <br/>
          <br/>
          <br/>
          <br/>
          {children}
        </main>
        <footer>
          <b>Put some content in the footer</b>
          {new Date().getFullYear()}<br/>
          <a href='https://github.com/nodeschool/eastbay'>GitHub</a> &bull;{" "}
        </footer>
      </div>
    )
  }
}

export default Layout
