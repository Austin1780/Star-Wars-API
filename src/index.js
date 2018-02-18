import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

import App from "./components/App";
import "./css/index.css";

import { starWarsAction } from "./actions";

//custom middleware
import logger from "redux-logger";
import thunk from "redux-thunk";

//setting up the store
import { starWars } from "./reducers";

let store = createStore(starWars, applyMiddleware(logger, thunk));

store.dispatch(starWarsAction(1));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
