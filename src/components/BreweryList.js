import React, { Component } from "react";
import Brewery from "./Brewery";
import Typed from "react-typed";

export default class BreweryList extends Component {
  onClick() {
    this.props.backToSearch();
  }

  displayResult(brewery) {
    if (!brewery.length) {
      return (
        <h1 className="Kreon-Text text-center">
          We couldn't find anything in that location...
        </h1>
      );
    } else {
      return brewery.map(item => {
        return <Brewery key={item.id} item={item} />;
      });
    }
  }

  render() {
    const { brewery } = this.props;
    return (
      <React.Fragment>
        <div className="pt-5">
          <nav className="navbar fixed-top navbar-dark bg-dark py-2 mb-5">
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
          <div className="row">{this.displayResult(brewery)}</div>
        </div>
      </React.Fragment>
    );
  }
}
