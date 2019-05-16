import React from 'react'
import { render } from 'react-testing-library'

import RadioButtonContainer from './RadioButtonContainer'

describe('RadioButtonContainer', () => {
  const [city, state] = [
    {
      val: 'city',
      identifier: 'cityRadio',
      searchBy: 'city',
      tooltip: 'Search by city',
      handleSearchChange: jest.fn()
    },
    {
      val: 'state',
      identifier: 'stateRadio',
      searchBy: 'state',
      tooltip: 'Search by state',
      handleSearchChange: jest.fn()
    }
  ]

  it('renders the component', () => {
    const { getByLabelText } = render(<RadioButtonContainer {...city} />)
    const inputNode = getByLabelText(city.val)
    expect(inputNode.value).toBe(city.val)
  })

  it('updates checked state on searchBy change', () => {
    const { getByLabelText, rerender } = render(
      <RadioButtonContainer {...state} />
    )
    const inputNode = getByLabelText(state.val)
    expect(inputNode.checked).toBeTruthy()

    // update searchBy value
    state.searchBy = city.searchBy

    rerender(<RadioButtonContainer {...state} />)
    expect(inputNode.checked).toBeFalsy()
  })
})
