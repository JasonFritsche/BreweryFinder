import React from 'react'
import PropTypes from 'prop-types'

import RadioButtonContainer from './RadioButtonContainer'

const getToolTipMessage = radioBtn =>
  radioBtn !== 'type'
    ? `Search By ${radioBtn}`
    : 'Types: micro, regional, brewpub, large, planning, bar, contract, proprietor'

const RadioButtons = ({ searchFilter, onSearchChange }) => (
  <div className="row">
    <div className="radio-button form-check-inline">
      {['city', 'state', 'name', 'type'].map(radioBtn => (
        <RadioButtonContainer
          key={radioBtn}
          val={radioBtn}
          searchBy={searchFilter}
          handleSearchChange={onSearchChange}
          identifier={`${radioBtn}Radio`}
          tooltip={getToolTipMessage(radioBtn)}
        />
      ))}
    </div>
  </div>
)

RadioButtons.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
}

export default RadioButtons
