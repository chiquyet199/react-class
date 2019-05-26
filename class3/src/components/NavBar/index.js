import React, {useContext} from 'react'
import AppContext from '../../context'
import './index.css'

function NavBar() {
  const context = useContext(AppContext)
  const {shoppingCart} = context.state
  const {navigate} = context.actions
  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            navigate('home')
          }}
          className="nav-home"
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate('products')
          }}
          className="nav-products"
        >
          Products
        </li>
        <li
          onClick={() => {
            navigate('about')
          }}
          className="nav-about"
        >
          About
        </li>
      </ul>
      <span
        onClick={() => {
          navigate('checkout')
        }}
        className="shopping-cart"
      >
        Cart ({shoppingCart.length})
      </span>
    </nav>
  )
}

export default NavBar
