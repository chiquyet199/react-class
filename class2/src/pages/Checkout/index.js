import React from 'react'
import Button from '../../components/Button'
import CartItemList from '../../components/CartItemList'

function EmptyCartMessage(){
  return <h2>You've buy nothing, go shopping more ^^</h2>
}

function Checkout(props) {
  const {items, onDelete, changeQuantity, checkout} = props
  console.log(items)
  const emptyCart = items.length === 0
  const totalPrice = items.reduce((total, item) => {
    total = total + item.price * item.quantity;
    return total;
  }, 0);
  return <div>
    {emptyCart ? <EmptyCartMessage/> : <CartItemList items={items} onDelete={onDelete} changeQuantity={changeQuantity} />}
    {!emptyCart && <h3>Total: {totalPrice}</h3>}
    {!emptyCart && <Button checkout text="Checkout" onClick={checkout}/>}
  </div>
}

export default Checkout
