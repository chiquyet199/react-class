import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import NavBar from './components/NavBar'
import ToggleButton from './components/ToggleButton'
import Rating from './components/Rating'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'
import Checkout from './pages/Checkout'
import {connect} from 'react-redux'
import actions from './actions'
import './App.css'

class App extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 200,
                width: 200,
              }}
            >
              <Rating rate={2} />
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/products" component={Products} />
              <Route path="/checkout" component={Checkout} />
              <Redirect to="/" />
            </Switch>
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

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => {
      dispatch(actions.getProducts())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
