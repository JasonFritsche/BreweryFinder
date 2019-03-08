import React from "react";
import ReactTooltip from "react-tooltip";
import "./../App.css";

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
        id="cityRadio"
        value={val}
        onChange={handleSearchChange}
        checked={searchBy === val}
      />
      <label
        className="form-check-label text-capitalize"
        htmlFor="cityRadio"
        data-tip={tooltip}
      >
        {val}
      </label>
      <ReactTooltip />
    </div>
  );
};

export default RadioButtonContainer;
