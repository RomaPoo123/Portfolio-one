import styled from "styled-components"
import { font } from "../../../styles/Common"
import { theme } from "../../../styles/Theme"

const Main  = styled.section`
    min-height: 80vh;
    background-color: #fff5e7;
    display: flex;

`
const MainTitle = styled.h1`
    ${font({weight:400, Fmax:27, Fmin:20})};
    p {
        display: none;
    }

`
const FotoWrapper = styled.div`
    position: relative;
    z-index: 1;
    margin-top: 40px;
    

    /* &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }
    }
*/
    @media ${theme.media.mobile} {
        margin-top: 65px;
    } 
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: contain;
    

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
        
    }
`
const Name = styled.h2`
${font({family: "'Josefin Sans', sans-serif", weight:700, Fmax:50, Fmin:36})}
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        font-family: 'NESUKA', sans-serif;
        position: relative;
        z-index: 0;
        white-space: nowrap;
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }

    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`
const SmallText = styled.p`
    font-size: 14px;
    font-weight: 400;
`

export const S = {
    Main,
    MainTitle,
    FotoWrapper,
    Photo,
    Name,
    SmallText,
}   