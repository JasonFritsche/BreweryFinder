import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Brewery extends Component {
  displayWebsiteUrl(websiteUrl) {
    return (
      <a
        className="btn btn-block"
        target="_blank"
        rel="noopener noreferrer"
        href={websiteUrl}
        onMouseDown={e => e.preventDefault()}
      >
        Check Them Out
      </a>
    )
  }

  displayLocation(address) {
    return (
      <a
        className="btn btn-block"
        target="_blank"
        rel="noopener noreferrer"
        href={this.formatAddressUrl(address)}
        onMouseDown={e => e.preventDefault()}
      >
        View Map
      </a>
    )
  }

  formatAddressUrl(address) {
    const formattedAddress = address
      .map(location => location.replace(/ /g, '+'))
      .join()

    return `https://www.google.com/maps/place/${formattedAddress}/`
  }

  render() {
    const {
      brewery: {
        city,
        name,
        brewery_type: breweryType,
        state,
        street,
        website_url: websiteUrl
      }
    } = this.props

    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card h-100">
          <div className="card-body flex-column h-100">
            <h5 className="Kreon-Text text-capitalize">{name}</h5>
            <h6 className="text-capitalize">
              <strong>Type: </strong>
              {breweryType}
            </h6>
            <h6 className="text-capitalize">{street}</h6>
            <h6 className="text-capitalize">
              {city}, {state}
            </h6>
            {this.displayWebsiteUrl(websiteUrl)}
            {this.displayLocation([street, city, state])}
          </div>
        </div>
      </div>
    )
  }
}

Brewery.propTypes = {
  brewery: PropTypes.objectOf(PropTypes.any).isRequired
}
