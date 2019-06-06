import React from 'react'
import {connect} from 'react-redux'
import actions from '../../actions'
import ProductList from '../../components/ProductList'

function Products(props) {
  
  console.log('path',props.match.path)
  console.log('url',props.match.url)
  return (
    <ProductList
      products={props.products}
      onClick={props.addProduct}
    />
  )
}

const mapStateToProps = state => {
  return {
    products: state.products,
  }
}

// Khi muốn xài actions
const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => {
      dispatch(actions.addProduct(product))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
