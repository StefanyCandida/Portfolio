import React from "react";
import * as S from "./Styled/HomeStyle"
import Stefany from "./Img/Stefany08.jpg"

export default function Works(){

    return(
    <S.DivHome> 
        <S.Div>
            <S.H>Developer Front-end</S.H>
        </S.Div>  
        <S.Divtwo>
            <figure><S.Img src={Stefany} /></figure>
            <S.Divthree>
            <p>Aqui você irá conhecer um pouco mais de mim e dos meus trabalhos! </p>
            
            </S.Divthree>
           

        </S.Divtwo> 
        
        

    </S.DivHome>
    )
}