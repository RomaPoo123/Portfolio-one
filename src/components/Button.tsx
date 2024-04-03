import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button =styled.button`
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 170px;
    height: 32px;
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 50%;
        background-color: ${theme.colors.accent};
        position: absolute;
        bottom:0;
        left:50%;
        transform: translateX(-50%);
        z-index: -1;
        transition: ${theme.animations.transition};
    }

    &:hover {
        &::before {
            height: 100%;
            width: 100%;
        }
    }
`