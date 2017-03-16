import React, { Component } from 'react';
import SearchBar from './search_bar';
import SearchResults from './search_results';

import '../assets/stylesheets/base.scss';

export default class SearchPage extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}
