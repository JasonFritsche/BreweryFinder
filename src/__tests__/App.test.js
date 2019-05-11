import React from 'react'
import { render } from 'react-testing-library'

import App from '../App'

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    const header = container.getElementsByTagName('h1')[0]
    expect(header.textContent).toBe('Brewery Finder')
  })
})
