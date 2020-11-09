import { OPEN_CART, CLOSE_CART, STORE_ALL_CURRENCIES, SELECT_CURRENCY, UPDATE_CART_ITEMS } from "./constants"

export const initialStateCart = {
    isOpenCart: false, 
    allCurrencies: [], 
    activeCurrency: null,
    cartItems: [],
    cartItemsCount: 0,
    cartItemsSubtotal: 0
}

export const cartReducer = (state = initialStateCart, action) => {
    switch(action.type){
        case OPEN_CART:
            return {
                ...state,
                isOpenCart: true
            };
        case CLOSE_CART:
            return {
                ...state,
                isOpenCart: false
            };
        case STORE_ALL_CURRENCIES:
            return {
                ...state,
                allCurrencies: action.allCurrencies
            };
        case SELECT_CURRENCY:
            return {
                ...state,
                activeCurrency: action.activeCurrency
            };
        case UPDATE_CART_ITEMS:
            return {
                ...state,
                cartItems: action.cartItems,
                cartItemsCount: action.cartItemsCount,
                cartItemsSubtotal: action.cartItemsSubtotal,
                isOpenCart: action.cartItems.length===0?false:true
            }
        default:
            return state
    }
}