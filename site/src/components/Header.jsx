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
        paddingBottom: 40,
        '@media (min-width: 1024px)': {
          display: 'flex',
          flexDirection: 'row',
          padding: '20px 0 40px 0',
          maxWidth: 830,
        },
      },
      logoTitleRow: {
        display: 'flex',
      },
      title: {
        display: 'none',
        '@media (min-width: 1024px)': {
          display: 'inline',
        },
      },
      subTitleDesktop: {
        display: 'none',
        '@media (min-width: 1024px)': {
          paddingTop: 0,
          marginTop: 0,
          display: 'inline',
        },
      },
      subTitleMobile: {
        textAlign: 'center',
        fontSize: '0.7em',
        '@media (min-width: 1024px)': {
          display: 'none'
        }
      },
      link: {
        boxShadow: 'none',
        textDecoration: 'none',
        color: '#fff',
      },
      headerLeft: {
        textAlign: 'center',
        marginBottom: 0,
        '@media (min-width: 1024px)': {
          flexBasis: '20%',
          paddingRight: 24,
          marginBottom: 30,
        },
      },
      logo: {
        width: 170,
        '@media (min-width: 1024px)': {
          width: 140,
        },
      },
      headerRight: {
        flexBasis: '80%',
      },
      logoText: {
        // display: 'flex',
        // flexFlow: 'column',
        justifyContent: 'center',
        fontSize: '1.5em',
        lineSpacing: '1px',
        '@media (min-width: 1024px)': {
          // flexFlow: 'column nowrap',
          // alignItems: 'flex-end',
          // alignContent: 'center',
          // fontSize: '1em',
        },
      },
      logoTextNodeSchool: {
        
        // '@media (min-width: 1024px)': {
        //   fontSize: '0.9em',
        // }
      },
      logoTextEastBay: {
        
        // '@media (min-width: 1024px)': {
        //   fontSize: '1em',
        // },
        // paddingTop: '0.03em',
        marginLeft: '0.4em',
      },
      weHelpYou: {

        fontSize: '2em',
        marginTop: 15,
        
      }
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
          <div className={classes.subTitleMobile}>San Francisco</div>
        </div>
      </div>

      <div className={classes.headerRight}>
        <h1 className={classes.title}>
          <Link to={'/'} className={classes.link}>
            NodeSchool East Bay
          </Link>
        </h1>
        <p className={classes.subTitleDesktop}>East of San Francisco</p>
        <h2 className={classes.weHelpYou}>We Help You Learn JavaScript</h2>        
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
