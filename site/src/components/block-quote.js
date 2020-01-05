import React from 'react'
import { rhythm } from '../utils/typography'

const blockQuoteStyle = {
  borderLeft: '0.54375rem solid #1ca086',
  borderLeftColor: 'inherit',
  color: 'inherit',
  fontSize: '1.1487rem',
  fontStyle: 'italic',
  lineHeight: '1.45rem',
  marginLeft: 0,
  marginRight: 0,
  opacity: 0.8,
  paddingBottom: 0,
  paddingLeft: '0.90625rem',
  paddingRight: 0,
  paddingTop: 0,
}

function BlockQuote({ children, marginTopRhythm=0, marginBottomRhythm=0 }) {
  
  return (
    <div style={{ marginTop: rhythm(marginTopRhythm),  marginBottom: rhythm(marginBottomRhythm) }}>
      <div style={blockQuoteStyle}>{children}</div>
    </div>
  )
}

export default BlockQuote