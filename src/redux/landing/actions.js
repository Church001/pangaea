import { STORE_ALL_PRODUCTS } from "./constants"

/**
 * @description action creator for handling storing all products from server
 * */ 
export const handleStoreAllProducts = (allProducts) => {
    return {
        type: STORE_ALL_PRODUCTS,
        allProducts
    }
}