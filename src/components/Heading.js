import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ children }) => (
  <h1 className="Kreon-Text text-center">{children}</h1>
)

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Heading
