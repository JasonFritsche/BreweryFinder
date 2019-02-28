import React, { Component } from "react";
import "./App.css";
import BreweryList from "./components/BreweryList";
import BrewerySearch from "./components/BrewerySearch";

const PAGE_HOME = "home";
const PAGE_RESULTS = "search_results";

class App extends Component {
  state = {
    items: [],
    isLoaded: false,
    url: "https://api.openbrewerydb.org/breweries",
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
        items: cleanData
      });
    } catch (error) {
      console.log(error);
    }
  }

  filterResults = data => {
    // Exclude items that contains "Brewery In Planning"
    return data.filter(
      item =>
        !item.name.toLowerCase().includes("Brewery In Planning".toLowerCase())
    );
  };

  handleSearch = searchTerm => {
    this.setState({
      url: `https://api.openbrewerydb.org/breweries?by_city=${searchTerm}`,
      page: PAGE_RESULTS
    });
  }

  backToSearch = () => {
    this.setState({
      page: PAGE_HOME
    });
  }

  componentDidUpdate(previousProps, previousState) {
    const searchChanged = this.state.url !== previousState.url;
    if (searchChanged) {
      this.fetchBreweryData();
    }
  }

  componentDidMount() {
    this.fetchBreweryData();
  }

  whatToDisplay = page => {
    if (page === PAGE_RESULTS) {
      return (
        <BreweryList
          brewery={this.state.items}
          backToSearch={this.backToSearch}
        />
      );
    } else if (page === PAGE_HOME) {
      return <BrewerySearch handleSearch={this.handleSearch} />;
    }
  };

  render() {
    var { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          {this.whatToDisplay(this.state.page)}
        </React.Fragment>
      );
    }
  }
}

export default App;
