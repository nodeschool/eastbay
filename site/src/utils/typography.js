import './global.css'
import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"


fairyGatesTheme.overrideThemeStyles = () => ({
  a: {
    // color: 'var(--textLink)',
    textShadow: "none",
  },
  hr: {
    background: "var(--hr)",
  },
  "a.gatsby-resp-image-link": {
    boxShadow: "none",
    backgroundImage: 'none',
  },
  // These two are for gatsby-remark-autolink-headers:
  "a.anchor": {
    boxShadow: "none",

  },
  'a.anchor svg[aria-hidden="true"]': {
    stroke: "var(--textLink)",
  },
  "p code": {
    fontSize: "1rem",
  },
  "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code": {
    fontSize: "inherit",
  },
  "li code": {
    fontSize: "1rem",
  },
  blockquote: {
    color: "inherit",
    borderLeftColor: "inherit",
    opacity: "0.8",
  },
  "blockquote.translation": {
    fontSize: "1em",
  },
})


const typography = new Typography(fairyGatesTheme)



// const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
