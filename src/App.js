import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './Layout';
import Startup from './component/Startup'
import Cowork from './component/CoWork'
import About from './component/About/index';
import Home from './container/Home'
import Articles from './component/Articles'

export class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
            <Switch>
              <Route path="/startup" exact component={Startup} />
              <Route path="/cowork" exact component={Cowork} />
              <Route path="/about" exact component={About} />
              <Route path="/news/:id" exact component={Articles} />
              <Route path="/" exact component={Home} />
              <Home />
            </Switch>
          </Layout>
      </div>
    )
  }
}

export default App
