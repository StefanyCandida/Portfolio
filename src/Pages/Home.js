import React from "react";
import * as S from "../Components/Styled/HomeStyle"
import Stefany from "../Components/Img/Stefany08.jpg"
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
            <S.P>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</S.P>
            
            </S.Divthree>
           

        </S.Divtwo> 
        
        <Footer/>

    </S.DivHome>
    )
}