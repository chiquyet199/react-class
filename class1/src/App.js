import React from 'react'
import NavBar from './components/NavBar'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'
import Checkout from './pages/Checkout'
import './App.css'

class App extends React.Component {
  state = {
    activePage: 'about',
    productDetail: null,
    shoppingCart: [],
    successShoopingCart: [],
    products: [
      {
        id: '1',
        name: 'iPhone6',
        price: 650,
      },
      {
        id: '2',
        name: 'iPhone6 Plus',
        price: 700,
      },
      {
        id: '3',
        name: 'iPhone7',
        price: 750,
      },
      {
        id: '4',
        name: 'iPhone7 Plus',
        price: 800,
      },
    ],
  }

  onProductClick = product => {
    const newShoppingCart = [...this.state.shoppingCart, product]
    const newState = {...this.state, shoppingCart: newShoppingCart}
    this.setState(newState)
  }

  onNavClick = activePage => {
    const newState = {...this.state, activePage}
    this.setState(newState)
  }

  render() {
    const pageMapper = {
      home: <Home />,
      about: <About />,
      checkout: <Checkout />,
      products: (
        <Products
          products={this.state.products}
          onProductClick={this.onProductClick}
        />
      ),
    }
    return (
      <div className="App">
        <NavBar onClick={this.onNavClick} cartLength={this.state.shoppingCart.length} />
        <div style={{padding: 50}}>
          {pageMapper[this.state.activePage] || <h2>PAGE NOT FOUND</h2>}
        </div>
      </div>
    )
  }
}

export default App
