import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../redux/rootReducer';


const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: 'omdb_stockbit',
  actionsBlacklist: ['REDUX_STORAGE_SAVE'],
})
  || compose;

const store = createStore(rootReducer, composer(applyMiddleware(thunk)));
export { store };
