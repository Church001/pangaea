import { STORE_ALL_PRODUCTS } from "./constants"

export const initialStateLanding = {
    allProducts: []
}

export const landingReducer = (state =initialStateLanding, action) => {
    switch(action.type){
        case STORE_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.allProducts
            }
        default:
            return state
    } 
}