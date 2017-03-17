import React, { Component } from 'react';
import SearchBar from './search_bar';
import SearchResults from './search_results';
import { Link } from 'react-router'

import '../assets/stylesheets/base.scss';

export default class SearchPage extends Component {

  render() {
    return (
      <div>
      	<Link to="/">
      		Back To Home
      	</Link>
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}
