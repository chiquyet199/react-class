import React from 'react'
import {Link} from 'react-router-dom'
import actions from '../../actions'
import {connect} from 'react-redux'
import {FaShoppingCart} from 'react-icons/fa'
import { withRouter } from 'react-router-dom';
import './index.css'

function NavBar(props) {
  // eslint-disable-next-line no-restricted-globals
  const activePage = location.pathname.split('/')[1]
  return (
    <nav>
      <div className="logo">
        <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" />
      </div>
      <div className="menuContainer">
      <ul className="menulist">
        <li className={activePage === '' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={activePage === 'shop' ? 'active' : ''}>
          <Link to="/shop">Shop</Link>
        </li>
        <li className={activePage === 'sale' ? 'active' : ''}>
          <Link to="/sale">Sale</Link>
        </li>
        <li className={activePage === 'feature' ? 'active' : ''}>
          <Link to="/feature">Feature</Link>
        </li>
        <li className={activePage === 'blog' ? 'active' : ''}>
          <Link to="/blog">Blog</Link>
        </li>
        <li className={activePage === 'about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
        <li className={activePage === 'contact' ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="moreinfo">
        <Link to="/checkout">
          <FaShoppingCart />
          <span className="shopping-cart">
            {props.shoppingCartLength}
          </span>
        </Link>
        <span className="separator">|</span>
        <Link to="/login">Login</Link>
      </div>
      </div>
    </nav>
  )
}

// Khi muốn xài state
const mapStateToProps = state => {
  return {
    shoppingCartLength: state.shoppingCart.length,
    activePage: state.activePage,
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar))
