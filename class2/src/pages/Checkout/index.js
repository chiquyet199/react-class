import React, {useContext} from 'react'
import AppContext from '../../context'
import Button from '../../components/Button'
import CartItemList from '../../components/CartItemList'

function EmptyCartMessage() {
  return <h2>You've buy nothing, go shopping more ^^</h2>
}

function Checkout() {
  return (
    <AppContext.Consumer>
      {context => {
        const {shoppingCart} = context.state
        const {
          checkout,
          removeCartItem,
          changeCartItemQuantity,
        } = context.actions
        const emptyCart = shoppingCart.length === 0
        const totalPrice = shoppingCart.reduce((total, item) => {
          total = total + item.price * item.quantity
          return total
        }, 0)
        return (
          <div>
            {emptyCart ? (
              <EmptyCartMessage />
            ) : (
              <CartItemList
                items={shoppingCart}
                onDelete={removeCartItem}
                changeQuantity={changeCartItemQuantity}
              />
            )}
            {!emptyCart && <h3>Total: {totalPrice}</h3>}
            {!emptyCart && (
              <Button checkout text="Checkout" onClick={checkout} />
            )}
          </div>
        )
      }}
    </AppContext.Consumer>
  )
}

class CheckoutClass extends React.Component {
  static contextType = AppContext
  render(){
    console.log('render checkout')
    const context = this.context
    const {shoppingCart} = context.state
    const {
      checkout,
      removeCartItem,
      changeCartItemQuantity,
    } = context.actions
    const emptyCart = shoppingCart.length === 0
    const totalPrice = shoppingCart.reduce((total, item) => {
      total = total + item.price * item.quantity
      return total
    }, 0)
    return (
      <div>
        {emptyCart ? (
          <EmptyCartMessage />
        ) : (
          <CartItemList
            items={shoppingCart}
            onDelete={removeCartItem}
            changeQuantity={changeCartItemQuantity}
          />
        )}
        {!emptyCart && <h3>Total: {totalPrice}</h3>}
        {!emptyCart && (
          <Button checkout text="Checkout" onClick={checkout} />
        )}
      </div>
    )
  }
}

function CheckoutHook() {
  const context = useContext(AppContext)
  const {shoppingCart} = context.state
  const {
    checkout,
    removeCartItem,
    changeCartItemQuantity,
  } = context.actions
  const emptyCart = shoppingCart.length === 0
  const totalPrice = shoppingCart.reduce((total, item) => {
    total = total + item.price * item.quantity
    return total
  }, 0)
  return (
    <div>
      {emptyCart ? (
        <EmptyCartMessage />
      ) : (
        <CartItemList
          items={shoppingCart}
          onDelete={removeCartItem}
          changeQuantity={changeCartItemQuantity}
        />
      )}
      {!emptyCart && <h3>Total: {totalPrice}</h3>}
      {!emptyCart && (
        <Button checkout text="Checkout" onClick={checkout} />
      )}
    </div>
  )
}

export default CheckoutClass
