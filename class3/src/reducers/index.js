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
    {
      id: '1',
      name: 'iPhone6',
      price: 650,
    },
    {
      id: '2',
      name: 'iPhone6 Plus',
      price: 700,
    },
    {
      id: '3',
      name: 'iPhone7',
      price: 750,
    },
    {
      id: '4',
      name: 'iPhone7 Plus',
      price: 800,
    },
  ],
}

export default function appState(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const product = action.payload
      const {products, shoppingCart} = state
      const productById = id => product => product.id === id
      const productToAdd = products.find(productById(product.id))
      const sameProductInCart = shoppingCart.find(
        productById(product.id)
      )
      const newShoppingCart = [...shoppingCart]
      if (sameProductInCart) {
        sameProductInCart.quantity++
      } else {
        productToAdd.quantity = 1
        newShoppingCart.push(productToAdd)
      }
      return {...state, shoppingCart: newShoppingCart}
    case CHECKOUT:
      const {shoppingCart1, successShoopingCart} = state
      const newShoppingCart2 = []
      const newSuccessShoopingCart =
        successShoopingCart.length > 0
          ? [...successShoopingCart, shoppingCart]
          : [shoppingCart1]
      const newAppState = {
        ...state,
        shoppingCart: newShoppingCart2,
        successShoopingCart: newSuccessShoopingCart,
      }
      return newAppState
    case REMOVE_CART_ITEM:
      return state - 1
    case CHANGE_CART_QUANTITY:
      const byId = productId => item => item.id === productId
      const newShoppingCart1 = [...state.shoppingCart]
      const cartItemIdx = newShoppingCart1.findIndex(
        byId(action.payload.id)
      )
      newShoppingCart1[cartItemIdx] = {
        ...newShoppingCart1[cartItemIdx],
        quantity: action.payload.quantity,
      }
      return {...state, shoppingCart: newShoppingCart1}
    case NAVIGATE:
      return {...state, activePage: action.payload}
    default:
      return state
  }
}
