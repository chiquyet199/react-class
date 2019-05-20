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

  onAddProductClick = product => {
    const state = this.state
    const {products, shoppingCart} = state
    const productById = id => product => product.id === id
    const productToAdd = products.find(productById(product.id))
    const sameProductInCart = shoppingCart.find(
      productById(product.id)
    )
    const newShoppingCart = [...shoppingCart]
    if (sameProductInCart) {
      sameProductInCart.quantity++
    } else {
      productToAdd.quantity = 1
      newShoppingCart.push(productToAdd)
    }
    this.setState({...state, shoppingCart: newShoppingCart})
  }

  changeQuantity = (productId, quantity) => {
    const state = this.state
    const byId = productId => item => item.id === productId
    const newShoppingCart = [...state.shoppingCart]
    const cartItemIdx = newShoppingCart.findIndex(byId(productId))
    newShoppingCart[cartItemIdx] = {
      ...newShoppingCart[cartItemIdx],
      quantity: quantity,
    }
    this.setState({...state, shoppingCart: newShoppingCart})
  }

  onNavClick = activePage => {
    const newState = {...this.state, activePage}
    this.setState(newState)
  }

  checkout = () => {
    const state = this.state
    const {shoppingCart, successShoopingCart} = state
    const newShoppingCart = []
    const newSuccessShoopingCart =
      successShoopingCart.length > 0
        ? [...successShoopingCart, shoppingCart]
        : [shoppingCart]
    const newAppState = {
      ...state,
      shoppingCart: newShoppingCart,
      successShoopingCart: newSuccessShoopingCart,
    }
    this.setState(newAppState)
  }

  onDeleteCartItem = item => {
    const state = this.state
    const {shoppingCart} = state
    const withoutDeletedItem = i => i.id !== item.id
    const newShoppingCart = shoppingCart.filter(withoutDeletedItem)
    this.setState({...state, shoppingCart: newShoppingCart})
  }

  render() {
    const pageMapper = {
      home: <Home />,
      about: <About />,
      checkout: (
        <Checkout
          items={this.state.shoppingCart}
          checkout={this.checkout}
          onDelete={this.onDeleteCartItem}
          changeQuantity={this.changeQuantity}
        />
      ),
      products: (
        <Products
          products={this.state.products}
          onProductClick={this.onAddProductClick}
        />
      ),
    }
    return (
      <div className="App">
        <NavBar
          onClick={this.onNavClick}
          cartLength={this.state.shoppingCart.length}
        />
        <div style={{padding: 50}}>
          {pageMapper[this.state.activePage] || (
            <h2>PAGE NOT FOUND</h2>
          )}
        </div>
      </div>
    )
  }
}

export default App
