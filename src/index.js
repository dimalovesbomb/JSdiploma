import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Unsplash from 'unsplash-js';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './containers/app';
import rootReducer from './reducers';
import authUnsplash from './service/unsplash-auth';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.querySelector('#app')
);
