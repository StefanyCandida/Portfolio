import React from "react";
import Eu from '../Components/Img/Stefany08.jpg'
import Macacao from '../Components/Img/Stefany-macacao.jpg'
import EuA from '../Components/Img/Stefany-anel.jpg'
import * as S from "../Components/Styled/AboutStyled"
import Footer from "../Services/Footer"


export default function About(){

    return(
    <S.DivAbo> 
         <S.H>Quem sou eu...</S.H> 
       <S.DivAbout>  
       <S.Figure>  
           <S.Img src={Eu} alt="imagem"/>
        </S.Figure> 
            <S.P> Me chamo Stefany, tenho 33 anos, cheguei no mundo da tecnologia a pouca mais de 1 ano, onde passei no processo e entrei na escola de Tecnoligia Vai na web com estudante em setembro de 2021.</S.P>
       </S.DivAbout>
       <S.DivAboutMeio>
             <S.P> Convidada a virar a cadeira de aluna para Facilitadora em fevereiro de 2022, assim que finalizei o modulo 1 com pouco mais de 4 meses estudando, ter a oportunidade de ministrar aulas de Programação Front-end foi um divisor que deu uma injeção de conhecimento de base HTML, CSS, paginas WEB responsivas e ReactJS, cada aula ensinando aprendia um pouco mais e sempre buscando novas formas de ensinar para um melhor aprendizado dos alunos . </S.P>   
            <S.Figure> 
                  <S.Img src={Macacao} alt="imagem"/> 
            </S.Figure>      
       </S.DivAboutMeio>
       <S.DivAbout>
       <S.Figure>
              <S.Img src={EuA} alt="imagem"/>
        </S.Figure>   
            <S.P> Costumo dizer que sou amigavel, com isso tenho facilidade de trabalhar em equipe, sou positiva o que contagia não só meu parceiro de trabalho como tambem meus alunos. </S.P>
       </S.DivAbout>
       <Footer/>
    </S.DivAbo>
    )
}