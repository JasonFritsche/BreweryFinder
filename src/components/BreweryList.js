import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const BreweryList = ({ children }) => (
  <Container className="my-5">
    <Row>{children}</Row>
  </Container>
)

BreweryList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}

export default BreweryList
