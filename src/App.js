import React, { Component, Suspense } from 'react'
import './App.css'
import BreweryList from './components/BreweryList'
import BrewerySearch from './components/BrewerySearch'

const PAGE_HOME = 'home'
const PAGE_RESULTS = 'search_results'

class App extends Component {

  constructor(){
    super();
    this.fetchAllBreweryData();
  }

  state = {
    allBreweries:[],
    breweries: [],
    searchTerm: 'Boston',
    searchByParam: 'city',
    page: PAGE_HOME
  }

  async fetchAllBreweryData(){
    try {
      const allURL = `https://api.openbrewerydb.org/breweries`
      const allData = await fetch(allURL)
      const jsonallData = await allData.json()
      const cleanAllData = this.filterResults(jsonallData)
      this.setState({
        allBreweries: cleanAllData
      })
  }catch (error) {
    console.log(error)
  }
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

  // Exclude breweries that contains "Brewery In Planning"
  filterResults = data =>
    data.filter(
      item =>
        !item.name.toLowerCase().includes('Brewery In Planning'.toLowerCase())
    )

  backToSearch = () => {
    this.setState({
      searchByParam: 'city',
      page: PAGE_HOME
    })
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

  whatToDisplay = page => {
    const { allBreweries, breweries, searchTerm, searchByParam } = this.state
    if (page === PAGE_RESULTS) {
      return (
        <BreweryList
          breweries={breweries}
          backToSearch={this.backToSearch}
          searchTerm={searchTerm}
          searchParam={searchByParam}
        />
      )
    } else {
      return (
        <BrewerySearch
          allBreweries={allBreweries}
          handleSearch={this.handleSearch}
          searchBy={this.searchBy}
        />
      )
    }
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
