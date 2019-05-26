import React  from 'react'
import actions from '../../actions'
import {connect} from 'react-redux'
import './index.css'

function NavBar(props) {
  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            props.chuyentrang('home')
          }}
          className="nav-home"
        >
          Home
        </li>
        <li
          onClick={() => {
            props.chuyentrang('products')
          }}
          className="nav-products"
        >
          Products
        </li>
        <li
          onClick={() => {
            props.chuyentrang('about')
          }}
          className="nav-about"
        >
          About
        </li>
      </ul>
      <span
        onClick={() => {
          props.chuyentrang('checkout')
        }}
        className="shopping-cart"
      >
        Cart ({props.shoppingCartLength})
      </span>
    </nav>
  )
}


// Khi muốn xài state
const mapStateToProps = state => {
  return {
    shoppingCartLength: state.shoppingCart.length,
  }
}

// Khi muốn xài actions
const mapDispatchToProps = dispatch => {
  return {
    chuyentrang: page => {
      dispatch(actions.navigate(page))
    },
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
