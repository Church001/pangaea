import React, { useEffect, useState } from "react";
import { CartWrapper, CartBackdrop, CartSummaryWrapper, CartContentWrapper, CartContentHeaderWrapper, CartContentHeaderUpperWrapper, CartContentHeaderLowerWrapper, CartContentHeaderItem, CartCloseButtonWrapper, CartContentTitle, CartItemGroupWrapper, CurrencySelect, CurrencySelectOption, CartSummaryTextWrapper, CartSummaryText } from "./CartContainer.styles";
import styled from "styled-components";
import ErrorBoundary from "../../wrappers/error/ErrorBoundary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CartItemCard } from "../../components/card/card";
import { useQuery , useLazyQuery} from "@apollo/client";
import { GET_CURRENCIES } from "../../utils/graphql/cart/queries";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, updateCart, selectCurrency } from "../../redux/cart/actions";
import { thousand, calculateIncrementQty, calculateDecrementQty, removeItemFromCart, getActiveCurrency, regenerateCartItemsData } from "../../utils/_generic";
import { getAllProducts } from "../../utils/graphql/landing/queries";
import { handleStoreAllProducts } from "../../redux/landing/actions";

const Wrapper = styled.div`
    width:100%;
    display:flex;
    position:fixed;
    top:0;
`;


const Cart = ({show}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const [activeCurr, setCurrency] = useState(getActiveCurrency())
    const cartItemsCount = useSelector(state => state.cart.cartItemsCount)
    const subtotal = useSelector(state => state.cart.cartItemsSubtotal)
    const activeCurrency = useSelector(state => state.cart.activeCurrency)
    const allCurrencies = useSelector(state => state.cart.allCurrencies)
    const {loading, error, data} = useQuery(GET_CURRENCIES)

    /**
     * @description
     * */ 
    const _handleCloseCart = () => {
        dispatch(closeCart())
    }

    /**
     * @description
     * @param
     * @returns
     * */ 
    const _handleIncrementItemQty = (product) => {
        const {products,count,subtotal} = calculateIncrementQty(cartItems, product)
        dispatch(updateCart({
            products,
            count,
            subtotal
        }))
    }

    /**
     * @description
     * @param
     * @returns
     * */ 
    const _handleDecrementItemQty = (product) => {
        const {products,count,subtotal} = calculateDecrementQty(cartItems, product)
        dispatch(updateCart({
            products,
            count,
            subtotal
        }))
    }

    /**
     * @description
     * @param
     * */ 
    const _handleRemoveItemFromCart = (product) => {
        const {products,count,subtotal} = removeItemFromCart(cartItems, product)
        dispatch(updateCart({
            products,
            count,
            subtotal
        }))
    }

    const [reFetchAllProducts, response] = useLazyQuery(getAllProducts(activeCurr))

    useEffect(() => {

        if(!response["loading"]){
            reFetchAllProducts()
        }
    },[activeCurr])

    const handleSelect = e => {
        setCurrency(e.target.value)
    }

    useEffect(() => {
        if(!response["loading"]&&response["data"]){
            dispatch(handleStoreAllProducts(response["data"]["products"]))
            const {cartItemsSubtotal, newCartItems} = regenerateCartItemsData(response["data"]["products"],cartItems )
            dispatch(updateCart({
                products: newCartItems,
                count: cartItemsCount,
                subtotal:cartItemsSubtotal
            }))
            dispatch(selectCurrency(activeCurr))
        }
    },[response["data"]])


    return (
        <ErrorBoundary>
            {show &&
                <Wrapper>
                    <CartBackdrop/>
                    <CartWrapper>
                        {/* ---cart content--------  */}
                        <CartContentWrapper>
                            {/* -------Cart Content Header--------- */}
                            <CartContentHeaderWrapper>
                                {/* upper part */}
                                <CartContentHeaderUpperWrapper>
                                    <CartContentHeaderItem>
                                        <CartCloseButtonWrapper
                                            onClick={() => _handleCloseCart()}
                                        >
                                            <FontAwesomeIcon icon={faChevronRight} color="#696969" size="1x"/>
                                        </CartCloseButtonWrapper>
                                    </CartContentHeaderItem>
                                    <CartContentHeaderItem centerItem>
                                        <CartContentTitle>
                                            Your Cart
                                        </CartContentTitle>
                                    </CartContentHeaderItem>
                                    <CartContentHeaderItem></CartContentHeaderItem>
                                </CartContentHeaderUpperWrapper>
                                
                                {/* lower part */}
                                <CartContentHeaderLowerWrapper>
                                    <CurrencySelect name="currency" onClick={handleSelect}>
                                        {Array.isArray(allCurrencies)
                                        &&allCurrencies.length!==0&&
                                        allCurrencies.map((currencyOption, i) => {
                                            return (
                                                <CurrencySelectOption 
                                                    value={currencyOption["value"]}
                                                    selected={activeCurrency===currencyOption["value"]}
                                                    key={i}
                                                >
                                                    {currencyOption["label"]}
                                                </CurrencySelectOption>
                                            )
                                        })
                                        }
                                    </CurrencySelect>
                                </CartContentHeaderLowerWrapper>
                            </CartContentHeaderWrapper>

                            {/* -------Content Body---------- */}
                            <CartItemGroupWrapper>
                                {
                                    Array.isArray(cartItems) 
                                    && cartItems.length!==0 
                                    && cartItems.map((singleCartItem) => {
                                        return (
                                            <CartItemCard 
                                                key={singleCartItem["id"]} 
                                                product={singleCartItem}
                                                handleIncrementItemQty={_handleIncrementItemQty}
                                                handleDecrementItemQty={_handleDecrementItemQty}
                                                handleRemoveItemFromCart={_handleRemoveItemFromCart}
                                            />
                                        )
                                    })
                                }
                            </CartItemGroupWrapper>
                        </CartContentWrapper>

                        {/* --cart summary---- */}
                        <CartSummaryWrapper>
                            <CartSummaryTextWrapper>
                                <CartSummaryText>Subtotal</CartSummaryText>
                                <CartSummaryText>{activeCurrency} {thousand(parseFloat(subtotal).toFixed(2))}</CartSummaryText>
                            </CartSummaryTextWrapper>
                        </CartSummaryWrapper>
                    </CartWrapper>
                </Wrapper>
            }
        </ErrorBoundary>
    )
}

export default Cart