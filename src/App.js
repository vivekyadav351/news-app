import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Layout from './Layout';
import Startup from './component/Startup';
import Contact from './component/Contact/index'
import About from './component/About/index';
import Home from './container/Home'
import FullArticlePage from './component/FullArticlePage/index'
import RegistrationForm from './component/Registration/index'

export class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
            <Switch>
              <Route path="/startup-news" exact component={Startup} />
              <Route path="/contact-us" exact component={Contact} />
              <Route path="/about-us" exact component={About} />
              <Route path="/startup-news/:postId" exact component={FullArticlePage} />
              <Route path="/registration" exact component={RegistrationForm} />
              <Route path="/" exact component={Home} />
              <Home />
            </Switch>
          </Layout>
      </div>
    )
  }
}

export default App
