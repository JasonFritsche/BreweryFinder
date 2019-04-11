import React from 'react'
import PropTypes from 'prop-types'
import Typed from 'react-typed'
import Brewery from './Brewery'

const BreweryList = (props) => {
  const onClick = () => {
    const { backToSearch } = props
    backToSearch()
  }

  const displayResult = (breweries, searchTerm, searchParam) => {
    if (!breweries.length) {
      return (
        <h1 className="Kreon-Text text-center">
          Sorry, no results found for {searchTerm} within the {searchParam}{' '}
          filter.
        </h1>
      )
    }
    return breweries.map(brewery => {
      return <Brewery key={brewery.id} brewery={brewery} />
    })
  }

  const { breweries, searchTerm, searchParam } = props
  return (
    <React.Fragment>
      <div className="mb-3">
        <nav className="navbar">
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
              onClick={() => onClick()}
            >
              Back to Search
              </button>
          </form>
        </nav>
      </div>

      <div className="container my-5">
        <div className="row">
          {displayResult(breweries, searchTerm, searchParam)}
        </div>
      </div>
    </React.Fragment>
  )
}

BreweryList.propTypes = {
  breweries: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchParam: PropTypes.string.isRequired,
  backToSearch: PropTypes.func.isRequired
}

export default BreweryList;