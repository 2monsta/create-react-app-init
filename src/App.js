import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'; //fetch from jquery
import Poster from './Poster';


class App extends Component {
	constructor(props){
		// App is a subclass. a subclass of component
		// therefore, we must include a super
		super(props);
		this.state = {
			movies: []
		}
	}

	// before the render function
	componentWillMount(){
		console.log("the component will mount");
	}

	//after the render function, not normal, react cares about me. I will run one time, AFTER the first render
	componentDidMount(){
		console.log("the Component mounted");
		var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
		$.getJSON(url, (movieData)=>{
			console.log(movieData);
			// this.state = Don't ever do this. 
			this.setState({
				movies: movieData.results
			})
		});
	}
	render(){
		var postersArray = [];
		// first time through (when the component mounts), this state.movies will be an empty array
		this.state.movies.map((movie, index)=>{
			console.log(movie.id);
			postersArray.push(<Poster key={index} poster={movie.poster_path} movieTitle={movie.title} movieId={movie.id}/>);
		});
		return(
			<div className="App">
				<h1>This the movie app...again.</h1>
				{postersArray}
			</div>
		);
	}
}

export default App;
