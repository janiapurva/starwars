import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../rootReducer";

const storeConfig = () => {
  const middlewares = [thunk];
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  const enhancers = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(rootReducer(), enhancers);
  return store;
};

export default storeConfig;
