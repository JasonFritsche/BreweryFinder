import React, { Component } from "react";

export default class Brewery extends Component {

  displayWebsiteUrl = () => {
    if(this.props.item.website_url === "") {
      return;
    } else {
      return(
        <a
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          href={this.props.item.website_url}
        >
          Check Them Out
        </a>
      )
    }
  }

  render() {
    console.log(this.props)
    return (
      
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card h-100">
            <div className="card-body flex-column h-100">
              <h5 className="Kreon-Text text-capitalize">
                {this.props.item.name}
              </h5>
              <h6 className="text-capitalize">
                <strong>Type: </strong>
                {this.props.item.brewery_type}
              </h6>
              <h6 className="text-capitalize">{this.props.item.street}</h6>
              <h6 className="text-capitalize">
                {this.props.item.city}, {this.props.item.state}
              </h6>
              {this.displayWebsiteUrl()}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
