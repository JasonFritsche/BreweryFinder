import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TypedText from './TypedText'

const SearchHeader = () => (
  <Container>
    <Row>
      <Col>
        <h1 className="header-text text-center">
          <span className="underline">Brew</span>ery Finder
        </h1>
      </Col>
    </Row>
    <Row>
      <Col className="text-center mb-5">
        <TypedText
          strings={[
            'Find a brewery in your hometown',
            'Find your new hangout',
            'Find your new favorite beer',
            'Find the answer to your problems'
          ]}
          className="typing-text"
        />
      </Col>
    </Row>
  </Container>
)

SearchHeader.propTypes = {}

export default SearchHeader
