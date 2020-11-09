import { STORE_ALL_CURRENCIES, SELECT_CURRENCY, UPDATE_CART_ITEMS, OPEN_CART, CLOSE_CART } from "./constants"
import { setActiveCurrency } from "../../utils/_generic"

/**
 * @description handles storing all currencies in the redux store
 * @param currencyList: array containig all currencies
 * @returns action object containing type and payload (array of currencies)
 * */ 
export const storeAllCurrencies = currencyList => {
    return {
        type: STORE_ALL_CURRENCIES,
        allCurrencies: currencyList
    }
}

/**
 * @description handles selection of single currency
 * @param currency
 * */ 
export const selectCurrency = activeCurrency => {
    setActiveCurrency(activeCurrency)
    return {
        type: SELECT_CURRENCY,
        activeCurrency
    }
}

/**
 * @description handles adding items to cart
 * @param data Object containing products, count
 * 
 * */ 
export const updateCart = data => {
    return {
        type: UPDATE_CART_ITEMS,
        cartItems: data["products"],
        cartItemsCount: data["count"],
        cartItemsSubtotal: data["subtotal"]
    }
}

export const openCart = () => {
    return{
        type: OPEN_CART
    }
}

export const closeCart = () => {
    return {
        type: CLOSE_CART
    }
}