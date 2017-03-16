import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

const Root = React.createClass({
  displayName: 'Root',

  render() {
    const { store, history } = this.props;
    return (
      <div>
        <Provider store={store}>
          <div>
            <Router history={history} routes={routes} />
          </div>
        </Provider>
      </div>
    );
  },

  propTypes: {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }
});

export default Root;
