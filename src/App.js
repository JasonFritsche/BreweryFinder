import React, { Suspense, useEffect, useState } from 'react'
import './App.css'
import BreweryList from './components/BreweryList'
import BrewerySearch from './components/BrewerySearch'

const App = () => {
  const PAGE_HOME = 'home'
  const PAGE_RESULTS = 'search_results'
  const [breweries, setBreweries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Boston');
  const [searchByParam, setSearchByParam] = useState('city');
  const [page, setPage] = useState(PAGE_HOME);

  const backToSearch = () => {
    setSearchByParam('city')
    setPage(PAGE_HOME)
  }

  const filterResults = data =>
  data.filter(
    item =>
      !item.name.toLowerCase().includes('brewery in planning')
  )

  const fetchBreweryData = async () => {
    const url = `https://api.openbrewerydb.org/breweries?by_${searchByParam}=${searchTerm}`
    const data = await fetch(url)
    const jsonData = await data.json()
    const cleanData = filterResults(jsonData)
    setBreweries(cleanData)
  };

  useEffect(() => {
    fetchBreweryData()
  }, [searchTerm, searchByParam])

  // searchTerm is the value from the input/search bar
  const handleSearch = term => {
    setSearchTerm(term)
    setPage(PAGE_RESULTS)
  }

  const searchBy = e => {
    setSearchByParam(e)
  }

  useEffect((prevSearchTerm) => {
    const searchChanged = searchTerm !== prevSearchTerm
    if(searchChanged) {
      fetchBreweryData(searchTerm, searchByParam)
    }
  }, [searchTerm, searchByParam])

  const displayBreweryList = () => {
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
        {displayBreweryList(page)}
      </Suspense>
    )
}

export default App
