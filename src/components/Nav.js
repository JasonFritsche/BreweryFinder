import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import TypedText from './TypedText'

const Nav = () => (
  <div className="mb-3 underline">
    <Container as="nav" className="navbar">
      <TypedText
        strings={['Time to drink', 'Time to party', 'Time to relax']}
        className="h4 mx-auto header-text header-text--search header-text--left"
      />
      <Link className="my-2 my-lg-0 btn btn-outline-info" to="/">
        &larr;
      </Link>
    </Container>
  </div>
)

export default Nav
