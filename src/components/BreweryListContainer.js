import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import Container from 'react-bootstrap/Container'

import BreweryList from './BreweryList'
import Heading from './Heading'
import Brewery from './Brewery'
import Nav from './Nav'

const filterResults = data =>
  data.filter(item => !item.name.toLowerCase().includes('brewery in planning'))

const fetchData = async (searchParam, searchTerm) => {
  try {
    const data = await fetch(
      `https://api.openbrewerydb.org/breweries?by_${searchParam}=${searchTerm}`
    )
    return filterResults(await data.json())
  } catch (e) {
    return []
  }
}

const getContent = ({ searchTerm, searchParam, breweries, showLoading }) => {
  if (showLoading) {
    return <Heading>Loading...</Heading>
  }
  if (!breweries.length) {
    return (
      <Heading>
        Sorry, no results found for {searchTerm} within the {searchParam}{' '}
        filter.
      </Heading>
    )
  }
  return breweries.map(brewery => (
    <Brewery key={brewery.id} brewery={brewery} />
  ))
}

const BreweryListContainer = ({ location, history }) => {
  const [breweries, setBreweries] = useState([])
  const [showLoading, setShowLoading] = useState(true)
  const search = queryString.parse(location.search)
  const { searchTerm, searchParam = 'city' } = search

  useEffect(() => {
    if (!searchTerm) {
      history.push('/')
    } else {
      fetchData(searchParam, searchTerm)
        .then(setBreweries)
        .then(() => setShowLoading(false))
    }
  }, [searchParam, searchTerm, history])

  return (
    <Container>
      <Nav />
      <BreweryList>
        {getContent({ searchTerm, searchParam, breweries, showLoading })}
      </BreweryList>
    </Container>
  )
}

BreweryListContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired
}

export default withRouter(BreweryListContainer)
