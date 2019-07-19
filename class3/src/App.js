import React from 'react'
import NavBar from './components/NavBar'
import Products from './pages/Products'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import store from './store'
import actions from './actions'
import AppContext from './context'
import './App.css'

class App extends React.Component {
  render() {
    const appContext = {
      state: store.getState(),
      actions
    }
    const pageMapper = {
      home: <Home />,
      checkout: <Checkout />,
      products: <Products />,
    }
    return (
      <AppContext.Provider value={appContext}>
        <div className="App">
          <NavBar />
          <div style={{padding: 50}}>
            {pageMapper[appContext.state.activePage] || (
              <h2>PAGE NOT FOUND</h2>
            )}
          </div>
        </div>
      </AppContext.Provider>
    )
  }
}

export default App
