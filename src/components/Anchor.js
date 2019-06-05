import React from 'react'
import PropTypes from 'prop-types'

const Anchor = ({ children, url, className }) => (
  <a className={className} href={url} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
)

Anchor.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Anchor
