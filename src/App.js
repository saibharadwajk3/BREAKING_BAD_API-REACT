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
  console.log(1)
  const [characterQuery, setCharacterQuery] = useState("")
  const [episodeQuery, setEpisodeQuery] = useState("")
  const [deathQuery, setDeathQuery] = useState("")
  const [quoteQuery, setQuoteQuery] = useState("")
  //  let newPath='';
  let newPath = ""

  const doSomething = ({ text, path }) => {
    switch (path) {
      case "episodes":
        setEpisodeQuery(text)
        break
      case "deaths":
        setDeathQuery(text)
        break
      case "quotes":
        setQuoteQuery(text)
        break
      default:
        setCharacterQuery(text)
    }
    // setNewPath(path)
    newPath = path
  }

  return (
    <Router>
      <div className="container">
        <Header getQuery={doSomething} />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home
              SearchQuery={characterQuery}
              newPath={newPath}
              setCharacterQuery={setCharacterQuery}
            />
          </Route>
          <Route exact path="/episodes">
            <Episodes
              SearchQuery={episodeQuery}
              newPath={newPath}
              setEpisodeQuery={setEpisodeQuery}
            />
          </Route>
          <Route exact path="/deaths">
            <Deaths
              SearchQuery={deathQuery}
              newPath={newPath}
              setDeathQuery={setDeathQuery}
            />
          </Route>
          <Route exact path="/quotes">
            <Quotes
              SearchQuery={quoteQuery}
              newPath={newPath}
              setQuoteQuery={setQuoteQuery}
            />
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
