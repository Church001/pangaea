import React, { useEffect } from "react"
import { NavbarWrapper, NavbarLeftContentWrapper, NavbarRightContentWrapper, NavbarIcon, NavbarLinkGroup, NavbarLink, CartIconWrapper, CartItemCounterWrapper, CartItemCounterText } from "./NavbarContainer.styles"
import ICON from "../../assets/lumin_logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { openCart, storeAllCurrencies } from "../../redux/cart/actions";
import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../../utils/graphql/cart/queries";
import { generateCurrencyForDisplay } from "../../utils/_generic";

const Navbar = () => {
    const linksList = [
        {link:"/", label:"Shop"}, 
        {link:"/", label:"Help"}, 
        {link:"/", label:"Blog"}
    ]
    const dispatch = useDispatch()
    const cartItemsCount = useSelector(state => state.cart.cartItemsCount)
    const {loading, error, data} = useQuery(GET_CURRENCIES)

    useEffect(() => {
        if(!loading&&data&&!error){
            dispatch(storeAllCurrencies(generateCurrencyForDisplay(data["currency"])))
        }
    },[loading])
    
    const _handleOpenCart = () => {
        if(cartItemsCount === 0) return
        dispatch(openCart())
    }
    return (
        <NavbarWrapper>
            
            {/*  left part */}
            <NavbarLeftContentWrapper>
                <NavbarIcon src={ICON}/>
                <NavbarLinkGroup>
                    {
                        Array.isArray(linksList)&&linksList.length!==0&&
                        linksList.map((singleLink, index) => {
                            return (
                                <NavbarLink href={singleLink["link"]}>
                                    {singleLink["label"]}
                                </NavbarLink>
                            )
                        })
                    }
                </NavbarLinkGroup>
            </NavbarLeftContentWrapper>

            {/* right part  */}
            <NavbarRightContentWrapper>
                <NavbarLink href="/">
                    Account
                </NavbarLink>

                <CartIconWrapper onClick={_handleOpenCart}>
                    <FontAwesomeIcon icon={faShoppingCart} color="#e0e0e0" size="2x"/>
                    <CartItemCounterWrapper>
                        <CartItemCounterText>
                            {cartItemsCount}
                        </CartItemCounterText>
                    </CartItemCounterWrapper>
                </CartIconWrapper>
            </NavbarRightContentWrapper>
        </NavbarWrapper>
    )
}

export default Navbar;

