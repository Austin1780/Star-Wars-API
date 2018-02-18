import React from "react";
import "bootstrap/dist/css/bootstrap.css";

//for the router
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import { Jumbotron } from "reactstrap";

import ScrollToTop from "./ScrollToTop";
import img404 from "../images/404.jpg";

//custom containers
import ListContainer from "../containers/ListContainer";

const NavLinks = () => (
  <div className="NavLinks">
    <NavLink
      activeClassName="active"
      className="btn btn-primary btn-lg"
      exact
      to="/"
    >
      Home
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary btn-lg"
      exact
      to="/films/pages/1"
    >
      Films
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary btn-lg"
      to="/people/pages/1"
    >
      People
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary btn-lg"
      to="/planets/pages/1"
    >
      Planets
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary btn-lg"
      to="/species/pages/1"
    >
      Species
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary btn-lg"
      to="/starships/pages/1"
    >
      Starships
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary btn-lg"
      to="/vehicles/pages/1"
    >
      Vehicles
    </NavLink>
  </div>
);

const App = () => (
  <Router>
    <ScrollToTop>
      <NavLinks />

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Jumbotron className="welcome-panel">
                <h1 className="display-5">Welcome Click BB8 below to begin!</h1>
                <hr className="my-2" />
                <p>
                  This is an app that takes data from SWAPI (the Star Wars API)
                  and displays it using React and reactstrap.
                </p>
              </Jumbotron>
              <iframe
                src="https://brorlandi.github.io/StarWarsIntroCreator/#!/AL21i2y_rQkWr4U735_M"
                width="100%"
                height="800px"
                title="crawl"
              />
            </div>
          )}
        />
        <Route exact path="/films/pages/:page" component={ListContainer} />
        <Route exact path="/people/pages/:page" component={ListContainer} />
        <Route exact path="/planets/pages/:page" component={ListContainer} />
        <Route exact path="/species/pages/:page" component={ListContainer} />
        <Route exact path="/starships/pages/:page" component={ListContainer} />
        <Route exact path="/vehicles/pages/:page" component={ListContainer} />
        <Route render={() => <img src={img404} alt="404 page not found" />} />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default App;
