import React, {useContext} from 'react'
import AppContext from '../../context'
import ProductList from '../../components/ProductList'

function Products() {
  const {state, actions} = useContext(AppContext)
  return (
    <ProductList
      products={state.products}
      onClick={actions.addProduct}
    />
  )
}

export default Products
