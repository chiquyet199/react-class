import React from 'react'
import {Link} from 'react-router-dom'
import actions from '../../actions'
import {connect} from 'react-redux'
import './index.css'

function NavBar(props) {
  return (
    <nav>
      <ul>
        <li className="nav-home">
          <Link to="/">Home</Link>
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
          Cart ({props.shoppingCartLength})
        </span>
      </Link>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
