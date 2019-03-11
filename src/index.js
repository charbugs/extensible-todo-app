import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './state/store';
import { pluginStore } from './extend';
import App from './components/App';
import * as actions from './state/actions';


function init (id, plugins) {
  console.log('eta: index: plugins:', plugins);
  pluginStore.storePlugins(plugins);
  const store = createStore(plugins || []);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(id),
  );

  return store;
}

export default { init, actions }
