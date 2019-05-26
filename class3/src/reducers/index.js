import {
  ADD_PRODUCT_TO_CART,
  REMOVE_CART_ITEM,
  CHANGE_CART_QUANTITY,
  CHECKOUT,
  NAVIGATE,
} from '../actions'

const initialState = {
  activePage: 'about',
  productDetail: null,
  shoppingCart: [],
  successShoopingCart: [],
  products: [
    {id: 0, name: 'iphone-1', price: 600},
    {id: 1, name: 'iphone-2', price: 1200},
    {id: 2, name: 'iphone-3', price: 1800},
    {id: 3, name: 'iphone-4', price: 2400},
    {id: 4, name: 'iphone-5', price: 3000},
    {id: 5, name: 'iphone-6', price: 3600},
    {id: 6, name: 'iphone-7', price: 4200},
    {id: 7, name: 'iphone-8', price: 4800},
    {id: 8, name: 'iphone-9', price: 5400},
    {id: 9, name: 'iphone-10', price: 6000},
    {id: 10, name: 'samsung-1', price: 700},
    {id: 11, name: 'samsung-2', price: 1400},
    {id: 12, name: 'samsung-3', price: 2100},
    {id: 13, name: 'samsung-4', price: 2800},
    {id: 14, name: 'samsung-5', price: 3500},
    {id: 15, name: 'samsung-6', price: 4200},
    {id: 16, name: 'samsung-7', price: 4900},
    {id: 17, name: 'samsung-8', price: 5600},
    {id: 18, name: 'samsung-9', price: 6300},
    {id: 19, name: 'samsung-10', price: 7000},
    {id: 20, name: 'xiaomi-1', price: 600},
    {id: 21, name: 'xiaomi-2', price: 1200},
    {id: 22, name: 'xiaomi-3', price: 1800},
    {id: 23, name: 'xiaomi-4', price: 2400},
    {id: 24, name: 'xiaomi-5', price: 3000},
    {id: 25, name: 'xiaomi-6', price: 3600},
    {id: 26, name: 'xiaomi-7', price: 4200},
    {id: 27, name: 'xiaomi-8', price: 4800},
    {id: 28, name: 'xiaomi-9', price: 5400},
    {id: 29, name: 'xiaomi-10', price: 6000},
    {id: 30, name: 'huaway-1', price: 600},
    {id: 31, name: 'huaway-2', price: 1200},
    {id: 32, name: 'huaway-3', price: 1800},
    {id: 33, name: 'huaway-4', price: 2400},
    {id: 34, name: 'huaway-5', price: 3000},
    {id: 35, name: 'huaway-6', price: 3600},
    {id: 36, name: 'huaway-7', price: 4200},
    {id: 37, name: 'huaway-8', price: 4800},
    {id: 38, name: 'huaway-9', price: 5400},
    {id: 39, name: 'huaway-10', price: 6000},
    {id: 40, name: 'BKAV-1', price: 400},
    {id: 41, name: 'BKAV-2', price: 800},
    {id: 42, name: 'BKAV-3', price: 1200},
    {id: 43, name: 'BKAV-4', price: 1600},
    {id: 44, name: 'BKAV-5', price: 2000},
    {id: 45, name: 'BKAV-6', price: 2400},
    {id: 46, name: 'BKAV-7', price: 2800},
    {id: 47, name: 'BKAV-8', price: 3200},
    {id: 48, name: 'BKAV-9', price: 3600},
    {id: 49, name: 'BKAV-10', price: 4000},
  ],
}

const generate = () => {
  let id = 0
  let arr = []
  const brand = ['iphone', 'samsung', 'xiaomi', 'huaway', 'BKAV']
  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  brand.forEach(b => {
    x.forEach(i => {
      arr.push({
        id: id++,
        name: b + '-' + i,
        price: i * 100 * b.length,
      })
    })
  })
  return JSON.stringify(arr)
}

const addToCart = (state, product) => {
  const {products, shoppingCart} = state
  const productById = id => product => product.id === id
  const productToAdd = products.find(productById(product.id))
  const sameProductInCart = shoppingCart.find(productById(product.id))
  const newShoppingCart = [...shoppingCart]
  if (sameProductInCart) {
    sameProductInCart.quantity++
  } else {
    productToAdd.quantity = 1
    newShoppingCart.push(productToAdd)
  }
  return {...state, shoppingCart: newShoppingCart}
}

const checkout = state => {
  const {shoppingCart, successShoopingCart} = state
  const newShoppingCart = []
  const newSuccessShoopingCart =
    successShoopingCart.length > 0
      ? [...successShoopingCart, shoppingCart]
      : [shoppingCart]
  const newAppState = {
    ...state,
    shoppingCart: newShoppingCart,
    successShoopingCart: newSuccessShoopingCart,
  }
  return newAppState
}

const changeQuantity = (state, id, newQuantity) => {
  const byId = productId => item => item.id === productId
  const newShoppingCart = [...state.shoppingCart]
  const cartItemIdx = newShoppingCart.findIndex(byId(id))
  newShoppingCart[cartItemIdx] = {
    ...newShoppingCart[cartItemIdx],
    quantity: newQuantity,
  }
  return {...state, shoppingCart: newShoppingCart}
}

export default function appState(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return addToCart(state, action.payload)
    case CHECKOUT:
      return checkout(state)
    case REMOVE_CART_ITEM:
      return state - 1
    case CHANGE_CART_QUANTITY:
      return changeQuantity(
        state,
        action.payload.id,
        action.payload.quantity
      )

    case NAVIGATE:
      return {...state, activePage: action.payload}
    default:
      return state
  }
}
