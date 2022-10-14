import React from "react";
import Eu from '../Components/Img/Stefany08.jpg'
import Macacao from '../Components/Img/Stefany-macacao.jpg'
import EuA from '../Components/Img/Stefany-anel.jpg'
import * as S from "../Components/Styled/AboutStyled"
import Footer from "../Services/Footer"
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";


export default function About(){

    return(
    <S.DivAbo> 
         <S.H>Sobre mim</S.H> 
       <S.DivAbout>  
       <S.Figure>  
           <S.Img src={Eu} alt="imagem"/>
        </S.Figure> 
            <S.P> Me chamo Stefany, cheguei no mundo da tecnologia a pouca mais de 1 ano, após estudar
                os primeiros passos no youtube,passei em um processo seletivo
                 e entrei na escola de Tecnologia Vai na web com estudante em setembro de 2021, com 9 meses de duração.</S.P>       
       </S.DivAbout>
       <S.DivAboutMeio>
             <S.P>  Em apenas 4 meses como estudante foi convidada a virar a cadeira de aluna para Facilitadora, espécie de ajudante de professor, em fevereiro de 2022,
                  , dentre as minhas funções ministrar aulas de revisão de conteúdo foi um divisor que deu ainda mais conhecimento de
                   HTML, CSS, paginas WEB responsivas e ReactJS, cada aula ensinando aprendia um pouco mais, não só de conteudo tecnico como habilidades socioemocionais.  </S.P>   
            <S.FigureMeio > 
                  <S.Img src={Macacao} alt="imagem"/> 
            </S.FigureMeio>   
           
             
       </S.DivAboutMeio>
       <S.DivAbout>
       <S.Figure>
              <S.Img src={EuA} alt="imagem"/>
        </S.Figure>   
            <S.P> Costumo dizer que sou amigavel, com isso tenho facilidade de trabalhar em equipe,
                 sou positiva o que contagia não só meu parceiro de trabalho como tambem meus alunos, ser facilitadora me ajudou muito na comunicação perante a cameras e pessoas. </S.P>
       </S.DivAbout>
       <S.DivAboutTec>
            <S.Ps> As tecnologia que eu sei são :</S.Ps>
            <S.Ps> <TbBrandHtml5/><TbBrandReactNative/> <TbBrandCss3/></S.Ps>
        </S.DivAboutTec> 
       <Footer/>
    </S.DivAbo>
    )
}