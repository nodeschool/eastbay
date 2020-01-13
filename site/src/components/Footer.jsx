import React from 'react'
import { createUseStyles } from 'react-jss'

const Footer = () => {
  const useStyles = createUseStyles({
    wrapper: {
      maxWidth: 830,
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingTop: '20px',
      paddingBottom: '20px',
    },
  })
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <p>
        Site content and design largely adopted from{' '}
        <a href="https://nodeschool.io/oakland/">NodeSchool Oakland</a> and{' '}
        <a href="https://nodeschool.io/sanfrancisco/">NodeSchool SF</a> with
        thanks to their wonderful organizers.
      </p>
      
      <a href="https://github.com/nodeschool/eastbay">GitHub</a>
    </div>
  )
}

export default Footer
