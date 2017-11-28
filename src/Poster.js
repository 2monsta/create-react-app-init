// the very first thing in most compoents, is to import react
import React, {Component} from 'react';
import Image from './Images';
// I am a presentational compoent
// could of been in app.js but it's cleaner if i'm over here
class Poster extends Component{
	render(){
		return (
			<div className="col-sm-3">
				<Image posterPath = {this.props.poster} id={this.props.movieId} title={this.props.movieTitle}/>
				<p>{this.props.movieTitle}</p>
			</div>
		)
	}
}
export default Poster;