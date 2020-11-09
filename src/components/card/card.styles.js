import styled from "styled-components";
import { screenSize } from "../../utils/_config.styles";

export const ProductCardWrapper = styled.div`
    min-width:210px;
    border-radius:5px;
    background-color:#e2e6e3;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;

    ${screenSize.tablet}{
        min-width:50px;
    }
`;

export const ProductImageWrapper = styled.div`
    /* max-width: 100%;
    max-height: 170px; */
    /* align-self: flex-start; */
`;

export const ProductImage = styled.img`
    object-fit: contain;
    max-width: 100%;
    max-height: 170px;
    ${screenSize.tablet}{
        min-height:50px;
    }
    /* flex: 1 1 0%; */
`;

export const ProductDescriptionWrapper = styled.div`
    width: 100%;
    padding:10px 5%;
    box-sizing:border-box;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    ${screenSize.tablet}{
        align-items:center;
    }
    ${screenSize.phone}{
        align-items:flex-start;
    }
`;

export const ProductDescriptionText = styled.h2`
    font-size: 1rem;
    line-height: 1.5;
    ${screenSize.tablet}{
        font-size: 1rem;
    }
    ${screenSize.phone}{
        font-size: .6rem;
    }
`;

export const ProductPriceText = styled.h2`
    font-size: 1rem;
    line-height: 1.5;
    ${screenSize.tablet}{
        font-size: 1rem;
    }
    ${screenSize.phone}{
        font-size: .6rem;
    }
`;


export const AddToCartButtonWrapper = styled.div`
    min-width:210px;
    display: flex;
    justify-content:center;
    ${screenSize.tablet}{
        max-width:150px;
    }
    ${screenSize.phone}{
        min-width:180px;
    }
`;

// ---------------CART ITEM CARD-------------

export const CartItemCardWrapper = styled.div`
    width: 100%;
    height: 210px;
    margin-bottom: 20px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
`;

export const CartItemImageSection = styled.div`
    height:100%;
    flex-grow:1;
    position: relative;
    display:flex;
`;

export const CartImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CartItemImage = styled.img`
    object-fit: contain;
    max-width: 100%;
    max-height: 80px;
`;

export const RemoveCartItemButtonWrapper = styled.div`
    position:absolute;
    width:20px;
    height:20px;
    right:0;
    margin-right: 5px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const CartItemSummarySection = styled.div`
    flex-grow:2;
    height: 100%;
    box-sizing:border-box;
    padding: 15px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
`;

export const CartItemSummaryTextWrapper = styled.div`
    width:100%;
    flex-grow: 1;
`

export const CartItemSummaryLargeText = styled.h1`
    font-size: 18px;
    font-weight: bold;
`;

export const CartItemSummarySmallText = styled.h3`
    font-size: 14px;
    font-weight:lighter;
`;

export const CartItemSummaryActionWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

// -----------INCREMENT/DECREMENT SECTION------------------
export const IncrementDecrementWrapper = styled.div`
    width:100px;
    height:45px;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #e0e0e0;

`

export const IncrementDecrementItem = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${props => props.pointer?"pointer":"unset"};
`;

export const CartItemPriceText = styled.h3`
    font-size: 18px;
    font-weight: bold;
`;

export const CartActionText = styled.h4`
    font-size:16px;  
`;

