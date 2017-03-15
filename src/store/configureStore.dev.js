import { createStore, compose, applyMiddleware } from 'redux';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import promise from 'redux-promise';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(promise, thunk),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
