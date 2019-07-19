import store from '../store'

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const CHANGE_CART_QUANTITY = 'CHANGE_CART_QUANTITY'
export const NAVIGATE = 'NAVIGATE'
export const CHECKOUT = 'CHECKOUT'

const addProduct = product => {
  store.dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  })
}

const navigate = toPage => {
  store.dispatch({
    type: NAVIGATE,
    payload: toPage,
  })
}

const checkout = () => {
  store.dispatch({type: CHECKOUT})
}

const removeCartItem = id => {
  store.dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  })
}

const changeCartQuantity = (id, newQuantity) => {
  store.dispatch({
    type: CHANGE_CART_QUANTITY,
    payload: {id, quantity: newQuantity},
  })
}

export default {
  addProduct,
  navigate,
  checkout,
  removeCartItem,
  changeCartQuantity,
}
