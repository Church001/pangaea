import styled from "styled-components"
import { screenSize } from "../../utils/_config.styles"

export const Wrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-auto-rows: 380px;
    grid-row-gap: 130px;

    ${screenSize.tablet}{
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 15px;
    }

    ${screenSize.phone}{
        grid-column-gap: 5px;
    }
`
