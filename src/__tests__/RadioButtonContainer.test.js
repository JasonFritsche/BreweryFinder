import React from 'react'
import { render } from 'react-testing-library'

import RadioButtonContainer from '../components/RadioButtonContainer'

describe('RadioButtonContainer', () => {
  const props = {
    val: 'city',
    identifier: 'cityRadio',
    searchBy: 'city',
    tooltip: 'Search by city',
    handleSearchChange: jest.fn()
  }

  it('renders the component', () => {
    const { getByLabelText } = render(<RadioButtonContainer {...props} />)
    const inputNode = getByLabelText(props.val)
    expect(inputNode.value).toBe(props.val)
  })
})
