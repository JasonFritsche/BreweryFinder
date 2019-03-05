import React, { Component } from "react";
import Typed from "react-typed";
import RadioButtonContainer from "./RadioButtonContainer";

export default class BrewerySearch extends Component {
  state = {
    search: "",
    searchBy: "city"
  };

  updateSearch = event => {
    this.setState({ search: event.target.value });
  };

  onSearchClick = () => {
    this.props.handleSearch(this.state.search);
  };

  onSearchChange = event => {
    this.setState({ searchBy: event.target.value });
    this.props.searchBy(event.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron text-center">
          <div className="row">
            <div className="col">
              <h1 className="Quicksand-Text Glow">Brewery Finder</h1>
              <Typed
                strings={[
                  "Find a brewery in your hometown",
                  "Find your new hangout",
                  "Find your new favorite beer",
                  "Find the answer to your problems"
                ]}
                typeSpeed={70}
                startDelay={1200}
                backDelay={3000}
                backSpeed={60}
                loop={true}
                loopCount={30}
                showCursor={true}
                className={"h4"}
              />
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h2 className="text-capitalize">
                search for breweries by {this.state.searchBy}
              </h2>
              <form className="form input-group" onSubmit={this.onSearchClick}>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search here..."
                  onChange={this.updateSearch}
                />
                <button className="btn btn-primary mx-2">Search</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mt-2">
              <RadioButtonContainer
                val="city"
                searchBy={this.state.searchBy}
                handleSearchChange={this.onSearchChange}
                identifier="cityRadio"
                tooltip="Search by city"
              />
              <RadioButtonContainer
                val="state"
                searchBy={this.state.searchBy}
                handleSearchChange={this.onSearchChange}
                identifier="stateRadio"
                tooltip="Search by state"
              />
              <RadioButtonContainer
                val="name"
                searchBy={this.state.searchBy}
                handleSearchChange={this.onSearchChange}
                identifier="nameRadio"
                tooltip="Search by brewery name"
              />
              <RadioButtonContainer
                val="type"
                searchBy={this.state.searchBy}
                handleSearchChange={this.onSearchChange}
                identifier="typeRadio"
                tooltip="Types: micro, regional, brewpub, large, planning, bar, contract, proprietor"
              />

              {/* commenting out the tag radio  button for now, as the API doesn't offer much support for this feature yet. Uncomment and test it yourself to see if more search results appear. If so, feel free to uncomment and commit the code to reintroduce the 'tag' radio button */}
              {/* <RadioButtonContainer
                val="tag"
                searchBy={this.state.searchBy}
                handleSearchChange={this.onSearchChange}
                identifier="tagRadio"
                tooltip="Example: dog-friendly, patio, food-service, food-truck, tours"
              /> */}
            </div>
          </div>
        </div>
        <footer className="mx-auto py-3">
          <div className="container text-center">
            Powered By{" "}
            <span className="text-muted">
              <a
                href="https://www.openbrewerydb.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Brewery DB
              </a>
            </span>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
