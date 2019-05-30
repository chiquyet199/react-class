import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../../context'
import './index.css'

function NavBar() {
  const context = useContext(AppContext)
  const {shoppingCart} = context.state
  const {navigate} = context.actions
  return (
    <nav>
      <ul>
        <li className="nav-home">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-products">
          <Link to="/products">Products</Link>
        </li>
        <li className="nav-about">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Link to="/checkout">
        <span className="shopping-cart">
          Cart ({shoppingCart.length})
        </span>
      </Link>
    </nav>
  )
}

export default NavBar
