import React from 'react'
import PropTypes from 'prop-types'
import Typed from 'react-typed'
import Brewery from './Brewery'

const BreweryList = ({ backToSearch, breweries, searchParam, searchTerm }) => {
  const displayResult = () =>
    !breweries.length ? (
      <h1 className="Kreon-Text text-center">
        Sorry, no results found for {searchTerm} within the {searchParam}{' '}
        filter.
      </h1>
    ) : (
      breweries.map(brewery => <Brewery key={brewery.id} brewery={brewery} />)
    )

  return (
    <>
      <div className="mb-3 navbar-wrapper">
        <nav className="navbar container">
          <Typed
            strings={['Time to drink', 'Time to party', 'Time to relax']}
            typeSpeed={70}
            startDelay={1200}
            backDelay={3000}
            backSpeed={60}
            loop
            loopCount={30}
            showCursor
            className="h4 mx-auto Quicksand-Text"
          />
          <form className="form-inline my-2 my-lg-0">
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={backToSearch}
            >
              Back to Search
            </button>
          </form>
        </nav>
      </div>
      <div className="container my-5">
        <div className="row">{displayResult()}</div>
      </div>
    </>
  )
}

BreweryList.propTypes = {
  breweries: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchParam: PropTypes.string.isRequired,
  backToSearch: PropTypes.func.isRequired
}

export default BreweryList
