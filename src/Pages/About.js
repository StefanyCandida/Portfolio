import React from "react";
import Ceu from '../Components/Img/Stefany08.jpg'
import * as S from "../Components/Styled/AboutStyled"
import Footer from "../Services/Footer"


export default function About(){

    return(
    <S.DivAbo>   
       <S.DivHome>
           <S.Img src={Ceu} alt="imagem"/>
           <S.P>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </S.P>
           </S.DivHome>

           <S.DivHome>
           <S.P>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </S.P>
           <S.Img src={Ceu} alt="imagem"/>
           
       </S.DivHome>
       <S.DivHome>
       <S.Img src={Ceu} alt="imagem"/>
       <S.P>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  </S.P>
       </S.DivHome>
       <S.DivHome>
           <S.P>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </S.P>
           <S.Img src={Ceu} alt="imagem"/>
           
       </S.DivHome>
        <Footer/>
    </S.DivAbo>
    )
}