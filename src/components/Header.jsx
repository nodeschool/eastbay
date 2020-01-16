import React from 'react'
import { createUseStyles } from 'react-jss'
import iNSLogo from '../media/nodeschool.svg'
import NextEvent from './NextEvent'
import MonoFont from './MonoFont'

const Header = () => {
  const useStyles = createUseStyles(theme => {
    console.log('theme', theme.breakpoints.tablet)
    return {
      wrapper: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 40,
        [`@media (min-width: ${theme.breakpoints.tablet}px)`]: {
          display: 'flex',
          flexDirection: 'row',
          maxWidth: 830,
          padding: '20px 0 40px 0',
        },
      },
      headerLeft: {
        textAlign: 'center',
        
        marginBottom: 0,
        [`@media (min-width: ${theme.breakpoints.tablet}px)`]: {
          flexBasis: '20%',
          paddingRight: 40,
          marginBottom: 30,
        },
      },
      headerRight: {
        flexBasis: '80%',
      },
      logo: {
        width: 170,
        filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.25))',
        // [`@media (min-width: ${theme.breakpoints.tablet}px)`]: {
          // width: 140,
        // },
      },
      logoText: {
        fontSize: '1.5em',
        lineSpacing: '1px',

        [`@media (min-width: ${theme.breakpoints.tablet}px)`]: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
      },
      logoTextNodeSchool: {
        // '@media (min-width: 1024px)': {
        //   fontSize: '0.9em',
        // }
      },
      logoTextEastBay: {
        marginLeft: '0.4em',
        [`@media (min-width: ${theme.breakpoints.tablet}px)`]: {
          marginLeft: 0,
        },
      },
      logoTextSanFrancisco: {
        // margin: 0,
        // padding: 0,
        // [`@media (min-width: ${theme.breakpoints.tablet}px)`]: {
          // paddingTop: 0,
          // marginTop: 0,
          // display: 'inline',
        // },
        //
        // backgroundColor: 'green',
      },
      weHelpYou: {
        fontSize: '2em',
        marginTop: '1em',
        //
        // backgroundColor: 'red'
      },
    }
  })

  const classes = useStyles()
  console.log('classes', classes)

  return (
    <div id="header" className={classes.wrapper}>
      <div className={classes.headerLeft}>
        <img src={iNSLogo} className={classes.logo} alt="nodeschool logo" />
        <div className={classes.logoText}>
          <MonoFont bold={false} classes={classes.logoTextNodeSchool}>
            NodeSchool
          </MonoFont>
          <strong className={classes.logoTextEastBay}>East Bay</strong>
          <div className={classes.logoTextSanFrancisco}>San Francisco</div>
        </div>
      </div>

      <div className={classes.headerRight}>
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
