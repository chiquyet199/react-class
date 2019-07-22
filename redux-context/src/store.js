import {createStore} from 'redux'
import appState from './reducers'

const store = createStore(appState)

store.subscribe((arg)=>{
  console.log('Action called', store.getState())
})

export default store