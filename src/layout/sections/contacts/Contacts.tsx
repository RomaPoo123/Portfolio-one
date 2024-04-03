import React, {ElementRef, useRef} from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_styles";
import emailjs from '@emailjs/browser';

export const Contact:React.FC = ()=> {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
    e.preventDefault();
    
    if (!form.current) return

    emailjs.sendForm('service_o9biu3g', 'template_0wrrbvg', form.current, { publicKey: 'QMHYzJsug2PXR0m6L',})
        .then(() => {
            console.log('SUCCESS!');
            }, (error) => {
            console.log(error.text);
            });
        e.target.reset();
    };
    

    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"Name"} name={'user_name'}/>
                    <S.Field required placeholder={"Email"} name={'email'}/>
                    <S.Field required placeholder={"subject"} name={'subject'}/>
                    <S.Field required placeholder={"message"} as={"textarea"} name={'message'}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    )
};


