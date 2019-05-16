import React from 'react'
import PropTypes from 'prop-types'
import * as Alert from 'react-bootstrap/Alert'

const SearchBar = ({
  searchFilter,
  onSearchClick,
  updateSearch,
  showAlert,
  onCloseAlert
}) => (
  <div className="row">
    <div className="col-09 mx-auto col-md-8 mt-6 text-center">
      <h2 className="text-capitalize">
        search for breweries by {searchFilter}
      </h2>
      <form className="form input-group" onSubmit={onSearchClick}>
        <input
          className="form-control"
          type="text"
          placeholder="Search here..."
          id="search-bar"
          onChange={updateSearch}
        />
        <button type="submit" className="btn mx-2 search-btn">
          Search
        </button>
      </form>
      {showAlert && (
        <Alert variant="danger" dismissible onClose={onCloseAlert}>
          <p>A search value is required.</p>
        </Alert>
      )}
    </div>
  </div>
)

SearchBar.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  showAlert: PropTypes.bool.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onCloseAlert: PropTypes.func.isRequired,
  updateSearch: PropTypes.func.isRequired
}

export default SearchBar
