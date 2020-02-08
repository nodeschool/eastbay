import React from 'react'
import { createUseStyles } from 'react-jss'
import Button from './Button'
import MonoFont from './MonoFont'

const NextEvent = () => {
  const useStyles = createUseStyles(theme => ({
    wrapper: {
      margin: '35px 0 0 0',
      filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.25))',
      display: 'flex',
      flexDirection: 'column',
      color: '#fff',
      boxShadow:
        '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
      borderRadius: 4,
      transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      backgroundColor: '#214C9B !important',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      padding: '35px 35px 25px 35px',
      justifyContent: 'center',
    },
    detailsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
    },
    title: {
      fontSize: 28,
      paddingBottom: 25,
      margin: 0,
    },

    nav: {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-around',
      marginBottom: 12,
      paddingLeft: 10,
      paddingRight: 10,
      [`@media (min-width: ${theme.breakpoints.phone}px)`]: {
        flexDirection: 'row',
      },
    },
    root: {
      color: '#fff !important',
      backgroundColor: `${theme.colors.blue} !important`,
    },
  }))

  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className={classes.details}>
        <ul className={classes.detailsList}>
          <li>
            <strong>When?</strong>&nbsp;&nbsp;&nbsp;<MonoFont bold={false}>Coming soon!</MonoFont>
          </li>
          <li>
            <strong>Where?</strong>&nbsp;&nbsp;&nbsp;<MonoFont bold={false}>Looking for a home along the 680 corridor, Walnut Creek to Pleasanton.</MonoFont>
          </li>
          <li>
            <strong>What?</strong>&nbsp;&nbsp;&nbsp;<MonoFont bold={false}>Learning, mentoring,
            javascript bffs &amp; pizza</MonoFont>
          </li>
        </ul>
      </div>
      <nav className={classes.nav}>
        <Button href="https://www.meetup.com/trivalleycoders/">
          Sign up as a Learner
        </Button>
        <Button href="https://www.meetup.com/trivalleycoders/">
          Sign up as a Mentor
        </Button>
      </nav>
    </div>
  )
}

export default NextEvent
