import React from "react";
import styled from "styled-components";
import photo from "../../../assets/images/photo.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";
export const Main = ()=>{
    return (
        <StyledMain>
           <FlexWrapper align={"center"}
           justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Roman Ivanov</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                <Photo src={photo}/>
           </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain  = styled.div`
    min-height: 100vh;
    background-color: #fff5e7;
`

const MainTitle = styled.h1`
    
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const Name = styled.h2`
    
`

