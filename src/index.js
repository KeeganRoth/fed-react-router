import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";
import GiphyPage from "./pages/GiphyPage";
import NavBar from "./components/NavBar";
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={() => <p>Loading...</p>}>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/giphy">
            <GiphyPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
