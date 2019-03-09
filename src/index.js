import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './state/store';
import { storePlugins } from './extend';
import App from './components/App';


function init (id, plugins) {

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

const greed = 'hello implementer';

export default {
  init, greed
}
