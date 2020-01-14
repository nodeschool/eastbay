import React from 'react'
import { createUseStyles } from 'react-jss'
import iGitHub from '../media/github-octocat.svg'
const Footer = () => {
  const useStyles = createUseStyles({
    wrapper: {
      maxWidth: 830,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: 30,
      paddingTop: '20px',
      paddingBottom: '20px',
    },
    anchor: {
      // color: '#08449c',
      color: '#1985ff',
    },
    githubLogo: {
      maxWidth: 60,
    }
  })
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <p>
        Site content and design largely adopted from{' '}
        <a href="https://nodeschool.io/oakland/" className={classes.anchor}>
          NodeSchool Oakland
        </a>{' '}
        and{' '}
        <a
          href="https://nodeschool.io/sanfrancisco/"
          className={classes.anchor}
        >
          NodeSchool SF
        </a>{' '}
        with thanks to their wonderful and friendly organizers.
      </p>

      <a
        href="https://github.com/nodeschool/eastbay"
        className={classes.anchor}
      >
        <img src={iGitHub} className={classes.githubLogo} alt='github octocat logo' />
      </a>
    </div>
  )
}

export default Footer
