import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import img from "./../../../assets/images/ContactImg1.png"
import { Container } from "../../../components/Container"

const Contacts = styled.section`
    position: relative;
    
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: right 0px bottom 0px;
    background-size: cover;
`
const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }

`

const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;

    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.01em;

    color: ${theme.colors.font};

    &::placeholder {
        color: ${theme.colors.placeholdeColor};
        text-transform: uppercase;
    }

    &:focus-visible {

outline: 1px solid ${theme.colors.borderColor}    }
    
`

export const S = {
    Contacts,
    Form,
    Field
}