import React, { Component } from 'react';
import Search from './search';
import SearchResults from './search_results';

import '../assets/stylesheets/base.scss';

export default class SearchPage extends Component {

  render() {
    return (
      <div>
        <Search />
        <SearchResults />
      </div>
    );
  }
}
