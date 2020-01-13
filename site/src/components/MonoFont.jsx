import React from 'react'
import { createUseStyles } from 'react-jss'

const MonoFont = ({ children, bold = true }) => {
  const useStyles = createUseStyles({
    font: {
      fontFamily: "'Ubuntu Mono', monospace",
      fontWeight: bold ? 'bold' : 'normal',
      wordSpacing: '-0.25em',
    },
  })
  const classes = useStyles()
  console.log('children', children)

  return <span className={classes.font}>{children}</span>
}

export default MonoFont
