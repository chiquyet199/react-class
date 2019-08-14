import React, {useState} from 'react'

import NavBar from './components/NavBar'
import Products from './pages/Products'
import Home from './pages/Home'
import About from './pages/About'
import Checkout from './pages/Checkout'
import AppContext from './context'
import './App.css'

function App() {
  const [state, setState] = useState({
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
  })

  const addProduct = product => {
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
    setState({...state, shoppingCart: newShoppingCart})
  }

  const changeCartItemQuantity = (productId, quantity) => {
    const byId = productId => item => item.id === productId
    const newShoppingCart = [...state.shoppingCart]
    const cartItemIdx = newShoppingCart.findIndex(byId(productId))
    newShoppingCart[cartItemIdx] = {
      ...newShoppingCart[cartItemIdx],
      quantity: quantity,
    }
    setState({...state, shoppingCart: newShoppingCart})
  }

  const navigate = activePage => {
    const newState = {...state, activePage}
    setState(newState)
  }

  const checkout = () => {
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
    setState(newAppState)
  }

  const removeCartItem = item => {
    const {shoppingCart} = state
    const withoutDeletedItem = i => i.id !== item.id
    const newShoppingCart = shoppingCart.filter(withoutDeletedItem)
    setState({...state, shoppingCart: newShoppingCart})
  }

  const context = {
    state: state,
    actions: {
      addProduct: addProduct,
      navigate: navigate,
      checkout: checkout,
      removeCartItem: removeCartItem,
      changeCartItemQuantity: changeCartItemQuantity,
    },
  }

  const pageMapper = {
    home: <Home />,
    about: <About />,
    checkout: <Checkout />,
    products: <Products />,
  }

  return (
    <AppContext.Provider value={context}>
      <div className="App">
        <NavBar />
        <div style={{padding: 50}}>
          {pageMapper[state.activePage] || <h2>PAGE NOT FOUND</h2>}
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
