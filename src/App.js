import React, { Component, Suspense } from 'react'
import './App.css'
import BreweryList from './components/BreweryList'
import BrewerySearch from './components/BrewerySearch'

const PAGE_HOME = 'home'
const PAGE_RESULTS = 'search_results'

class App extends Component {
  state = {
    breweries: [],
    searchTerm: 'Boston',
    searchByParam: 'city',
    page: PAGE_HOME
  }

  backToSearch = () => {
    this.setState({
      searchByParam: 'city',
      page: PAGE_HOME
    })
  }

  async fetchBreweryData(searchTerm, searchByParam) {
    try {
      const url = `https://api.openbrewerydb.org/breweries?by_${searchByParam}=${searchTerm}`
      const data = await fetch(url)
      const jsonData = await data.json()
      const cleanData = this.filterResults(jsonData)
      this.setState({
        breweries: cleanData
      })
    } catch (error) {
      console.log(error)
    }
  }

  // searchTerm is the value from the input/search bar
  handleSearch = searchTerm => {
    this.setState({
      searchTerm,
      page: PAGE_RESULTS
    })
  }

  searchBy = e => {
    this.setState({
      searchByParam: e
    })
  }

  componentDidUpdate(previousProps, previousState) {
    const { searchTerm, searchByParam } = this.state
    const searchChanged = searchTerm !== previousState.searchTerm
    if (searchChanged) {
      this.fetchBreweryData(searchTerm, searchByParam)
    }
  }

  // Exclude breweries that contains "Brewery In Planning"
  filterResults = data =>
    data.filter(
      item =>
        !item.name.toLowerCase().includes('Brewery In Planning'.toLowerCase())
    )

  whatToDisplay = page => {
    const { breweries, searchTerm, searchByParam } = this.state
    if (page === PAGE_RESULTS) {
      return (
        <BreweryList
          breweries={breweries}
          backToSearch={this.backToSearch}
          searchTerm={searchTerm}
          searchParam={searchByParam}
        />
      )
    }
    return (
      <BrewerySearch
        handleSearch={this.handleSearch}
        searchBy={this.searchBy}
      />
    )
  }

  render() {
    const { page } = this.state
    return (
      <Suspense fallback={<div>Loading...</div>}>
        {this.whatToDisplay(page)}
      </Suspense>
    )
  }
}

export default App
