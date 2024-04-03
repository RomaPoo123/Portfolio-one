import React from "react";
import photo from "../../../assets/images/111.png"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import Typewriter from 'typewriter-effect';
import { S } from "./Main_styles";
import Tilt from 'react-parallax-tilt';
import "./../../../styles/main.css"


export const Main: React.FC = ()=>{
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Roman Ivanov</span></S.Name>
                        <S.MainTitle>
                            <p>A Web Developer</p>
                            <Typewriter
                                        options={{
                                        strings: ['A Web Developer.', "A Frontend Developer.","A Web Designer."],
                                        autoStart: true,
                                        loop: true,
                                        delay: 150,
                                        cursor: "_",
                                        }}
                                        />
                        </S.MainTitle>
                    </div>
                        <S.FotoWrapper>
                            <Tilt
                                    className="parallax-effect-img"
                                    tiltMaxAngleX={0}
                                    tiltMaxAngleY={30}
                                    perspective={2000}
                                    transitionSpeed={1800}
                                    scale={1.1}
                                    gyroscope={true}>
                            <S.Photo src={photo} className="inner-element" alt="pic"/>
                            </Tilt>
                        </S.FotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};