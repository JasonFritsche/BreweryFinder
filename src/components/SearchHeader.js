import React from 'react'
import TypedText from './TypedText'

const SearchHeader = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="header-text text-center">
          <span className="underline">Brew</span>ery Finder
        </h1>
      </div>
    </div>
    <div className="row">
      <div className="col text-center mb-5">
        <TypedText
          strings={[
            'Find a brewery in your hometown',
            'Find your new hangout',
            'Find your new favorite beer',
            'Find the answer to your problems'
          ]}
          className="typing-text"
        />
      </div>
    </div>
  </div>
)

SearchHeader.propTypes = {}

export default SearchHeader
