import React, { Suspense, useEffect, useState } from 'react'
import './App.css'
import BreweryList from './components/BreweryList'
import BrewerySearch from './components/BrewerySearch'

const PAGE_HOME = 'home'
const PAGE_RESULTS = 'search_results'

const App = () => {
  const [breweries, setBreweries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Boston');
  const [searchByParam, setSearchByParam] = useState('city');
  const [page, setPage] = useState(PAGE_HOME);

  const backToSearch = () => {
    setSearchByParam('city')
    setPage(PAGE_HOME)
  }

  useEffect(() => {
    async function fetchBreweryData() {
      const url = `https://api.openbrewerydb.org/breweries?by_${searchByParam}=${searchTerm}`
      const data = await fetch(url)
      const jsonData = await data.json()
      const cleanData = filterResults(jsonData)
      setBreweries(cleanData)
    }
    fetchBreweryData()
  })

  // searchTerm is the value from the input/search bar
  const handleSearch = searchTerm => {
    setSearchTerm(searchTerm)
    setPage(PAGE_RESULTS)
  }

  const searchBy = e => {
    setSearchByParam(e)
  }

  // useEffect((previousProps, previousState) => {
  //   const searchChanged = searchTerm !== previousState.searchTerm
  //   if(searchChanged) {
  //     this.fetchBreweryData(searchTerm, searchByParam)
  //   }
  // })


//-------Original componentDidUpdate is below, unsuccessful attempt at hooks equivalent is above

  // componentDidUpdate(previousProps, previousState) {
  //   const { searchTerm, searchByParam } = this.state
  //   const searchChanged = searchTerm !== previousState.searchTerm
  //   if (searchChanged) {
  //     this.fetchBreweryData(searchTerm, searchByParam)
  //   }
  // }

  // Exclude breweries that contains "Brewery In Planning"
  const filterResults = data =>
    data.filter(
      item =>
        !item.name.toLowerCase().includes('brewery in planning')
    )

  const whatToDisplay = page => {
    if (page === PAGE_RESULTS) {
      return (
        <BreweryList
          breweries={breweries}
          backToSearch={backToSearch}
          searchTerm={searchTerm}
          searchParam={searchByParam}
        />
      )
    }
    return (
      <BrewerySearch
        handleSearch={handleSearch}
        searchBy={searchBy}
      />
    )
  }
    return (
      <Suspense fallback={<div>Loading...</div>}>
        {whatToDisplay(page)}
      </Suspense>
    )
}

export default App
