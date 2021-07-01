import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./index.css";
//components
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import Pagination from "./components/ui/Pagination";
import Navbar from "./components/routes/Navbar";

//routes
import Home from "./components/routes/Home";
import Episodes from "./components/routes/Episodes";
import Deaths from "./components/routes/Deaths";
import Quotes from "./components/routes/Quotes";
import Error from "./components/routes/Error";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/episodes">
            <Episodes />{" "}
          </Route>
          <Route exact path="/deaths">
            <Deaths />{" "}
          </Route>
          <Route exact path="/quotes">
            <Quotes />{" "}
          </Route>

          <Route path="*">
            <Error />{" "}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
