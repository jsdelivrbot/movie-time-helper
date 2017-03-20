import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMovie, createMovie } from '../actions/index';
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

	onSaveClick() {
		console.log(this.props.movie.imdbID);
		this.props.createMovie(this.props.movie.imdbID);
	}

	render() {
		if(!this.props.movie) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/" className="btn pull-xs-left">Back To Home</Link>
				<Link to="/search" className="btn center">Back To Search</Link>
				<button className="btn btn-primary pull-xs-right"
					onClick={this.onSaveClick.bind(this)}>
					Save Movie
				</button>
				{//<button> 
				//	className="btn btn-danger pull-xs-right"
				//	onClick={this.onDeleteClick.bind(this)}>
				//	Delete Post
				//</button>
				}
				<table className="table table-hover">
						<tbody>
						<tr>
							<td> 
								<img src={this.props.movie.Poster} />
							</td>
							<td>
								<div>Title: {this.props.movie.Title}</div>
								<div>Genre: {this.props.movie.Genre.map((x, index) => <text key={index}> {x}, </text>)}</div>
								<div>Director(s): {this.props.movie.Director.map((x, index) => <text key={index}> {x}, </text>)}</div>	
								<div>IMDB Rating: {this.props.movie.imdbRating}</div>
							</td>
						</tr>
						</tbody>
				</table>
				<table>
					<tbody>
						<tr>
							<td>
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

export default connect(mapStateToProps, { getMovie, createMovie })(MovieDetails);