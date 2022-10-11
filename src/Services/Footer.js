import React from "react";
import * as S from "../Components/Styled/FooterStyled"
import { FiGithub } from "react-icons/fi";
import { ImLinkedin2 } from "react-icons/im";
import { SiWhatsapp } from "react-icons/si";




export default function Footer(){
    

    
    return(
    <S.DivFooter>  
         
                   
             <S.DivMap>
                
                 <S.A href='https://github.com/StefanyCandida' target="_blanck">  <FiGithub/></S.A> 
                 <S.A href='https://wa.me/5561993352499' target="_blanck" title="61 99335 2499" > <SiWhatsapp/></S.A>
                <S.A href='https://www.linkedin.com/in/stefanycandida/' target="_blanck"><ImLinkedin2/></S.A>
             </S.DivMap>
 
       
      
    </S.DivFooter>
    )
}
