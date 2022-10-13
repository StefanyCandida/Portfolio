import React, { useState } from "react";
import * as S from "../Components/Styled/WorksStyled"
import Footer from "../Services/Footer"
import Starwars from '../Components/Img/star.png'
import Cronometro from '../Components/Img/ceu.jpg'
import Recipes from '../Components/Img/recipes.png'
import ApiRick from '../Components/Img/Rick.png'
import Wicther from '../Components/Img/TheWitcher.png'
import HPApi from '../Components/Img/hp.png'
import Todo from '../Components/Img/Todo.png'

import { TbBrandHtml5 , TbBrandReactNative, TbBrandCss3 } from "react-icons/tb";

import { IoLogoJavascript } from "react-icons/io";


export default function Work() {


  const [Fav] = useState([{
    title: "Harry Potter",
    img: HPApi,
    url: "https://stefanycandida.github.io/Api-HP/",
    description: "Desafio de consumir API do Harry Porter com React Hooks, React Rotas e com uso de modal, trabalho foi apresentado aos alunos e fiz junto para incentivá-los.",
  tecnologias: [<TbBrandHtml5/>,<TbBrandCss3/>]
  
  },
  {
    title: "Star Wars",
    img: Starwars,
    url: "https://stefanycandida.github.io/ProjetoFinalVaiNaWeb/",
    description: "Site produzido com base em um design do star wars, feito com somente HTML e CSS, desafio final do MOD 1.",
    tecnologias: [<TbBrandHtml5/>, <TbBrandCss3/>]
  },
  {
    title: "Cronometro",
    img: Cronometro,
    url: "",
    description: "Cronometro feito sem modelo.",
    tecnologias: [<TbBrandHtml5/>, <TbBrandReactNative/>,<TbBrandCss3/>]
  },
  {
    title: "Todo",
    img: Todo,
    url: "https://836z74.csb.app/",
    description: "Cronometro feito sem modelo, usando props e ReactJS.",
    tecnologias: [<TbBrandHtml5/>, <TbBrandReactNative/>,<TbBrandCss3/>]
  },


  
  {
    title: "Recipes",
    img: Recipes,
    url: "https://stefanycandida.github.io/maddening-cake/",
    description: "Site com base em um desing para relembrar modelos de caixa e elementos do CSS.",
    tecnologias: [<TbBrandHtml5/>, <TbBrandReactNative/>,<TbBrandCss3/>]
  },
  {
    title: "Api Rick Morty",
    img: ApiRick,
    url: "https://stefanycandida.github.io/RickMortyApi/",
    description: "Site de informações de desenho, feito por colaboração com Arê Gabriele, minha a parte fopi deixar o design responsivo para  pequenas telas, tecnologia HTML, CSS, JAVASCRIPT",
    tecnologias: [<TbBrandHtml5/>, <IoLogoJavascript/>,<TbBrandCss3/>]
  },
  {
    title: "The Wicther",
    img: Wicther,
    url: "https://stefanycandida.github.io/The-Wither/",
    description: "Site produzido com base em um design do Vai na Web, feito em HTML E CSS.",
    tecnologias: [<TbBrandHtml5/>,<TbBrandCss3/>]
  },
  ])
 
  

  return (
    <S.DivWork>
      {Fav.map((item) => (

        <div>
          <S.DivMap >
           <S.Figure>
             <S.Img src={item.img} alt={`Projetos: ${item.title}`}/>
             </S.Figure> 
            <S.DivInt>
         
              <S.A key={item.title} href={item.url} target="_blanck">{item.title}</S.A>
            <S.P>{item.description}</S.P>
            <S.Tec>{item.tecnologias}</S.Tec>
            </S.DivInt>          
             
           </S.DivMap>     
       </div>
      )) }
      <Footer/>
    </S.DivWork>
  )
}