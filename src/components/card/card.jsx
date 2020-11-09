import React from "react";
import { ProductCardWrapper, ProductImageWrapper, ProductImage, AddToCartButtonWrapper, ProductDescriptionWrapper, ProductDescriptionText, ProductPriceText, CartItemCardWrapper, CartItemSummarySection, CartItemImageSection, RemoveCartItemButtonWrapper, CartItemImage, CartImageWrapper, IncrementDecrementWrapper, IncrementDecrementItem, CartItemSummaryTextWrapper, CartItemSummaryActionWrapper, CartItemPriceText, CartActionText, CartItemSummaryLargeText, CartItemSummarySmallText } from "./card.styles";
import { Button } from "../button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTimes } from "@fortawesome/free-solid-svg-icons";
import { thousand, generateUpdateCartData } from "../../utils/_generic";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../../redux/cart/actions";

const ProductCard = ({product}) => {
    const allProducts = useSelector(state => state.landing.allProducts)
    const cartItems = useSelector(state => state.cart.cartItems)
    const activeCurrency = useSelector(state => state.cart.activeCurrency)
    const dispatch = useDispatch()

    
    const _handleAddToCart = (product) => {
        const {products,count,subtotal} = generateUpdateCartData(cartItems, product)
        dispatch(updateCart({
            products,
            count:products.length,
            subtotal
        }))
    }

    return (
        <ProductCardWrapper>
            {/* product image wrapper */}
            <ProductImageWrapper>
                <ProductImage src={product["image_url"]}/>
            </ProductImageWrapper>

            {/* product description wrapper */}
            <ProductDescriptionWrapper>
                <ProductDescriptionText>
                    {product["title"]}
                </ProductDescriptionText>
                <ProductPriceText>
                    From: {activeCurrency} {thousand(parseFloat(product["price"]).toFixed(2))}
                </ProductPriceText>
            </ProductDescriptionWrapper>

            {/* add to cart button wrapper */}
            <AddToCartButtonWrapper>
                <Button 
                    primary
                    onClick={() => _handleAddToCart(product)}
                >
                    Add to Cart
                </Button>
            </AddToCartButtonWrapper>
        </ProductCardWrapper>
    )
}

export default ProductCard;

// --------------CART ITEM CARD------------------------
export const CartItemCard = ({
    product, 
    handleIncrementItemQty, 
    handleDecrementItemQty, 
    handleRemoveItemFromCart}) => {
    const activeCurrency = useSelector(state => state.cart.activeCurrency)
    return (
        <CartItemCardWrapper>
            {/* --------------summary part---------- */}
            <CartItemSummarySection>
                <CartItemSummaryTextWrapper>
                    <CartItemSummaryLargeText>
                       {product["title"]}
                    </CartItemSummaryLargeText>

                    <CartItemSummarySmallText>
                        Two Month supply shipped every two months
                    </CartItemSummarySmallText>
                </CartItemSummaryTextWrapper>

                <CartItemSummaryActionWrapper>
                    <IncrementDecrementSection 
                        quantity={product["quantity"]}
                        product={product}
                        handleIncrementItemQty={handleIncrementItemQty}
                        handleDecrementItemQty={handleDecrementItemQty}    
                    />

                    <CartItemPriceText>
                        {activeCurrency} {thousand(parseFloat(product["price"]).toFixed(2))}
                    </CartItemPriceText>
                </CartItemSummaryActionWrapper>
            </CartItemSummarySection>

            {/* --------Image part---------- */}
            <CartItemImageSection>
                <RemoveCartItemButtonWrapper
                    onClick={()=>handleRemoveItemFromCart(product)}
                >
                    <FontAwesomeIcon icon={faTimes} size="1x"/>
                </RemoveCartItemButtonWrapper>
                <CartImageWrapper>
                    <CartItemImage 
                        src={product["image_url"]}
                    />
                </CartImageWrapper>
            </CartItemImageSection>
        </CartItemCardWrapper>
    )
}




export const IncrementDecrementSection = ({quantity,handleIncrementItemQty,handleDecrementItemQty, product}) => {
    return (
        <IncrementDecrementWrapper>
            <IncrementDecrementItem 
                pointer
                onClick={()=>handleDecrementItemQty(product)}
            >
                <CartActionText>
                    -
                </CartActionText>
            </IncrementDecrementItem>
            <IncrementDecrementItem>
                <CartActionText>
                    {quantity}
                </CartActionText>
            </IncrementDecrementItem>
            <IncrementDecrementItem 
                pointer
                onClick={()=>handleIncrementItemQty(product)}
            >
                <CartActionText>
                    +
                </CartActionText>
            </IncrementDecrementItem>
        </IncrementDecrementWrapper>
    )
}