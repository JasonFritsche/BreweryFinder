import React from 'react'
import PropTypes from 'prop-types'

const Anchor = ({ children, classes, url }) => (
  <a className={classes} href={url} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

Anchor.defaultProps = {
  classes: null
}

Anchor.propTypes = {
  url: PropTypes.string.isRequired,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Anchor
