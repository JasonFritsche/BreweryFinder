import React from 'react'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'
import '../App.css'

const RadioButtonContainer = ({
  val,
  searchBy,
  handleSearchChange,
  identifier,
  tooltip
}) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input radio-button"
        type="radio"
        name="searchByOptions"
        id={identifier}
        value={val}
        onChange={handleSearchChange}
        checked={searchBy === val}
      />
      <label
        className="form-check-label text-capitalize"
        htmlFor={identifier}
        data-tip={tooltip}
      >
        {val}
      </label>
      <ReactTooltip />
    </div>
  )
}

RadioButtonContainer.propTypes = {
  val: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  searchBy: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired
}

export default RadioButtonContainer
