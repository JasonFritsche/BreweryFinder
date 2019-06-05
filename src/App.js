import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import './App.scss'
import BreweryListContainer from './components/BreweryListContainer'
import BrewerySearch from './components/BrewerySearch'
import Footer from './components/Footer'

const App = () => (
  <>
    <BrowserRouter>
      <Route exact path="/" component={BrewerySearch} />
      <Route path="/results" component={BreweryListContainer} />
    </BrowserRouter>
    <Footer />
  </>
)

export default App
