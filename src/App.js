import React, { Component } from "react";
import "./App.css";
import BreweryList from "./components/BreweryList";
import BrewerySearch from "./components/BrewerySearch";

const PAGE_HOME = "home";
const PAGE_RESULTS = "search_results";

class App extends Component {
  state = {
    breweries: [],
    isLoaded: false,
    url: "https://api.openbrewerydb.org/breweries",
    searchTerm: "Boston",
    searchByParam: "city",
    page: PAGE_HOME
  };

  async fetchBreweryData() {
    try {
      this.setState({ isLoaded: false });
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      const cleanData = this.filterResults(jsonData);
      this.setState({
        isLoaded: true,
        breweries: cleanData
      });
    } catch (error) {
      console.log(error);
    }
  }

  filterResults = data => {
    // Exclude breweries that contains "Brewery In Planning"
    return data.filter(
      item =>
        !item.name.toLowerCase().includes("Brewery In Planning".toLowerCase())
    );
  };

  backToSearch = () => {
    this.setState({
      searchByParam: "city",
      page: PAGE_HOME
    });
  };

  // searchTerm is the value from the input/search bar
  handleSearch = searchTerm => {
    const searchByParam = this.state.searchByParam;
    this.setState({
      url: `https://api.openbrewerydb.org/breweries?by_${searchByParam}=${searchTerm}`,
      searchTerm: searchTerm,
      page: PAGE_RESULTS
    });
  };

  searchBy = e => {
    this.setState({
      searchByParam: e
    });
  };

  componentDidUpdate(previousProps, previousState) {
    const searchChanged = this.state.url !== previousState.url;
    if (searchChanged) {
      this.fetchBreweryData();
    }
  }

  componentDidMount() {
    // this.fetchBreweryData();
  }

  whatToDisplay = page => {
    const { breweries, searchTerm, searchByParam } = this.state;
    if (page === PAGE_RESULTS) {
      return (
        <BreweryList
          breweries={breweries}
          backToSearch={this.backToSearch}
          searchTerm={searchTerm}
          searchParam={searchByParam}
        />
      );
    } else {
      return (
        <BrewerySearch
          handleSearch={this.handleSearch}
          searchBy={this.searchBy}
        />
      );
    }
  };

  render() {
    const { isLoaded, page } = this.state;
    if (this.state.page === PAGE_RESULTS && !isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <React.Fragment>{this.whatToDisplay(page)}</React.Fragment>;
    }
  }
}

export default App;
