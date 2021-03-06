import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Products from './pages/Products'
import Footer from './components/Footer'
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
          <div className="wrapper">
            <NavBar />
            <div className="container">
              <div className="content">
                <aside />
                <main>
                  <Switch>
                    <Route exact path="/" component={Products} />
                    <Route path="/shop" component={About} />
                    <Route path="/sale" component={About} />
                    <Route path="/feature" component={About} />
                    <Route path="/blog" component={About} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={About} />
                    <Route path="/products" component={Products} />
                    <Route path="/checkout" component={Checkout} />
                    <Redirect to="/" />
                  </Switch>
                </main>
                </div>
                <Footer />
            </div>
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
