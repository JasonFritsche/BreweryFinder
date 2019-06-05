import React from 'react'
import { render } from 'react-testing-library'

import Heading from './Heading'

describe('Heading', () => {
  it('renders without crashing', () => {
    const { container } = render(<Heading>This is a heading</Heading>)
    const h1 = container.getElementsByTagName('h1')[0]
    expect(h1.textContent).toEqual('This is a heading')
  })
})
