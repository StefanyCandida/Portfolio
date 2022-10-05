import React, { useState } from "react";
import * as S from "./Styled/WorksStyled"

import Starwars from './Img/ceu.jpg'
import Cronometro from './Img/ceu.jpg'
import Recipes from './Img/ceu.jpg'
import ApiRick from './Img/ceu.jpg'
import Wicther from './Img/ceu.jpg'
import HPapi from './Img/ceu2.jpg'

export default function Work() {

  const [Fav] = useState([{
    title: "Harry Potter",
    img: HPapi,
    url: "https://stefanycandida.github.io/Api-HP/",
    description: "Consumi api com React Hooks",
  },
  {
    title: "Star Wars",
    img: Starwars,
    url: "https://stefanycandida.github.io/ProjetoFinalVaiNaWeb/",
    description: "Site produzido com base em um desing do star wars, feito com somente HTML e CSS, para desafio final do MOD 1.",
  },
  {
    title: "Cronometro",
    img: Cronometro,
    url: "",
    description: "Cronometro feito sem modelo, usando animação e ReactJS.",
  },
  {
    title: "Recipes",
    img: Recipes,
    url: "https://stefanycandida.github.io/maddening-cake/",
    description: "Site produzido com base em um desing para relembrar modelos de caixa e elementos do CSS.",
  },
  {
    title: "Api Rick Morty",
    img: ApiRick,
    url: "https://stefanycandida.github.io/RickMortyApi/",
    description: "Site de informações de desenho, deixei o design responsivo pequenas telas, tecnologia HTML, CSS, JAVASCRIPT",
  },
  {
    title: "The Wicther",
    img: Wicther,
    url: "https://stefanycandida.github.io/The-Wither/",
    description: "Desafio feito em HTML E CSS ",
  },
  ])

  return (
    <S.DivWork>
      {Fav.map((item) => (

        <S.A key={item.title} href={item.url} target="_blanck">
          <S.DivMap>
           <S.Figure>
             <S.Img src={item.img} alt={`Projetos: ${item.title}`}/>
             </S.Figure> 
            <S.DivInt>
              <S.H>{item.title}</S.H>
            
            <S.P>{item.description}</S.P>
            </S.DivInt>          
             
           </S.DivMap>     
       </S.A>
      )) }
    </S.DivWork>
  )
}