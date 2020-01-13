import React from 'react'
// import { rhythm, scale } from '../utils/typography'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import Paper from '@material-ui/core/Paper'
import Button from './Button'

const NextEvent = () => {
  const useStyles = createUseStyles(theme => ({
    wrapper: {
      margin: '35px 0 0 0',
      filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.25))',
      // backgroundColor: '#08449c'
      display: 'flex',
      flexDirection: 'column',
      color: '#fff',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      padding: '35px 35px 25px 35px',
      justifyContent: 'center',
      //
      // backgroundColor: 'red',
    },
    detailsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      //
      // backgroundColor: 'green',
    },
    title: {
      // textAlign: 'center',
      fontSize: 28,
      paddingBottom: 25,
      margin: 0,
    },

    signup: {
      display: 'flex',
      justifyContent: 'space-around',
      // alignItems: 'stretch',
      //
      // backgroundColor: 'purple',
      marginBottom: 12
    },
    button: {
      flexBasis: '50%',
      textAlign: 'center',
      margin: '0 5px',
      //
      // backgroundColor: 'yellow',
    },
    buttonLearner: {
      // borderRight: '1px solid blue',
    },
    buttonMentor: {
      // borderLeft: '1px solid blue',
    },
    root: {
      color: '#fff !important',
      backgroundColor: '#073a86 !important',
      backgroundColor: `${theme.colors.blue} !important`,
      // padding: '0 !important',
      // margin: '0 !important'
    },
  }))
  const classes = useStyles()
  const buttonLearner = classNames(classes.button, classes.buttonLearner)
  const buttonMentor = classNames(classes.button, classes.buttonMentor)
  return (
    <Paper
      className={classes.wrapper}
      elevation={3}
      classes={{
        root: classes.root,
      }}
    >
      <>
        <div className={classes.details}>
          <h2 className={classes.title}>
            Our Next Event is on December 25th
          </h2>
          <ul className={classes.detailsList}>
            <li>
              <strong>When?</strong>&nbsp;&nbsp;&nbsp;Saturday Jun 00 from 1 - 5PM
            </li>
            <li>
              <strong>Where?</strong>&nbsp;&nbsp;&nbsp;TBD 000 Noname St, San Ramon, CA 94582
            </li>
            <li>
              <strong>What?</strong>&nbsp;&nbsp;&nbsp;Learning, mentoring, javascript bffs &amp;
              pizza
            </li>
          </ul>
        </div>
        <nav className={classes.signup}>
          <Button href="https://www.meetup.com/trivalleycoders/">
            Sign up as a Learner
          </Button>
          <Button href="https://www.meetup.com/trivalleycoders/">
            Sign up as a Mentor
          </Button>
        </nav>
      </>
    </Paper>
  )
}

export default NextEvent
