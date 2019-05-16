import React from 'react'
import { render } from 'react-testing-library'

import Anchor from './Anchor'

describe('Anchor', () => {
  const children = <h2 data-testid="header">https://beer.me</h2>

  const props = {
    testId: 'header',
    url: 'https://beer.me',
    classes: 'class1 class2',
    children
  }

  it('renders the component', () => {
    const { getByTestId } = render(<Anchor {...props} />)
    const header = getByTestId(props.testId)
    expect(header.innerHTML).toBe(props.url)
  })
})
