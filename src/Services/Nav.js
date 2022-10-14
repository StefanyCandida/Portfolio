import React from "react";
import * as S from '../Components/Styled/NavStyled'

export default function Nav({link1,link2,link3, link4}){



    return(
    
        <S.Nav>
          
            <S.DivNav>
                <S.Ul>
                    <S.Links to='/'>{link1}</S.Links>                    
                    <S.Links to='/about'>{link2}</S.Links>
                    <S.Links to='/works'>{link3}</S.Links>
                    <S.Links to='/contatos'>{link4}</S.Links>
                </S.Ul>
               
            </S.DivNav>
        </S.Nav>
       
   
    )
}