import React from 'react'
import PropTypes from 'prop-types'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SearchBar = ({
  searchFilter,
  onSearchClick,
  updateSearch,
  showAlert,
  onCloseAlert
}) => (
  <Row>
    <Col md={8} className="mx-auto mt-6 text-center">
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
    </Col>
  </Row>
)

SearchBar.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  showAlert: PropTypes.bool.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onCloseAlert: PropTypes.func.isRequired,
  updateSearch: PropTypes.func.isRequired
}

export default SearchBar
