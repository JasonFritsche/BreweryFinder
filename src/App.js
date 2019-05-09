import React, { Suspense, useEffect, useRef, useState } from 'react'
import './App.scss'
import BreweryList from './components/BreweryList'
import BrewerySearch from './components/BrewerySearch'

const App = () => {
  const PAGE_HOME = 'home'
  const PAGE_RESULTS = 'search_results'
  const [breweries, setBreweries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchByParam, setSearchByParam] = useState('city')
  const [page, setPage] = useState(PAGE_HOME)

  const usePrevious = value => {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    })
    return ref.current
  }

  const prevSearchTerm = usePrevious(searchTerm)

  const backToSearch = () => {
    setSearchByParam('city')
    setPage(PAGE_HOME)
  }

  const filterResults = data =>
    data.filter(
      item => !item.name.toLowerCase().includes('brewery in planning')
    )

  const handleSearch = term => {
    setSearchTerm(term)
    setPage(PAGE_RESULTS)
  }

  const searchBy = e => {
    setSearchByParam(e)
  }

  useEffect(() => {
    const searchChanged = searchTerm !== prevSearchTerm
    if (searchChanged) {
      ;(async () => {
        const url = `https://api.openbrewerydb.org/breweries?by_${searchByParam}=${searchTerm}`
        const data = await fetch(url)
        const jsonData = await data.json()
        const cleanData = filterResults(jsonData)
        setBreweries(cleanData)
      })()
    }
  }, [prevSearchTerm, searchTerm, searchByParam])

  const displayComponent = () => {
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

    return <BrewerySearch handleSearch={handleSearch} searchBy={searchBy} />
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>{displayComponent()}</Suspense>
  )
}

export default App
