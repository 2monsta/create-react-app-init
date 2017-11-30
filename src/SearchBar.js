import React, {Component} from 'react';
import $ from 'jquery'; //fetch from jquery
class SearchBar extends Component{
  constructor(){
    super();
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    this.props.onSubmit(e);
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input id="searchTerm" type="text" placeholder="Movie Title"/>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    )
  }
}

export default SearchBar;