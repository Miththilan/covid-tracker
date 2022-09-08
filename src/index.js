import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authMiddleware } from "./middleware";
import App from "./App";
import reducers from "./redux/reducers";

let middleware = [authMiddleware, thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
const history = createBrowserHistory({
  basename: `${process.env.REACT_APP_BASE_URL}`,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
