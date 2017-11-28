import React, {Component} from 'react';

class Image extends Component{
	render(){
		var imagePath =  `http://image.tmdb.org/t/p/w300${this.props.posterPath}`;
		var linkPath =`https://themoviedb.org/movie/${this.props.id}-${this.props.title}`;
		return (
			<a href={linkPath}><img src={imagePath}/></a>
		)
	}
}

export default Image