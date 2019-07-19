import store from '../store'
import Api from './api'

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const CHANGE_CART_QUANTITY = 'CHANGE_CART_QUANTITY'
export const NAVIGATE = 'NAVIGATE'
export const CHECKOUT = 'CHECKOUT'
export const API_ERROR = 'API_ERROR'

const addProduct = async product => {
  try{
    const product = await Api.post()
    store.dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: product,
    })
  }catch(e){
    store.dispatch({
      type: API_ERROR,
      payload: e,
    })
  }
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

export default {
  addProduct,
  navigate,
  checkout,
}
