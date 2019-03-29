import React, { Component } from 'react'
import Typed from 'react-typed'
import RadioButtonContainer from './RadioButtonContainer'
import "./../App.css";

export default class BrewerySearch extends Component {
  state = {
    search: '',
    searchBy: 'city',
    city: [],
    state: [],
    name: [],
    brewery_type: [],
    length: 0,
    count: 0
  }

  updateSearch = event => {
    this.setState({ search: event.target.value })
    document.getElementById("search").innerHTML = "";
    this.suggestion(event.target.value);
  }

  // this function wil filter the result based on users input.
  suggestion = text =>{

      document.getElementById("search").style.display = "block";

      document.getElementById("input").addEventListener("blur",()=>{
        setTimeout(()=>{
          document.getElementById("search").style.display = "none";
        }, 400);
      })

    if(this.state.searchBy === 'city'){
      for(var i = 0; i < this.state.city.length; i++){
        var citySearch = this.state.city[i].toLowerCase(); 
        var textSearch = text.toLowerCase();
          if(citySearch.search(textSearch) !== -1){
            var div = document.createElement("div");
           div.className += 'searchList';
           div.id = this.state.count++;
           div.innerHTML = div.innerHTML + citySearch ;
           document.getElementById("search").appendChild(div);
          }
      }

      for(var i = 0; i < this.state.count; i++){
        document.getElementById(i).addEventListener("click",(e)=>{
          document.getElementById("input").value = document.getElementById(e.target.id).innerHTML;
        })
      }
    }
    if(this.state.searchBy === 'state'){
      for(var i = 0; i < this.state.state.length; i++){
        var stateSearch = this.state.state[i].toLowerCase(); 
        var textSearch = text.toLowerCase();
          if(stateSearch.search(textSearch) !== -1){
            var div = document.createElement("div");
           div.className = "searchList";
           div.id = this.state.count++;
           div.innerHTML = div.innerHTML + stateSearch;
           document.getElementById("search").appendChild(div);
          }
      }
      for(var i = 0; i < this.state.count; i++){
        document.getElementById(i).addEventListener("click",(e)=>{
          document.getElementById("input").value = document.getElementById(e.target.id).innerHTML;
        })
      }
    }
    if(this.state.searchBy === 'name'){
      for(var i = 0; i < this.state.name.length; i++){
        var nameSearch = this.state.name[i].toLowerCase(); 
        var textSearch = text.toLowerCase();
          if(nameSearch.search(textSearch) !== -1){
            var div = document.createElement("div");
           div.className = "searchList";
           div.id = this.state.count++;
           div.innerHTML = div.innerHTML + nameSearch;
           document.getElementById("search").appendChild(div);
          }
      }
      for(var i = 0; i < this.state.count; i++){
        document.getElementById(i).addEventListener("click",(e)=>{
          document.getElementById("input").value = document.getElementById(e.target.id).innerHTML;
        })
      }
    }
    if(this.state.searchBy === 'type'){
      for(var i = 0; i < this.state.brewery_type.length; i++){
        var typeSearch = this.state.brewery_type[i].toLowerCase(); 
        var textSearch = text.toLowerCase();
          if(typeSearch.search(textSearch) !== -1){
           var div = document.createElement("div");
           div.className = "searchList";
           div.id = this.state.count++;
           div.innerHTML = div.innerHTML + typeSearch;
           document.getElementById("search").appendChild(div);
          }
      }
      for(var i = 0; i < this.state.count; i++){
        document.getElementById(i).addEventListener("click",(e)=>{
          document.getElementById("input").value = document.getElementById(e.target.id).innerHTML;
        })
      }
    }
    this.state.count = 0;
  }

  onSearchClick = e => {
    const { search } = this.state
    if (search) {
      this.props.handleSearch(search)
    }
    e.preventDefault()
  }

  onSearchChange = event => {
    this.setState({ searchBy: event.target.value })
    this.props.searchBy(event.target.value)
  }

  render() {

    // adding data to the arrays, which can be shown in the suggestions list.
    if(this.state.length === 0){
    this.state.allBreweries = this.props.allBreweries;

    this.state.allBreweries.map(brewery => {
    this.state.city[this.state.length] = brewery.city;
    this.state.state[this.state.length] = brewery.state;
    this.state.name[this.state.length] = brewery.name;
    this.state.brewery_type[this.state.length] = brewery.brewery_type;
    this.state.length++;
  });

}
    // Data for suggestions added...
    return (
      <React.Fragment>
        <div>
          <div className="row">
            <div className="col">
              <h1 className="Quicksand-Text Glow text-center">
                Brewery Finder
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <Typed
                strings={[
                  'Find a brewery in your hometown',
                  'Find your new hangout',
                  'Find your new favorite beer',
                  'Find the answer to your problems'
                ]}
                typeSpeed={70}
                startDelay={1200}
                backDelay={3000}
                backSpeed={60}
                loop={true}
                loopCount={30}
                showCursor={true}
                className={"typing-text"}
              />
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-09 mx-auto col-md-8 mt-6 text-center">
              <h2 className="text-capitalize">
                search for breweries by {this.state.searchBy}
              </h2>
              <form className="form input-group" onSubmit={this.onSearchClick}>               
                  <input
                  className="form-control"
                  id="input"
                  type="text"
                  placeholder="Search here..."
                  onChange={this.updateSearch}
                />
                <button className="btn btn-primary mx-2">Search</button>
              </form>
               <strong><span id="search"></span></strong>
            </div>
          </div>
          <div className="row">
            <div className="radio-button form-check-inline">
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
            Powered By{' '}
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
    )
  }
}
