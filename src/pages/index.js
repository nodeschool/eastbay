import React from 'react'
// import Container from '@material-ui/core/Container'
// import Typography from '@material-ui/core/Typography'
// import Box from '@material-ui/core/Box'
// import MuiLink from '@material-ui/core/Link'
// import ProTip from '../components/ProTip'
// import Link from '../components/Link'
import { createUseStyles } from 'react-jss'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from 'react-jss'
import Page from '../components/Page'
// import { theme } from '../theme'
import theme from '../theme/theme'
import SEO from '../components/seo'
// import 'normalize.css'

export default function Index() {
  const useStyles = createUseStyles({
    '@global': {
      body: {
        backgroundColor: '#fff',
        fontFamily: "'Ubuntu', sans-serif",



    


        margin: 0,
        lineHeight: 1.75,
        letterSpacing: 0.9,
        // width: '100%',
      },
      h1: {
        fontSize: '2em'
      },
      h2: {
        lineHeight: 1.3,
      },
      a: {
        backgroundImage: 'none',
        // color: '#fff',
        color: theme.colors.blue,
        textDecoration: 'none',
        fontWeight: 'bold',
      },
      button: {
        fontFamily: "'Quattrocento Sans',sans-serif",
      },
      dt: {
        fontWeight: 'bold',
        marginBottom: 10,
      },
      dd: {
        margin: '0 0 20px 0',
      },
    },
  })
  useStyles()
  return (
    <>
    <SEO />
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      
      <Page />
    </ThemeProvider>
    </>
  )
}
