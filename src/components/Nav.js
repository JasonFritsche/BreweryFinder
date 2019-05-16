import React from 'react'
import { Link } from 'react-router-dom'
import TypedText from './TypedText'

const Nav = () => (
  <div className="mb-3 underline">
    <nav className="navbar container">
      <TypedText
        strings={['Time to drink', 'Time to party', 'Time to relax']}
        className="h4 mx-auto header-text header-text--search header-text--left"
      />
      <Link className="my-2 my-lg-0 btn btn-outline-info" to="/">
        &larr;
      </Link>
    </nav>
  </div>
)

Nav.propTypes = {}

export default Nav
