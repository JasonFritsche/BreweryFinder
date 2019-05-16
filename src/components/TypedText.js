import React from 'react'
import PropTypes from 'prop-types'
import Typed from 'react-typed'

const TypedText = ({ strings, className }) => (
  <Typed
    strings={strings}
    typeSpeed={70}
    startDelay={1200}
    backDelay={3000}
    backSpeed={60}
    loop
    loopCount={30}
    showCursor
    className={className}
  />
)

TypedText.propTypes = {
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string.isRequired
}

export default TypedText
