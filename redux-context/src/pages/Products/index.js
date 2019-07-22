import React,{useContext} from 'react'
import ctx from '../../context'
import ProductList from '../../components/ProductList'

function Products(props) {
  console.log('render products')
  const {state, actions} = useContext(ctx)
  return (
    <ProductList
      products={state.products}
      onClick={actions.addProduct}
    />
  )
}

export default Products
