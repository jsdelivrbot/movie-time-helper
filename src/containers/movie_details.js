import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions/index';
import { Link } from 'react-router';

class MovieDetails extends Component {
	componentWillMount() {
		this.props.getMovie(this.props.params.id);
	}

	//onDeleteClick() {
	//	this.props.deletePost(this.props.params.id)
	//		.then(() => {
	//			this.context.router.push('/');
	//		});
	//}

	render() {
		if(!this.props.movie) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/">Back To Home</Link>
				{//<button 
				//	className="btn btn-danger pull-xs-right"
				//	onClick={this.onDeleteClick.bind(this)}>
				//	Delete Post
				//</button>
				}
				<table className="table table-hover">
						<tbody>
						<tr>
							<td key={this.props.movie.imdbID}> 
							<ul className="list-group">
							{console.log(this.props.movie.Director)}
									<li key={this.props.movie.Title}>Title: {this.props.movie.Title} </li>
									<li key={this.props.movie.Director}>Director(s): {this.props.movie.Director.map((x) => <text>{x}, </text>)} </li>
									
									<li key={this.props.movie.Genre}>Genre: {this.props.movie.Genre.map((x) => <text>{x}, </text>)} </li>
								
									<li key={this.props.movie.imdbRating}>IMDB Rating: {this.props.movie.imdbRating} </li>
								</ul>
								<img src={this.props.movie.Poster} />
								<h1>Plot: </h1>
									<p>
									{this.props.movie.Plot}
									</p>
							</td>
						</tr>
						</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { movie: state.movies.movie };
}

export default connect(mapStateToProps, { getMovie })(MovieDetails);