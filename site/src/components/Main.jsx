import React from 'react'
import { createUseStyles } from 'react-jss'
import MonoFont from './MonoFont'

const Main = () => {
  const useStyles = createUseStyles({
    wrapper: {
      maxWidth: 830,
      marginRight: 'auto',
      marginLeft: 'auto',
    }
  })
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <h2>Frequently Asked Questions</h2>
      <dl>
        <dt>What do I need to bring?</dt>
        <dd>Bring a laptop, a desire to learn, and all you friendship!</dd>
        <dt>Who organizes this event?</dt>
        <dd>Carl Becker (@at_klequis), Srishti Sehtia &amp; Michael Costanza.</dd>
        <dt>What actually happens at a <MonoFont>NodeSchool East Bay</MonoFont> event?</dt>

        <dd class="faq__answer">
          <a href="https://nodeschool.io/">workshoppers</a> or hack on their own
          side projects. There isn't a structured “curriculum” which must be
          followed. <MonoFont>NodeSchool East Bay</MonoFont> events are an opportunity to hang out
          with other learners and mentors in a low stress, encouraging
          environment. Instead of the usual follow-along, presentation-driven
          workshops, learners can either work on self-paced.
          <br />
          <br />A typical event follows this schedule:
          <ul class="schedule">
            <li class="schedule__item">
              <strong>1:00</strong> - Doors open
            </li>
            <li class="schedule__item">
              <strong>1:15</strong> - Introduction and opening announcements
            </li>
            <li class="schedule__item">
              <strong>1:30-5:00</strong> - Learning/mentoring
            </li>
            <li class="schedule__item">
              <strong>3:00ish</strong> - Pizza! 🍕{' '}
            </li>
            <li class="schedule__item">
              <strong>5:00</strong> - Event ends
            </li>
          </ul>
        </dd>
        <dt>What does it cost to attend?</dt>
        <dd><MonoFont>NodeSchool East Bay</MonoFont> free!</dd>
        <dt class="faq__question">
          How do I become a mentor?
        </dt>
        <dd class="faq__answer">
          We're always looking for people to volunteer to be mentors! We ask
          that prospective mentors:
          <ul>
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
        <dt class="faq__question">
          More questions?
        </dt>
        <dd class="faq__answer">
          <a href="https://github.com/nodeschool/sanfrancisco/issues">
            File an issue at our GitHub repo
          </a>{' '}
          and we'll answer as soon as possible.
        </dd>
      </dl>
      <h2>Organizers</h2>
      <ul>
        <li>Carl Becker (klequis@gmail.com)</li>
        <li>Srishti Sehtia</li>
        <li>Michael Costanza</li>
      </ul>
    </div>
  )
}

export default Main
