import React, {Component} from 'react'
export default class SearchAlert extends Component{
     render(){ 
        return (
            <div className="alert alert-primary" >
                Search cannot be empty
            </div>
        )
    }
}
