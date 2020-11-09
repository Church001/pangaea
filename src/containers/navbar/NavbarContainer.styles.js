import styled from "styled-components";
import { screenSize } from "../../utils/_config.styles";

export const NavbarWrapper = styled.div`
    width:100%;
    background-color:#f5f5f4;
    height:64px;
    position:fixed;
    top:0;
    display: flex;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    box-sizing:border-box;
    box-shadow: 0 2px 10px #e0e0e0;
    justify-content: space-between;
`;


export const NavbarLeftContentWrapper = styled.div`
    min-width: 100px;
    background-color:transparent;
    display: flex;
    align-items:center;
    justify-content: space-between;
`;

export const NavbarRightContentWrapper = styled.div`
    min-width: 100px;
    background-color:transparent;
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin-right: 20px;
    box-sizing: border-box;
`;

export const NavbarIcon = styled.img`
     max-width: 100%;
     max-height: 50px;
     margin-right:20px;
`;

export const NavbarLinkGroup = styled.div`
    min-width:50px;
    display:flex;
    flex-direction:row;
    ${screenSize.tablet}{
        display:none;
    }

`;

export const NavbarLink = styled.a`
    font-size: 16px;
    line-height: 17px;
    margin-right: 1.25rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 1rem;
    text-decoration:none;
    padding-right: 1rem;
    transition: color .3s;
    color: #000000;
`;

export const CartIconWrapper = styled.div`
    position: relative;
    display:flex;
    cursor:pointer;
`;

export const CartItemCounterWrapper = styled.div`
    position:absolute;
    left: 40px;
    top: -7px;
`;

export const CartItemCounterText = styled.div`
    font-size:14px;
    font-weight: lighter;
`;