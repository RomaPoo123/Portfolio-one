import React from "react";
import photo from "../../../assets/images/photo.webp"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_styles";


export const Main: React.FC = ()=>{
    return (
        <S.StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Roman Ivanov</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>
                    <S.FotoWrapper>
                    <S.Photo src={photo}/>
                    </S.FotoWrapper>
                    
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    );
};