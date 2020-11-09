import React from "react";
import { Wrapper } from "./GridWrapper.styles";
import ProductCard from "../../components/card/card";

const GridWrapper = ({data}) => {
    return(
        <Wrapper>
            {
                Array.isArray(data)&&data.length!==0&&
                data.map( (product, index) => {
                    return(
                        <ProductCard key={index} product={product}/>
                    )
                })
            }
            {
                Array.isArray(data)&&data.length===0&&
                        <div>No Products</div>
                
            }
        </Wrapper>
    )
}

export default GridWrapper