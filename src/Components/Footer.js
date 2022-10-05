import React from "react";
import * as S from "./Styled/FooterStyled"
import { FiGithub } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { SiWhatsapp } from "react-icons/si";


export default function Footer(){

    return(
    <S.DivFooter>  
         <S.P> <FiGithub/></S.P>
         <S.P> <ImLinkedin2/></S.P>
         <S.P> <SiWhatsapp/></S.P>
     
    </S.DivFooter>
    )
}