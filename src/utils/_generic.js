import _ from "lodash";

/**
 * @description
 * @param
 * @return
 * */
export const thousand = (num) => {
    if (typeof num !== 'string') {
      num = num.toString();
    }
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
/**
 * @description
 * @param cartItems
 * @param product
 * @return
 * */ 
export const generateUpdateCartData = (cartItems, product) => {
    let products = [...cartItems]
    let count = cartItems.length
    if(Array.isArray(products)&&products.length===0){
        const newProduct = reconstructProduct(product)
        products.push(newProduct)
        return {
            products,
            count,
            subtotal: calculateSubtotal(products)
        }
    }

    if(Array.isArray(products)&&products.length!==0){
        let cartItem = _.find(products, (singleProduct) => singleProduct["id"]===product["id"])
        if(!_.isEmpty(cartItem)){
            cartItem["quantity"]=cartItem["quantity"]+1
            products.splice(_.findIndex(products,(o)=>o["id"]===cartItem["id"]), 1, cartItem)
            return {
                products,
                count,
                subtotal: calculateSubtotal(products)
            }
        }
        else if(_.isEmpty(cartItem)){
            const newProduct = reconstructProduct(product)
            products.push(newProduct)
            return {
                products,
                count,
                subtotal: calculateSubtotal(products)
            }
        }
    }
}

/**
 * @description
 * @param
 * @returns
 * */ 
 export const reconstructProduct = product => {
     return {...product, quantity:1}
 }

/**
 * @description calculates and returs subtotal
 * @param cartItems
 * @returns
 * */  
export const calculateSubtotal = cartItems => {
    let total = 0
    if(Array.isArray(cartItems)&&cartItems.length!==0){
      cartItems.map(cartItem => {
        let subtotal = cartItem["price"]*cartItem["quantity"]
        total = total+subtotal
        })
      return total
    }
    else {
        return 0
    }
}

/**
 * @description
 * @param
 * */ 
export const removeItemFromCart = (cartItems, product) => {
    let products = [...cartItems]
    if(Array.isArray(products)&&products.length!==0){
        let cartItem = _.find(products, (singleProduct) => singleProduct["id"]===product["id"])
        if(!_.isEmpty(cartItem)){
            products.splice(_.findIndex(products,(o)=>o["id"]===product["id"]), 1)
            return {
                products,
                count:products.length,
                subtotal: calculateSubtotal(products)
            }
        }
    }
}

/**
 * @description
 * @param
 * */ 
export const calculateIncrementQty = (cartItems, product) => {
    let products = [...cartItems]
    if(Array.isArray(products)&&products.length!==0){
        let cartItem = _.find(products, (singleProduct) => singleProduct["id"]===product["id"])
        if(!_.isEmpty(cartItem)){
            cartItem["quantity"]=cartItem["quantity"]+1
            products.splice(_.findIndex(products,(o)=>o["id"]===product["id"]), 1, cartItem)
            return {
                products,
                count:products.length,
                subtotal: calculateSubtotal(products)
            }
        }
    }
}


/**
 * @description
 * @param
 * */ 
export const calculateDecrementQty = (cartItems, product) => {
    let products = [...cartItems]
    if(Array.isArray(products)&&products.length!==0){
        let cartItem = _.find(products, (singleProduct) => singleProduct["id"]===product["id"])
        if(!_.isEmpty(cartItem)){
            cartItem["quantity"]=cartItem["quantity"]-1
            if(cartItem["quantity"]<=0){
                // remove item
                products.splice(_.findIndex(products,(o)=>o["id"]===product["id"]), 1)
            }else{
                // updates item 
                products.splice(_.findIndex(products,(o)=>o["id"]===product["id"]), 1, cartItem)
            }
            return {
                products,
                count:products.length,
                subtotal: calculateSubtotal(products)
            }
        }
    }
}

/**
 * @description
 * */ 
export const getActiveCurrency = () => {
    if(!_.isEmpty(localStorage.getItem("active_currency"))){
        return localStorage.getItem("active_currency")
    }
    else return "USD"
}

/**
 * @description
 * @param currency String representing currency
 * */ 
export const setActiveCurrency = (currency) => {
    localStorage.setItem("active_currency", currency)
}

/**
 * @description
 * @param
 * @returns
 * */ 
export const generateCurrencyForDisplay = rawCurrencyList => {
    let refinedCurrencyList = []
    if(Array.isArray(rawCurrencyList)&&rawCurrencyList.length!==0){
        rawCurrencyList.map(currency => {
            let obj = {}
            obj.value = currency
            obj.label = currency
            refinedCurrencyList.push(obj)
        })
    }
    return refinedCurrencyList
}

/**
 * @description generates or regenerates data for cartItems
 * @param allProducts
 * @param cartItem
 * @returns 
 * */ 
export const regenerateCartItemsData = (allProducts, cartItems) => {
    const copyCartItems = [...cartItems]
    let newCartItems = []
    if(Array.isArray(copyCartItems)&&copyCartItems.length!==0){
        let currentIndex = 0
        copyCartItems.map( (cartItem, index) => {
            if(Array.isArray(allProducts)&&allProducts.length!==0){
               const foundItem =  _.find(allProducts,(o) => o["id"] === copyCartItems[index]["id"])
               if(!_.isEmpty(foundItem)){
                   newCartItems.push({...foundItem, quantity:copyCartItems[index]["quantity"]})
                   currentIndex = index
               }
            }
        })
        return {
            cartItemsSubtotal: calculateSubtotal(newCartItems),
            newCartItems: newCartItems
        }
    }
    else if(Array.isArray(copyCartItems)&&copyCartItems.length===0){
        return {
            cartItemsSubtotal: 0,
            newCartItems: []
        }

    }
}