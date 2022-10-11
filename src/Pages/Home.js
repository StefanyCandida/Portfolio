import React from "react";
import * as S from "../Components/Styled/HomeStyle"
import Stefany from "../Components/Img/Stefany-azul.jpg"
import Footer from "../Services/Footer"

export default function Works(){

    return(
    <S.DivHome> 
        
        <S.Divtwo>
            <S.Figure><S.Img src={Stefany} /></S.Figure>
            <S.Divthree>
            <S.P>Aqui você irá conhecer um pouco mais de mim e dos meus trabalhos! </S.P>
            <S.P>Em About conhecerá sobre minha trajetória</S.P>
            <S.P>Em works sobre os trabalhos que mais foi desafiador de fazer!</S.P>
            </S.Divthree>
           

        </S.Divtwo> 
        
        <Footer/>

    </S.DivHome>
    )
}