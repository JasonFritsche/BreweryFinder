import React from 'react';

const RadioButtonContainer = ({val, searchBy, handleSearchChange, identifier }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="searchByOptions"
        id="cityRadio"
        value={val}
        onChange={handleSearchChange}
        checked={searchBy === val}
      />
      <label className="form-check-label text-capitalize" htmlFor="cityRadio">
    {val}
      </label>
    </div>
  );
}

export default RadioButtonContainer;
