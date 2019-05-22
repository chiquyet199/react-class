
import React from 'react'
import './index.css'

function NavBar(props){
  const {cartLength, onClick} = props
  return (
    <nav>
    <ul>
      <li onClick={() => {onClick('home')}} className="nav-home">Home</li>
      <li onClick={() => {onClick('products')}} className="nav-products">Products</li>
      <li onClick={() => {onClick('about')}} className="nav-about">About</li>
    </ul>
    <span onClick={() => {onClick('checkout')}} className="shopping-cart">Cart ({cartLength})</span>
  </nav>
  )
}

export default NavBar