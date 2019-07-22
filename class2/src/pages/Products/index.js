import React, {useContext} from 'react'
import AppContext from '../../context'
import ProductList from '../../components/ProductList'

function Products() {
  return (
    <AppContext.Consumer>
      {context => (
        <ProductList
          products={context.state.products}
          onClick={context.actions.addProduct}
        />
      )}
    </AppContext.Consumer>
  )
}

function ProductsHook() {
  console.log('render product')
  const context = useContext(AppContext)
  return (
    <ProductList
      products={context.state.products}
      onClick={context.actions.addProduct}
    />
  )
}

class ProductsClass extends React.Component{
  static contextType = AppContext
  render(){
    const context = this.context
    return (
      <ProductList
        products={context.state.products}
        onClick={context.actions.addProduct}
      />
    )
  }
}

export default ProductsHook
