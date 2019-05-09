import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Typed from 'react-typed'
import * as Alert from 'react-bootstrap/Alert'

import Footer from './Footer'
// import img from '../public/cheers.png'
import RadioButtonContainer from './RadioButtonContainer'

const BrewerySearch = ({ handleSearch, searchBy }) => {
  const [search, setSearch] = useState('')
  const [searchFilter, setSearchFilter] = useState('city')
  const [showAlert, setShowAlert] = useState(false)

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const onSearchClick = e => {
    const userInput = search.trim()
    if (userInput) {
      handleSearch(userInput)
    } else {
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 1500)
    }
    e.preventDefault()
  }

  const onSearchChange = e => {
    setSearchFilter(e.target.value)
    searchBy(e.target.value)
  }

  const onCloseAlert = () => {
    setShowAlert(false)
  }

  const displayRadioButtons = () => {
    return ['city', 'state', 'name', 'type'].map(radioBtn => {
      const toolTipMessage =
        radioBtn !== 'type'
          ? `Search By ${radioBtn}`
          : 'Types: micro, regional, brewpub, large, planning, bar, contract, proprietor'

      return (
        <RadioButtonContainer
          key={radioBtn}
          val={radioBtn}
          searchBy={searchFilter}
          handleSearchChange={onSearchChange}
          identifier={`${radioBtn}Radio`}
          tooltip={toolTipMessage}
        />
      )
    })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <img src={img} className="vector-img" alt="beer-vector" /> */}
            <h1 className="header-text text-center">
              <span className="underline">Brew</span>ery Finder
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center mb-5">
            <Typed
              strings={[
                'Find a brewery in your hometown',
                'Find your new hangout',
                'Find your new favorite beer',
                'Find the answer to your problems'
              ]}
              typeSpeed={70}
              startDelay={1200}
              backDelay={3000}
              backSpeed={60}
              loop
              loopCount={30}
              showCursor
              className="typing-text"
            />
          </div>
        </div>
      </div>
      <div className="container mb-5">
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
        <div className="row">
          <div className="radio-button form-check-inline">
            {displayRadioButtons()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

BrewerySearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchBy: PropTypes.func.isRequired
}

export default BrewerySearch
