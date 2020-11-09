import React, { useEffect, useReducer } from "react";
import {useQuery} from "@apollo/client"
import LandingContainer from "./containers/landing/LandingContainer";
import styled from "styled-components";
import Navbar from "./containers/navbar/NavbarContainer";
import { createGlobalStyle } from 'styled-components'
import Cart from "./containers/cart/CartContainer";
import Footer from "./common/footer/Footer";
import { rootReducer } from "./redux/reducer";
import { initialStateCart } from "./redux/cart/reducer";
import { getAllProducts } from "./utils/graphql/landing/queries";
import { initialStateLanding } from "./redux/landing/reducer";
import { handleStoreAllProducts } from "./redux/landing/actions";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrency } from "./redux/cart/actions";
import { getActiveCurrency } from "./utils/_generic";

const GlobalStyle = createGlobalStyle`
  body {
    width:100%;
    margin:0;
    font-family: sans-serif;
    font-weight: lighter;
    color: #000000;
  }
`

const AppWrapper = styled.div`
  width:100%;
`;

function App() {
  const currency = getActiveCurrency()
  const { loading, error, data } = useQuery(getAllProducts(currency))
  const dispatch = useDispatch()
  const isOpenCart = useSelector(state => state.cart.isOpenCart)
  
  dispatch(selectCurrency(getActiveCurrency()));

  if(loading){
    return (
      <div>Loading...</div>
    )
  }

  if(error){
    return(
      <div>Sorry, an error occurred!</div>
    )
  }

  return (
    <AppWrapper>
      <GlobalStyle/>
      <Navbar/>
      <LandingContainer/>
      <Cart show={isOpenCart}/>
    </AppWrapper>
  );
}

export default App;
