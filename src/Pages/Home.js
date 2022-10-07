import React from "react";
import * as S from "../Components/Styled/HomeStyle"
import Stefany from "../Components/Img/Stefany-azul.jpg"
import Footer from "../Services/Footer"

export default function Works(){

    return(
    <S.DivHome> 
        <S.Div>
            <S.H>Developer Front-end</S.H>
        </S.Div>  
        <S.Divtwo>
            <S.Figure><S.Img src={Stefany} /></S.Figure>
            <S.Divthree>
            <S.P>Aqui você irá conhecer um pouco mais de mim e dos meus trabalhos! </S.P>
            <S.P>Em About onhecerá sobre mim</S.P>
            <S.P>Em works sobre os meus trabalhos!</S.P>
            </S.Divthree>
           

        </S.Divtwo> 
        
        <Footer/>

    </S.DivHome>
    )
}