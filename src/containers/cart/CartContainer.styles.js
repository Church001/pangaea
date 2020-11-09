import styled from "styled-components"
import { screenSize } from "../../utils/_config.styles";

// ------- CART CONTAINER------------------
export const CartWrapper = styled.div`
    width: 50vw;
    height: 100vh;
    background-color:#e2e6e3;
    position:fixed;
    top:0;
    right:0;
    ${screenSize.phone}{
        width:100vw;
    }
`;

export const CartContentWrapper = styled.div`
    height: calc(100% - 180px);
    width:100%;
    padding: 20px;
    box-sizing: border-box;
`;

// ----CONTENT HEADER-----------
export const CartContentHeaderWrapper = styled.div`
    width: 100%;
    height: 120px;
    box-sizing: border-box;
    background-color: transparent;

`;

export const CartContentHeaderItem = styled.div`
    flex-grow:1;
    box-sizing:border-box;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: ${props => props.centerItem?"center":"flex-start"};
`;

export const CartContentTitle = styled.h3`
    font-size: 1rem;
    color:#696969;
    text-transform:uppercase;
`;

export const CartCloseButtonWrapper = styled.div`
    width: 30px;
    height: 30px;
    border-radius:50%;
    border:1px solid #696969;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const CartContentHeaderUpperWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction: row;
`;

export const CartContentHeaderLowerWrapper = styled.div`
    width:100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const CurrencySelect = styled.select`
    height:40px;
    padding:5px;
`;

export const CurrencySelectOption = styled.option`
    
`;

export const CartSummaryWrapper = styled.div`
    width:100%;
    height:180px;
    position:absolute;
    bottom:0;
    box-sizing: border-box;
`;

export const CartSummaryTextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px ;
    box-sizing: border-box;
    border-top: 1px solid #e0e0e0;

`;

export const CartSummaryText = styled.h3`
    font-size:1rem;

`;
// ---------CART BACKDROP ---------------------
export const CartBackdrop = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #6e7b70;
    opacity: 0.3;
    pointer-events: none;
    transition: all .4s ease-in-out;
`;

// ---------CART ITEM WRAPPER ----------------
export const CartItemGroupWrapper = styled.div`
    width: 100%;
    box-sizing:border-box;
    overflow-y: auto;
    position:relative;
    height: calc(100vh - 120px - 180px);
    padding: 20px 0 20px;
`;