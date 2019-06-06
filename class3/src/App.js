import React from 'react'
import NavBar from './components/NavBar'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'
import Checkout from './pages/Checkout'
import {connect} from 'react-redux'
import './App.css'

class App extends React.Component {
  render() {
    const pageMapper = {
      home: <Home />,
      about: <About />,
      checkout: <Checkout />,
      products: <Products />,
    }
    return (
      <div className="App">
        <NavBar />
        <div style={{padding: 50}}>
          {pageMapper[this.props.activePage] || (
            <h2>PAGE NOT FOUND</h2>
          )}
        </div>
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
