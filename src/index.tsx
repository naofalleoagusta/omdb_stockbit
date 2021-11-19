import { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { router } from "./configs/Router";
import { Provider } from "react-redux";
import { store } from "./configs/redux-store";

ReactDOM.render(
  <Provider store={store}>
    <Navbar />
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Switch>
          {router.map((route) => {
            console.log(route);
            return (
              <Route
                key={route.key}
                component={route.element}
                path={route.path}
                exact={route.exact}
              />
            );
          })}
        </Switch>
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
