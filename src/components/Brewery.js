import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Anchor from './Anchor'

export default class Brewery extends Component {
  displayWebsiteUrl(websiteUrl) {
    return (
      <Anchor classes="btn btn-block" url={websiteUrl}>
        Visit
      </Anchor>
    )
  }

  displayLocation(address) {
    return (
      <Anchor classes="btn btn-block" url={this.formatAddressUrl(address)}>
        Map
      </Anchor>
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
      <div className="col-12 mx-auto col-md-6 col-lg-4 my-3">
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
            <div className="row">
              <div className="col">{this.displayWebsiteUrl(websiteUrl)}</div>
              <div className="col">
                {this.displayLocation([street, city, state])}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Brewery.propTypes = {
  brewery: PropTypes.objectOf(PropTypes.any).isRequired
}
