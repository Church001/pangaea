import React, { useEffect, useReducer, useState } from "react"
import { LandingWrapper, LandingBannerWrapper, LandingContentWrapper, LandingBannerTextWrapper, LandingBannerLargeText, LandingBannerSmallText } from "./LandingContainer.styles";
import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from "../../utils/graphql/cart/queries";
import GridWrapper from "../../wrappers/grid/GridWrapper";
import { initialStateLanding } from "../../redux/landing/reducer";
import { rootReducer } from "../../redux/reducer";
// import { getActiveCurrency } from "../../redux/cart/getters";
import { initialStateCart } from "../../redux/cart/reducer";
import { getAllProducts } from "../../utils/graphql/landing/queries";
import { handleStoreAllProducts } from "../../redux/landing/actions";
import { useSelector, useDispatch } from "react-redux";
import { getActiveCurrency } from "../../utils/_generic";

const LandingContainer = () => {
    const currency = getActiveCurrency()
    const dispatch = useDispatch()
    const {loading, error, data} = useQuery(getAllProducts(currency))
    const cartState = useSelector(state => state.cart)
    const landingState = useSelector(state => state.landing)

    useEffect(() => {
        if(!loading&&data){
          dispatch(handleStoreAllProducts(data["products"]))
        }
    }, [loading ])

    if(!loading && !error && data){
        return (
            <LandingWrapper>
                <LandingBannerWrapper>
                    <LandingBannerTextWrapper>
                        <LandingBannerLargeText>
                            All Products
                        </LandingBannerLargeText>
    
                        <LandingBannerSmallText>
                            A 360 look at Lumin
                        </LandingBannerSmallText>
                    </LandingBannerTextWrapper>
                </LandingBannerWrapper>
                <LandingContentWrapper 
                    isFixed={cartState["isOpenCart"]}
                >
                    <GridWrapper data={landingState["allProducts"]}/>
                </LandingContentWrapper>
            </LandingWrapper>
        )
    }
}

export default LandingContainer;