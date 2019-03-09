import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import creatRootReducer from './reducers';

export default (plugins) => {

  const pluginReducers = plugins
    .reduce((acc, plugin) => ({ ...acc, ...plugin.reducers }) ,{});
  const rootReducer = creatRootReducer(pluginReducers);

  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
