import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typed from 'react-typed'
import * as Alert from 'react-bootstrap/Alert'
import RadioButtonContainer from './RadioButtonContainer'
const img = require('../public/cheers.png')
const githublogo = require('../public/github-logo.png')

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

  render() {
    const { searchFilter, showAlert } = this.state
    return (
      <React.Fragment>
        <div>
          <div className="row">
            <div className="col">
              <h1 className="Quicksand-Text Glow text-center">
                <img src={img} id="vector-img" />{' '}
                <span id="underline">Brew</span>ery Finder
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
              <h2 className="text-capitalize" id="sub-text">
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
                <button type="submit" className="btn btn-primary mx-2">
                  Search
                </button>
              </form>
              {showAlert && (
                <Alert variant="danger" dismissible onClose={this.onCloseAlert}>
                  <p>A search value is required.</p>
                </Alert>
              )}
            </div>
            {/* <div className="col-md-4">
              <img id="beer-vector" src={img} />
            </div> */}
          </div>
          <div className="row">
            <div className="radio-button form-check-inline">
              <RadioButtonContainer
                val="city"
                searchBy={searchFilter}
                handleSearchChange={this.onSearchChange}
                identifier="cityRadio"
                tooltip="Search by city"
              />
              <RadioButtonContainer
                val="state"
                searchBy={searchFilter}
                handleSearchChange={this.onSearchChange}
                identifier="stateRadio"
                tooltip="Search by state"
              />
              <RadioButtonContainer
                val="name"
                searchBy={searchFilter}
                handleSearchChange={this.onSearchChange}
                identifier="nameRadio"
                tooltip="Search by brewery name"
              />
              <RadioButtonContainer
                val="type"
                searchBy={searchFilter}
                handleSearchChange={this.onSearchChange}
                identifier="typeRadio"
                tooltip="Types: micro, regional, brewpub, large, planning, bar, contract, proprietor"
              />

              {/* commenting out the tag radio  button for now, as the API doesn't offer much support for this feature yet. Uncomment and test it yourself to see if more search results appear. If so, feel free to uncomment and commit the code to reintroduce the 'tag' radio button */}
              {/* <RadioButtonContainer
                val="tag"
                searchBy={this.state.searchBy}
                handleSearchChange={this.onSearchChange}
                identifier="tagRadio"
                tooltip="Example: dog-friendly, patio, food-service, food-truck, tours"
              /> */}
            </div>
          </div>
        </div>
        <footer className="mx-auto py-3">
          <div className="container text-center">
            <a
              href="https://github.com/JasonFritsche/BreweryFinder"
              className="d-block"
              target="_blank"
            >
              Contribute <img src={githublogo} id="logo" />
            </a>
            Powered By{' '}
            <span className="text-muted">
              <a
                href="https://www.openbrewerydb.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Brewery DB
              </a>
            </span>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

BrewerySearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchBy: PropTypes.func.isRequired
}
