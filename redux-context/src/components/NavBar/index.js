import React, {useContext} from 'react'
import actions from '../../actions'
import ctx from '../../context'

import './index.css'

function NavBar(props) {
  const state = useContext(ctx)
  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            actions.navigate('home')
          }}
          className="nav-home"
        >
          Home
        </li>
        <li
          onClick={() => {
            actions.navigate('products')
          }}
          className="nav-products"
        >
          Products
        </li>
        <li
          onClick={() => {
            actions.navigate('about')
          }}
          className="nav-about"
        >
          About
        </li>
      </ul>
      <span
        onClick={() => {
          actions.navigate('checkout')
        }}
        className="shopping-cart"
      >
        Cart ({state.shoppingCart.length})
      </span>
    </nav>
  )
}

export default NavBar
