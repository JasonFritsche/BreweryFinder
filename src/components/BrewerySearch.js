import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import Container from 'react-bootstrap/Container'

import RadioButtons from './RadioButtons'
import SearchBar from './SearchBar'
import SearchHeader from './SearchHeader'

const BrewerySearch = ({ history }) => {
  const [search, setSearch] = useState('')
  const [searchFilter, setSearchFilter] = useState('city')
  const [showAlert, setShowAlert] = useState(false)

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const onSearchClick = e => {
    e.preventDefault()
    const userInput = search.trim()
    if (userInput) {
      const params = {
        searchParam: searchFilter,
        searchTerm: userInput
      }
      history.push(`/results?${queryString.stringify(params)}`)
    } else {
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 1500)
    }
  }

  const onSearchChange = e => {
    setSearchFilter(e.target.value)
  }

  return (
    <>
      <SearchHeader />
      <Container className="mb-5">
        <SearchBar
          searchFilter={searchFilter}
          showAlert={showAlert}
          onCloseAlert={() => setShowAlert(false)}
          onSearchClick={onSearchClick}
          updateSearch={updateSearch}
        />
        <RadioButtons
          searchFilter={searchFilter}
          onSearchChange={onSearchChange}
        />
      </Container>
    </>
  )
}

BrewerySearch.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default withRouter(BrewerySearch)
