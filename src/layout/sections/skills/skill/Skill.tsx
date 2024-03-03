import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType ={
iconId: string
title: string
description:string
}


export const Skill = (props:SkillPropsType)=> {
    return (
            <StyledSkill>
                <Icon iconId={props.iconId}/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
                <SkillText></SkillText>
            </StyledSkill>
        
    )
};

const StyledSkill = styled.div`
    width: 30%;
    background-color: rgb(255, 255, 255, 0.56);
    border: 1px solid rgb(0, 0, 0, 0.56);
    margin: 5px;
    
`
const SkillTitle = styled.h3`

`
const SkillText = styled.p`

`
