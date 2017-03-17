import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/index';
import { Link } from 'react-router';

class MovieIndex extends Component {
	componentWillMount() {
		this.props.fetchMovies();
	}  

	renderPosts(movieData) {
		return (
			<tr key={movieData.imdbID}>
				<td><img src={movieData.Poster} /></td>
				<td>{movieData.Genre}</td>
				<td>{movieData.Plot}</td>
			</tr>
		);
	}

	render() {
		if(!!!this.props.movies.length){
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
					{this.props.movies.map(this.renderPosts)}
				</tbody>
			</table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { movies: state.movies.all };
}

export default connect(mapStateToProps, { fetchMovies })(MovieIndex);