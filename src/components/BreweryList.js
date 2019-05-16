import React from 'react'
import PropTypes from 'prop-types'

const BreweryList = ({ children }) => (
  <div className="container my-5">
    <div className="row">{children}</div>
  </div>
)

BreweryList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}

export default BreweryList
