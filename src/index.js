import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './state/store';
import { storePlugins } from './extend';
import App from './components/App';


export default function (id, plugins) {

  storePlugins(plugins);
  const store = createStore(plugins || []);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(id),
  );

  return store;
}
