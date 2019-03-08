import React, { Component } from "react";
import Brewery from "./Brewery";
import Typed from "react-typed";

export default class BreweryList extends Component {
  onClick() {
    this.props.backToSearch();
  }

  displayResult(breweries, searchTerm, searchParam) {
    if (!breweries.length) {
      return (
        <h1 className="Kreon-Text text-center">
          Sorry, no results found for {searchTerm} within the {searchParam} filter.
        </h1>
      );
    } else {
      return breweries.map(brewery => {
        return <Brewery key={brewery.id} brewery={brewery} />;
      });
    }
  }

  render() {
    const { breweries, searchTerm, searchParam } = this.props;
    return (
      <React.Fragment>
        <div className="pt-5">
          <nav className="navbar">
            <Typed
              strings={["Time to drink", "Time to party", "Time to relax"]}
              typeSpeed={70}
              startDelay={1200}
              backDelay={3000}
              backSpeed={60}
              loop={true}
              loopCount={30}
              showCursor={true}
              className={"h4 mx-auto Quicksand-Text"}
            />
            <form className="form-inline my-2 my-lg-0">
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={() => this.onClick()}
              >
                Back to Search
              </button>
            </form>
          </nav>
        </div>

        <div className="container my-5">
          <div className="row">{this.displayResult(breweries, searchTerm, searchParam)}</div>
        </div>
      </React.Fragment>
    );
  }
}
