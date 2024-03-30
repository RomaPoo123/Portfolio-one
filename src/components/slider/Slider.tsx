import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";


export const Slider = ()=>{
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slid>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <Name>@ivan ivanow</Name>
                </Slid>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    )
};

const StyledSlider = styled.div`
    /* border: 1px solid red; */
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Slid = styled.div`
    text-align: center;
`
const Text = styled.p`
    
`
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 32px;
    display: inline-block;
`
const Pagination = styled.div`
    
    span {
        display: inline-block;
        width:  7px;
        height: 7px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 20px;

        &+ span {
            margin-left: 5px;
        }
        &.active {
            background-color: ${theme.colors.accent};
            width: 20px;
        }
    }
`