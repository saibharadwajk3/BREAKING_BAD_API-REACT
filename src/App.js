import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./index.css"
//components
import Header from "./components/ui/Header"
import Navbar from "./components/routes/Navbar"

//routes
import Home from "./components/routes/Home"
import Episodes from "./components/routes/Episodes"
import Deaths from "./components/routes/Deaths"
import Quotes from "./components/routes/Quotes"
import Error from "./components/routes/Error"

function App() {
  const [query, setQuery] = useState("")

  const doSomething = (query) => {
    setQuery(query)
  }

  return (
    <Router>
      <div className="container">
        <Header getQuery={doSomething} />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home SearchQuery={query} />
          </Route>
          <Route exact path="/episodes">
            <Episodes SearchQuery={query} />
          </Route>
          <Route exact path="/deaths">
            <Deaths SearchQuery={query} />
          </Route>
          <Route exact path="/quotes">
            <Quotes SearchQuery={query} />
          </Route>

          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
