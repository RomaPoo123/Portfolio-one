import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assets/images/progect-1.png"
import timerImg from "../../../assets/images/progect-2.png"
import { Container } from "../../../components/Container";
import { S } from "./Works_Styles";

const worksitems = ["ALL", "LANDING PAGE", "REACT", "SPA"]

const workData = [
    {
        title:"Social Network",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        src: socialImg,
    },
    {
        title:"Timer",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim.",
        src: timerImg,
    },
]

export const Works:React.FC= ()=>{
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksitems} />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((w, index)=>{
                        return <Work title={w.title} text={w.text} src={w.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>

    )

};

