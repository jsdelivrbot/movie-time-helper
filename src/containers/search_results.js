import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { createMovie } from '../actions/index';

class SearchResults extends Component {

	handleClick(data) {
		console.log(data);
		this.props.createMovie(data);
	}

	renderPosts(movieData) {
		return (
			<tr key={movieData.imdbID}>
				<td><img src={movieData.Poster} /></td>
				<td>{movieData.Title}</td>
				<td>{movieData.Year}</td>
			</tr>
		);
	}

	render() {
			if(!this.props.movies) {
				return <div>Search a Movie!</div>;
			}
			return (
				<div>
					<h3>Search Results</h3>
					<table className="table table-hover">
						<thead>
							<tr>
								<th>Movie Poster</th>
								<th>Movie Title</th>
								<th>Year Created</th>
							</tr>
						</thead>
						<tbody>
							{this.props.movies.map(this.renderPosts.bind(this))}
						</tbody>
					</table>
				</div>
			);
		}
	}

function mapStateToProps(state) {
	return {movies: state.movies.search}
}

export default connect(mapStateToProps, { createMovie })(SearchResults);