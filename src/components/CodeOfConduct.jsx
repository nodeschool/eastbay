import React from 'react'
import { createUseStyles } from 'react-jss'
import MonoFont from './MonoFont'

const CodeOfConduct = () => {
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
      <h2>Code of Conduct</h2>
      <p>
        <MonoFont>NodeSchool East Bay</MonoFont> is dedicated to providing a harassment-free event
        experience for everyone, regardless of gender, gender identity and
        expression, age, sexual orientation, disability, physical appearance,
        body size, race, ethnicity, religion (or lack thereof), or technology
        choices. We do not tolerate harassment of event participants in any
        form. Sexual language and imagery is not appropriate for any event
        venue, including talks, workshops, parties, Twitter and other online
        media. Event participants violating these rules may be sanctioned or
        expelled from the event at the discretion of the event organizers.
      </p>
      <p>The organizers of <MonoFont>NodeSchool East Bay</MonoFont> follow the <a href='https://jsconf.com/codeofconduct.html'>JSConf Code of Conduct</a>.</p>
      <strong>
        If you have questions or feedback about this Code of Conduct please
        contact one of the organizers.
      </strong>
    </div>
  )
}

export default CodeOfConduct
