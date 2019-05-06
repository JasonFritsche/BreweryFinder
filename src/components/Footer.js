import React from 'react'
import Anchor from './Anchor'
import githublogo from '../public/github-logo.png'

const Footer = () => (
  <footer className="mx-auto py-3">
    <div className="container text-center footer-content">
      <Anchor
        url="https://github.com/JasonFritsche/BreweryFinder"
        classes="d-block footer-content-item"
      >
        Repo <img src={githublogo} id="logo" alt="github-logo" />
      </Anchor>
      Powered By{' '}
      <Anchor url="https://www.openbrewerydb.org" classes="footer-content-item">
        Open Brewery DB
      </Anchor>
    </div>
  </footer>
)

export default Footer
