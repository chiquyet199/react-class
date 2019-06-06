import {
  ADD_PRODUCT_TO_CART,
  REMOVE_CART_ITEM,
  CHANGE_CART_QUANTITY,
  CHECKOUT,
  NAVIGATE,
  SETPRODUCTS
} from '../actions'

const initialState = {
  activePage: 'about',
  productDetail: null,
  shoppingCart: [],
  successShoopingCart: [],
  products: [
    
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
    case SETPRODUCTS:
      return {...state, products: action.payload}
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
