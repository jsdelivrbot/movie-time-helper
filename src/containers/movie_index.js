import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions/index';
import { Link } from 'react-router';

class MovieIndex extends Component {
	generateMovie(id) {
		console.log(id);
		console.log(this.props.getMovie(id));
		this.props.getMovie(id);
	}

	renderPosts(movieData, index) {
		return (
			<tr key={movieData.imdbID + index}>
				<td><img src={movieData.Poster} /></td>
				<td>{movieData.Genre.map((x) => <text>{x}, </text>)}</td>
				<td>{movieData.Plot}</td>
			</tr>
		); 
	}

	render() {
		console.log(this.props.movies.length);
		if(this.props.movies.length == 0){
			return (
				<div>
				<div className="text-xs-right">
			 		<Link to="search" className="btn btn-primary">
			 			Search
			 		</Link>
			 	</div>
				<div>Search a movie and add it!</div>
				</div>
			);
		}
		return (
			<div>
			 <div className="text-xs-right">
			 	<Link to="search/" className="btn btn-primary">
			 		Search
			 	</Link>
			 </div>
			 <h3>Saved Movies</h3>
			 <table className="table table-hover">
				<thead>
					<tr>
						<th>Movie</th>
						<th>Genre</th>
						<th>Plot</th>
					</tr>
				</thead>
				<tbody>
					{this.props.movies.map((movie, index) => this.renderPosts(movie, index) )}	
				</tbody>
			</table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
		movies: state.movies.all
	};
}

export default connect(mapStateToProps, { getMovie })(MovieIndex);