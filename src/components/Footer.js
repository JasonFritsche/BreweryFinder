import React from 'react'
import Anchor from './Anchor'
import githublogo from '../public/github-logo.png'

const Footer = () => (
  <footer className="mx-auto py-3">
    <div className="container text-center">
      <Anchor
        url="https://github.com/JasonFritsche/BreweryFinder"
        classes="d-block"
      >
        Repo <img src={githublogo} id="logo" alt="github-logo" />
      </Anchor>
      Powered By{' '}
      <Anchor url="https://www.openbrewerydb.org">Open Brewery DB</Anchor>
    </div>
  </footer>
)

export default Footer
