import { combineReducers } from 'redux'
import { landingReducer } from './landing/reducer'
import { cartReducer } from './cart/reducer'

export const rootReducer = combineReducers({
    landing: landingReducer,
    cart: cartReducer
})