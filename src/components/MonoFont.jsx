import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'

const MonoFont = ({ children, classes: Classes, bold = true }) => {
  const useStyles = createUseStyles({
    font: {
      fontFamily: "'Ubuntu Mono', monospace",
      fontWeight: bold ? 'bold' : 'normal',
      wordSpacing: '-0.25em',
    },
  })
  const classes = useStyles()
  const combinedClasses = classNames(Classes, classes.font)

  return <span className={combinedClasses}>{children}</span>
}

export default MonoFont
