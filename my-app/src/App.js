import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./pages/Home"
import QuestionOne from "./pages/QuestionOne"


function App() {
  return (
    <Switch>
      <div>

        <Route exact path='/' component={Home} />
        <Route path='/question-1' component={QuestionOne} />

       
      </div>
    </Switch>
  )
}

export default App