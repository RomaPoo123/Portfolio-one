import React from "react";
import styled from "styled-components";
import { animateScroll as scroll} from "react-scroll";
import logo from "./../../assets/images/Logo.svg"
import { theme } from "../../styles/Theme";



export const Logo:React.FC =() => {
    return (
        <a href="#" onClick={()=>{scroll.scrollToTop()}}>
            <img src={logo} alt="logo" />
        </a>

    );
};

