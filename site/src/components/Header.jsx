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
        display: 'flex',
        flexDirection: 'row',
        fontSize: 16,
        padding: '20px 0',
        color: '#fff',
        maxWidth: 830,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      logoTitleRow: {
        display: 'flex',
      },
      title: {
        // ...scale(1.5),
        // marginBottom: rhythm(1.5),
        // marginTop: 0,
      },
      link: {
        boxShadow: 'none',
        textDecoration: 'none',
        color: '#fff',
      },
      headerLeft: {
        flexBasis: '20%',
        textAlign: 'center',
        paddingRight: 24,
      },
      logo: {
        // minWidth: 100,
      },
      headerRight: {
        // display: 'flex',
        // flexDirection: 'column',
        flexBasis: '80%',
      },
    }
  })

  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.headerLeft}>
        <img src={iNSLogo} className={classes.logo} alt="nodeschool logo" />
        <div><MonoFont bold={false} className={classes.logoTextNodeSchool}>NodeSchool</MonoFont></div>
        <div><strong>East Bay</strong></div>
      </div>

      <div className={classes.headerRight}>
        <h1 className={classes.title}>
          <Link to={'/'} className={classes.link}>
            NodeSchool East Bay
          </Link>
        </h1>
        <p>{subTitle}</p>
        <p>
          <MonoFont>NodeSchool East Bay</MonoFont> is a monthly meetup dedicated to helping people
          learn JavaScript. We help people of all skill levels–from beginners to
          experts–discover what's possible with JavaScript. Bring yourself, your
          computer, and the desire to learn to our next event!{' '}
        </p>
        <NextEvent />
      </div>
    </div>
  )
}

export default Header
