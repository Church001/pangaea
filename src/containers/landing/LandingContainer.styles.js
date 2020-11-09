import styled from "styled-components"
import { screenSize } from "../../utils/_config.styles";

// main wrapper enclosing all landing page contents
export const LandingWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - 80px);
    box-sizing:border-box;
    margin-top:60px;
`;

//--------------BANNER------------------------
export const LandingBannerWrapper = styled.div`
    width:100%;
    height:200px;
    box-sizing:border-box;
    background-color:#f5f5f4;
    padding: 40px 8rem;
    
    display: flex;
    justify-content: space-between;
`
export const LandingBannerTextWrapper = styled.div`
    display:flex;
    flex-direction:column;
`;

export const LandingBannerLargeText = styled.h1`
    font-weight:bold;
    font-size:2rem;
`;

export const LandingBannerSmallText = styled.h4`
    font-weight: lighter;
    font-size:1rem;
    font-family:FF Bau Regular;
    margin:0;
`;


// --------------LANDING----------------------
export const LandingContentWrapper = styled.div`
    background-color:#e2e6e3;
    margin:auto;
    box-sizing:border-box;
    padding: 130px 8rem;
    position: ${props => props.isFixed?"fixed":"unset"};

    ${screenSize.tablet}{
        padding: 130px 1rem;
    }
`;