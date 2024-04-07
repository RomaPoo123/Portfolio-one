import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWrapper"
import kartinka from "./../../../assets/images/Samurai.png"
import borderSac from "./../../../assets/images/pink-sakura-frame-png.png"


// Skills
const Skills = styled.section`
    position: relative;
    background-image: url(${kartinka});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 200px bottom 0px;

        ${FlexWrapper} {
                gap: 10px;
        }
`

// Skill
const Skill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 42px 20px 52px;

    @media ${theme.media.mobile} {}
    padding: 62px 0 40px;

`
const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;


`
const SkillText = styled.p`
    text-align: center;
    line-height: 1.4;
`
export const IconWrapper= styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

    &::before {
        content: "";
        display: inline-block;
        width: 100px;
        height: 100px;
        background: rgb(255, 255, 255, 0.1);
        transform: rotate(45deg) translate(-50%, -50%);
        position: absolute;
        left: 50%;
        top:50%;
        transform-origin: top left;
        clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}
`

export const S = {
    Skills,
        Skill,
        SkillTitle,
        SkillText,
        IconWrapper,


}