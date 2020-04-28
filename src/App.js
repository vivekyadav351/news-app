import React, { Component } from 'react'
import { BrowserRouter} from 'react-router-dom'
import './App.css'
import Content from './container/Content/Content'
import Navbar from './component/NavBar/NavBar'
import Location from './container/Location/Location'
//import Articles from './component/Articles/Articles'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Route path="/articles" component={Articles} /> */}
          <Location />
          <Navbar />
          <Content />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
