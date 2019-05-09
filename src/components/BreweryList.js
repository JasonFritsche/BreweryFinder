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
    <div className="container">
      <div className="mb-3 underline">
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
            className="h4 mx-auto header-text header-text--search header-text--left"
          />
          <button
            type="button"
            className="my-2 my-lg-0 btn btn-outline-info"
            onClick={backToSearch}
          >
            &larr;
          </button>
        </nav>
      </div>
      <div className="container my-5">
        <div className="row">{displayResult()}</div>
      </div>
    </div>
  )
}

BreweryList.propTypes = {
  breweries: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchParam: PropTypes.string.isRequired,
  backToSearch: PropTypes.func.isRequired
}

export default BreweryList
