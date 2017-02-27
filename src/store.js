import { createStore } from 'redux';
import rootReducer from './redux/reducers';

export default(initialState) => {
	const store = createStore(
		rootReducer,
		initialState,
		/* for chrome dev tools*/
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	if (module.hot) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./redux/reducers', () => {
	      const nextRootReducer = require('./redux/reducers').default;
	      store.replaceReducer(nextRootReducer);
	    });
	  }

	return store;
}; 