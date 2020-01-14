import React from 'react'
// import { rhythm, scale } from '../utils/typography'
import { Link } from 'gatsby'
import { createUseStyles } from 'react-jss'
import iNSLogo from '../media/nodeschool.svg'
import NextEvent from './NextEvent'
import MonoFont from './MonoFont'

const Header = ({ title, subTitle }) => {
  const useStyles = createUseStyles(theme => {
    console.log('theme', theme)
    return {
      wrapper: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 'auto',
        marginRight: 'auto',
        '@media (min-width: 1024px)': {
          display: 'flex',
          flexDirection: 'row',
          padding: '20px 0',
          maxWidth: 830,
        },
      },
      logoTitleRow: {
        display: 'flex',
      },
      title: {
        // ...scale(1.5),
        // marginBottom: rhythm(1.5),
        // marginTop: 0,
        display: 'none',
      },
      link: {
        boxShadow: 'none',
        textDecoration: 'none',
        color: '#fff',
      },
      headerLeft: {
        textAlign: 'center',

        '@media (min-width: 1024px)': {
          flexBasis: '20%',
          paddingRight: 24,
        },
        
        
        

      },
      logo: {
        // minWidth: 100,
        width: 140,
      },
      headerRight: {
        // display: 'flex',
        // flexDirection: 'column',
        flexBasis: '80%',
      },
      logoText: {
        display: 'flex',
        justifyContent: 'center',
        '@media (min-width: 1024px)': {
          flexFlow: 'column nowrap',
          alignItems: 'flex-end',
          alignContent: 'center',
        },
        
      },
      logoTextNodeSchool: {
        // fontSize: '0.9em',
        
      },
      logoTextEastBay: {
        // fontSize: '1em',
        paddingTop: '0.03em',
        marginLeft: '0.5em',
      },
    }
  })

  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.headerLeft}>
        <img src={iNSLogo} className={classes.logo} alt="nodeschool logo" />
        <div className={classes.logoText}>
          <MonoFont bold={false} classes={classes.logoTextNodeSchool}>
            NodeSchool
          </MonoFont>
          <strong className={classes.logoTextEastBay}>East Bay</strong>
        </div>
      </div>

      <div className={classes.headerRight}>
        <h1 className={classes.title}>
          <Link to={'/'} className={classes.link}>
            NodeSchool East Bay
          </Link>
        </h1>
        <p>{subTitle}</p>
        <p>
          <MonoFont>NodeSchool East Bay</MonoFont> is a monthly meetup dedicated
          to helping people learn JavaScript. We help people of all skill
          levels–from beginners to experts–discover what's possible with
          JavaScript. Bring yourself, your computer, and the desire to learn to
          our next event!{' '}
        </p>
        <NextEvent />
      </div>
    </div>
  )
}

export default Header
