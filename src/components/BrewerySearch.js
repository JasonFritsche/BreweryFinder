import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typed from 'react-typed'
import * as Alert from 'react-bootstrap/Alert'

import Footer from './Footer'
import img from '../public/cheers.png'
import RadioButtonContainer from './RadioButtonContainer'

export default class BrewerySearch extends Component {
  state = {
    search: '',
    searchFilter: 'city',
    showAlert: false
  }

  updateSearch = e => {
    this.setState({ search: e.target.value })
  }

  onSearchClick = e => {
    const { search } = this.state
    const userInput = search.trim()
    const { handleSearch } = this.props
    if (userInput) {
      handleSearch(userInput)
    } else {
      this.setState({ showAlert: true })
      setTimeout(() => {
        this.setState({ showAlert: false })
      }, 1500)
    }
    e.preventDefault()
  }

  onSearchChange = e => {
    const { searchBy } = this.props
    this.setState({ searchFilter: e.target.value })
    searchBy(e.target.value)
  }

  onCloseAlert = () => {
    this.setState({ showAlert: false })
  }

  displayRadioButtons = () => {
    const { searchFilter } = this.state
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
          handleSearchChange={this.onSearchChange}
          identifier={`${radioBtn}Radio`}
          tooltip={toolTipMessage}
        />
      )
    })
  }

  render() {
    const { searchFilter, showAlert } = this.state
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="Quicksand-Text Glow text-center">
                <img src={img} className="vector-img" alt="beer-vector" />{' '}
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
              <form className="form input-group" onSubmit={this.onSearchClick}>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search here..."
                  id="search-bar"
                  onChange={this.updateSearch}
                />
                <button type="submit" className="btn mx-2 search-btn">
                  Search
                </button>
              </form>
              {showAlert && (
                <Alert variant="danger" dismissible onClose={this.onCloseAlert}>
                  <p>A search value is required.</p>
                </Alert>
              )}
            </div>
          </div>
          <div className="row">
            <div className="radio-button form-check-inline">
              {this.displayRadioButtons()}
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

BrewerySearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchBy: PropTypes.func.isRequired
}
