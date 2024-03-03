import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/progect-1.png"
import timerImg from "../../../assets/images/progect-2.png"

const worksitems = ["ALL", "LANDING PAGE", "REACT", "SPA"]

export const Works= ()=>{
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksitems} />
            <FlexWrapper justify={"space-between"}>
                <Work title={"Social Network"} 
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."} 
                    src={socialImg}/>
                <Work title={"Timer"} 
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim."} 
                    src={timerImg}/>
            </FlexWrapper>
        </StyledWorks>

    )

};

const StyledWorks= styled.section`
    min-height: 100vh;
    background-color: #deefff;

`