import React from 'react'
import { render } from 'react-testing-library'

import BreweryList from './BreweryList'

describe('BreweryList', () => {
  it('renders without crashing', () => {
    const backToSearch = jest.fn()
    const { container } = render(
      <BreweryList backToSearch={backToSearch}>
        <div />
      </BreweryList>
    )
    const div = container.getElementsByTagName('div')[0]
    expect(div).not.toBeNull()
  })
})
