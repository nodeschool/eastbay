import React from 'react'
import { createUseStyles } from 'react-jss'
import MonoFont from './MonoFont'
import classNames from 'classnames'

const Main = () => {
  const useStyles = createUseStyles({
    wrapper: {
      maxWidth: 830,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    ul: {
      padding: 15,
    },
    ulOrganizers: {
      paddingTop: 0,
    },
  })
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <h2>Frequently Asked Questions</h2>
      <dl>
        <dt>What do I need to bring?</dt>
        <dd>Bring a laptop, a desire to learn, and all you friendship!</dd>
        <dt>Who organizes this event?</dt>
        <dd>
          Carl Becker (@at_klequis), Srishti Sehtia &amp; Michael Costanza.
        </dd>
        <dt>
          What actually happens at a <MonoFont>NodeSchool East Bay</MonoFont>{' '}
          event?
        </dt>

        <dd>
          <MonoFont>NodeSchool East Bay</MonoFont> events are an opportunity to hang out with other
          learners and mentors in a low stress, encouraging environment. Instead
          of the usual follow-along, presentation-driven workshops, learners can
          either work on{' '}
          <a href="https://nodeschool.io/">self-paced workshoppers</a> or hack
          on their own side projects. There isn't a structured “curriculum”
          which must be followed.
          <br />
          <br />A typical event follows this schedule:
          <ul className={classes.ul}>
            <li>
              <strong>1:00</strong> - Doors open
            </li>
            <li>
              <strong>1:15</strong> - Introduction and opening announcements
            </li>
            <li>
              <strong>1:30-5:00</strong> - Learning/mentoring
            </li>
            <li>
              <strong>3:00ish</strong> - Pizza! 🍕{' '}
            </li>
            <li>
              <strong>5:00</strong> - Event ends
            </li>
          </ul>
        </dd>
        <dt>What does it cost to attend?</dt>
        <dd>
          <MonoFont>NodeSchool East Bay</MonoFont> free!
        </dd>
        <dt>How do I become a mentor?</dt>
        <dd>
          We're always looking for people to volunteer to be mentors! We ask
          that prospective mentors:
          <ul className={classes.ul}>
            <li>
              Have already completed the{' '}
              <a href="https://nodeschool.io/#workshopper-list">
                core NodeSchool workshoppers
              </a>{' '}
              before the event.
            </li>
            <ul>
              <li>
                Having also completed some elective workshoppers is a great
                bonus.
              </li>
            </ul>
            <li>
              Review the{' '}
              <a href="https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices">
                Mentor Best Practices
              </a>{' '}
              wiki page.
            </li>
            <li>
              Arrive 30 minutes early (12:30p) so we can get setup and have our
              mentor meeting.
            </li>
            <li>
              Sign up on{' '}
              <a href="https://github.com/nodeschool/sanfrancisco/issues/284">
                the event's GitHub issue.
              </a>
              !
            </li>
          </ul>
        </dd>
        <dt>More questions?</dt>
        <dd>
          <a href="https://github.com/nodeschool/sanfrancisco/issues">
            File an issue at our GitHub repo
          </a>{' '}
          and we'll answer as soon as possible.
        </dd>
      </dl>
      <h2>Organizers</h2>
      <ul className={classNames(classes.ul, classes.ulOrganizers)}>
        <li>Carl Becker (klequis@gmail.com)</li>
        <li>Srishti Sehtia</li>
        <li>Michael Costanza</li>
      </ul>
    </div>
  )
}

export default Main
