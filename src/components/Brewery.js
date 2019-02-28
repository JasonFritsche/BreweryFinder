import React, { Component } from "react";

export default class Brewery extends Component {
  displayWebsiteUrl(website_url) {
    if (website_url) {
      return (
        <a
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          href={website_url}
          onMouseDown={e => e.preventDefault()}
        >
          Check Them Out
        </a>
      );
    }
  }

  render() {
    const { city, name, brewery_type, street, state, website_url } = this.props.item
    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card h-100">
          <div className="card-body flex-column h-100">
            <h5 className="Kreon-Text text-capitalize">
              {name}
            </h5>
            <h6 className="text-capitalize">
              <strong>Type: </strong>
              {brewery_type}
            </h6>
            <h6 className="text-capitalize">{street}</h6>
            <h6 className="text-capitalize">
              {city}, {state}
            </h6>
            {this.displayWebsiteUrl(website_url)}
          </div>
        </div>
      </div>
    );
  }
}
