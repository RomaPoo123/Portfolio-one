import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"html"} 
                        title={"HTML5"} 
                        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere consequatur architecto culpa impedit praesentium magnam porro, quia fugit explicabo voluptates, ratione sit? Eveniet sit sequi consequatur exercitationem asperiores possimus."}/>
                <Skill iconId={"css"} 
                        title={"CSS3"} 
                        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere consequatur architecto culpa impedit praesentium magnam porro, quia fugit explicabo voluptates, ratione sit? Eveniet sit sequi consequatur exercitationem asperiores possimus."}/>
                <Skill iconId={"react"} 
                        title={"REACT"} 
                        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere consequatur architecto culpa impedit praesentium magnam porro, quia fugit explicabo voluptates, ratione sit? Eveniet sit sequi consequatur exercitationem asperiores possimus."}/>
                <Skill iconId={"typescript"} 
                        title={"TYPESCRIPT"} 
                        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere consequatur architecto culpa impedit praesentium magnam porro, quia fugit explicabo voluptates, ratione sit? Eveniet sit sequi consequatur exercitationem asperiores possimus."}/>
                <Skill iconId={"styled-commponents"} 
                        title={"STYLED COMPONENTS"} 
                        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere consequatur architecto culpa impedit praesentium magnam porro, quia fugit explicabo voluptates, ratione sit? Eveniet sit sequi consequatur exercitationem asperiores possimus."}/>
                <Skill iconId={"figma"} 
                        title={"WEB DESIGN"} 
                        description={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi facere consequatur architecto culpa impedit praesentium magnam porro, quia fugit explicabo voluptates, ratione sit? Eveniet sit sequi consequatur exercitationem asperiores possimus."}/>
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    background-color: #ffe5e4;
    min-height: 100vh;
`