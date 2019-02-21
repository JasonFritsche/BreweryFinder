import React, { Component } from "react";
import "./App.css";
import BreweryList from "./components/BreweryList";
import BrewerySearch from "./components/BrewerySearch";

class App extends Component {
  state = {
    items: [],
    isLoaded: false,
    url: "https://api.openbrewerydb.org/breweries",
    pageIndex: 0
  };

  async fetchBreweryData() {
    try {
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

  async handleSearch(searchTerm) {
    await this.setState({
      url: `https://api.openbrewerydb.org/breweries?by_city=${searchTerm}`,
      pageIndex: 1
    });
    console.log("App " + searchTerm);
    console.log("App state: " + this.state.url);
  }

  backToSearch() {
    this.setState({
      pageIndex: 0
    });
  }

  componentDidUpdate() {
    this.fetchBreweryData();
  }

  componentDidMount() {
    this.fetchBreweryData();
  }

  whatToDisplay = page => {
    if (page === 1) {
      return (
        <BreweryList
          brewery={this.state.items}
          backToSearch={() => this.backToSearch()}
        />
      );
    } else if (page === 0) {
      return <BrewerySearch handleSearch={this.handleSearch.bind(this)} />;
    }
  };

  render() {
    var { isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          {this.whatToDisplay(this.state.pageIndex)}
        </React.Fragment>
      );
    }
  }
}

export default App;
