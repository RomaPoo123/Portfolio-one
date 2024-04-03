import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_styles";
import { Fade } from "react-awesome-reveal";

const skillData = [
        {
                iconId:"html",
                title:"HTML5",
                description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere consequatur architecto culpa impedit praesentium magnam porro, quia fugit explicabo voluptates, ratione sit? Eveniet sit sequi consequatur exercitationem asperiores possimus."
        },
        {
                iconId:"css",
                title:"CSS3",
                description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere consequatur architecto culpa impedit praesentium magnam porro, quia fugit explicabo voluptates, ratione sit? Eveniet sit sequi consequatur exercitationem asperiores possimus."
        },
        {
                iconId:"react",
                title:"REACT",
                description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere consequatur architecto culpa impedit praesentium magnam porro, quia fugit explicabo voluptates, ratione sit? Eveniet sit sequi consequatur exercitationem asperiores possimus."
        },
        {
                iconId:"typescript",
                title:"TYPESCRIPT",
                description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere consequatur architecto culpa impedit praesentium magnam porro, quia fugit explicabo voluptates, ratione sit? Eveniet sit sequi consequatur exercitationem asperiores possimus."
        },
        {
                iconId:"styled-commponents",
                title:"STYLED COMPONENTS",
                description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere consequatur architecto culpa impedit praesentium magnam porro, quia fugit explicabo voluptates, ratione sit? Eveniet sit sequi consequatur exercitationem asperiores possimus."
        },
        {
                iconId:"figma",
                title:"WEB DESIGN",
                description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere consequatur architecto culpa impedit praesentium magnam porro, quia fugit explicabo voluptates, ratione sit? Eveniet sit sequi consequatur exercitationem asperiores possimus."
        },
]

export const Skills = () => {
        return (
                <S.Skills id={"skills"}>
                        <Container>
                                <SectionTitle>My Skills</SectionTitle>
                                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                                        <Fade cascade={true} damping={0.2}>
                                                {skillData.map((s, index)=>{
                                                        return <Skill key={index} iconId={s.iconId} title={s.title} description={s.description}/>
                                                })}
                                        </Fade>
                                </FlexWrapper>
                        </Container>
                </S.Skills>
        )
}

