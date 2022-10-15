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
            <S.P>Em About falo um pouco da minha trajetória. </S.P>
            <S.P>Em works dou destaque nos trabalhos que mais gostei de fazer e que mais me fizerem por minhas habilidades em pratica.</S.P>
            </S.Divthree>
           

        </S.Divtwo> 
        
        <Footer/>

    </S.DivHome>
    )
}