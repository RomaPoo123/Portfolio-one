import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSlogan>
    )
};

const StyledSlogan = styled.section`
    min-height: 30hv;
    background-color: #1d9680;
`