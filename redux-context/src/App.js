import React from 'react'
import NavBar from './components/NavBar'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'
import Checkout from './pages/Checkout'
import ctx from './context'
import store from './store'
import './App.css'

class App extends React.Component {
  state = store.getState()
  unsubscribe = store.subscribe(() =>
      this.setState(store.getState())
    )
  render() {
    const pageMapper = {
      home: <Home />,
      about: <About />,
      checkout: <Checkout />,
      products: <Products />,
    }
    return (
      <ctx.Provider value={this.state}>
        <div className="App">
          <NavBar />
          <div style={{padding: 50}}>
            {pageMapper[this.state.activePage] || (
              <h2>PAGE NOT FOUND</h2>
            )}
          </div>
        </div>
      </ctx.Provider>
    )
  }
}

export default App
