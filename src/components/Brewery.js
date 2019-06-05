import React from 'react'
import PropTypes from 'prop-types'

import Anchor from './Anchor'

const Brewery = props => {
  const displayWebsiteUrl = websiteUrl => (
    <Anchor className="btn btn-block" url={websiteUrl}>
      Visit
    </Anchor>
  )

  const formatAddressUrl = address => {
    const formattedAddress = address
      .map(location => location.replace(/ /g, '+'))
      .join()

    return `https://www.google.com/maps/place/${formattedAddress}/`
  }

  const displayLocation = address => (
    <Anchor className="btn btn-block" url={formatAddressUrl(address)}>
      Map
    </Anchor>
  )

  const {
    brewery: {
      city,
      name,
      brewery_type: breweryType,
      state,
      street,
      website_url: websiteUrl
    }
  } = props

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
            <div className="col">{displayWebsiteUrl(websiteUrl)}</div>
            <div className="col">{displayLocation([street, city, state])}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Brewery.propTypes = {
  brewery: PropTypes.objectOf(PropTypes.any).isRequired
}

export default Brewery
