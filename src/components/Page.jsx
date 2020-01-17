import React from 'react'
import { createUseStyles } from 'react-jss'
import Header from './Header'
import classNames from 'classnames'
import Main from './Main'
import CodeOfConduct from './CodeOfConduct'
import Footer from './Footer'

const Page = () => {
  const useStyles = createUseStyles(theme => {
    return {
      outer: {
        maxWidth: '100%',
        padding: '0 20px',
      },
      header: {
        backgroundColor: theme.colors.darkBlue,
      },
      footer: {
        backgroundColor: '#282C35',
        color: 'white',
      },
    }
  })
  const classes = useStyles()
  const header = classNames(classes.outer, classes.header)
  const footer = classNames(classes.outer, classes.footer)
  return (
    <>
      <header className={header}>
        <Header />
      </header>
      <main className={classes.outer}>
        <Main />
        <CodeOfConduct />
      </main>
      <footer className={footer}>
        <Footer />
      </footer>
    </>
  )
}

export default Page
