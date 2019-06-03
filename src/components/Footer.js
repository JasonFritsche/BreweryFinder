import React from 'react'
import Anchor from './Anchor'
import githublogo from '../public/github-logo.png'

const Footer = () => (
  <footer className="mx-auto py-3">
    <div className="container text-center footer-content">
      <Anchor
        url="https://github.com/JasonFritsche/BreweryFinder"
        className="footer-content__item"
      >
        Source <img src={githublogo} className="logo" alt="github-logo" />
      </Anchor>
      <Anchor
        url="https://www.openbrewerydb.org"
        className="footer-content__item"
      >
        Api OPDB
      </Anchor>
    </div>
  </footer>
)

export default Footer
