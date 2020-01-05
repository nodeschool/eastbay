import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../../utils/typography'
import finishFlag from './finish-flag.svg'
import hammer from './hammer.svg'

/**
  - iconType values: finish-flag, hammer, none
  - iconType === 'none' will result in component not being displayed (returns null)
  - quoteText: if not specified will be based on iconType value
    - iconType === 'finish-flag' --> 'All done!'
    - iconType === 'hammer' --> 'Problem solved!'
*/

const wrapper = {
  display: 'flex',
  alignItems: 'center',
  marginTop: rhythm(2),
  marginBottom: rhythm(3),
}

const imageStyle = {
  width: 85,
  margin: '0 20px 0 0',
}

function PostFooter({ quoteText, iconType }) {

  if (iconType === 'none') return null

  let finalIconType
  if (!iconType) finalIconType = 'finish-flag'

  let finalQuoteText
  if (!quoteText) {
    finalQuoteText = finalIconType === 'finish-flag' ? 'All done!' : 'Problem solved!'
  } else {
    finalQuoteText = quoteText
  }


  const icon = iconType === 'hammer' ? hammer : finishFlag
  
  return (
    <div style={wrapper}>
      <img src={icon} style={imageStyle} />
      {finalQuoteText}
    </div>
  )
}

export default PostFooter

PostFooter.propTypes = {
  quoteText: PropTypes.string,
  iconType: PropTypes.oneOf(['finish-flag', 'hammer', 'none']),
}
