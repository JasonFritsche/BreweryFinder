import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'

import RadioButtonContainer from './RadioButtonContainer'

const getToolTipMessage = radioBtn =>
  radioBtn !== 'type'
    ? `Search By ${radioBtn}`
    : 'Types: micro, regional, brewpub, large, planning, bar, contract, proprietor'

const RadioButtons = ({ searchFilter, onSearchChange }) => (
  <Row>
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
  </Row>
)

RadioButtons.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired
}

export default RadioButtons
