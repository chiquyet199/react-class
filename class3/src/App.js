import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'
import Checkout from './pages/Checkout'
import {connect} from 'react-redux'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/checkout" component={Checkout} />
          </div>
        </Router>
      </div>
    )
  }
}

// Khi muốn xài state
const mapStateToProps = state => {
  return {
    activePage: state.activePage,
  }
}

export default connect(mapStateToProps)(App)
