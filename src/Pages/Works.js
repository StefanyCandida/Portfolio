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

export default function Work() {

  const [Fav] = useState([{
    title: "Harry Potter",
    img: HPApi,
    url: "https://stefanycandida.github.io/Api-HP/",
    description: "Desafio de consumir API do Harry Porter com React Hooks, React Rotas e com uso de modal, prabalh foi apresentado ao leua alunos e fiz junto para incentivalos. ",
  },
  {
    title: "Star Wars",
    img: Starwars,
    url: "https://stefanycandida.github.io/ProjetoFinalVaiNaWeb/",
    description: "Site produzido com base em um desing do star wars, feito com somente HTML e CSS, desafio final do MOD 1.",
  },
  {
    title: "Cronometro",
    img: Cronometro,
    url: "",
    description: "Cronometro feito sem modelo.",
  },
  {
    title: "Todo",
    img: Todo,
    url: "https://836z74.csb.app/",
    description: "Cronometro feito sem modelo, usando props e ReactJS.",
  },


  
  {
    title: "Recipes",
    img: Recipes,
    url: "https://stefanycandida.github.io/maddening-cake/",
    description: "Site com base em um desing para relembrar modelos de caixa e elementos do CSS.",
  },
  {
    title: "Api Rick Morty",
    img: ApiRick,
    url: "https://stefanycandida.github.io/RickMortyApi/",
    description: "Site de informações de desenho, feito por colaboração com Arê Gabriele, minha a parte fopi deixar o design responsivo para  pequenas telas, tecnologia HTML, CSS, JAVASCRIPT",
  },
  {
    title: "The Wicther",
    img: Wicther,
    url: "https://stefanycandida.github.io/The-Wither/",
    description: "ite produzido com base em um desing do Vai na Web, feito em HTML E CSS.",
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
      <Footer/>
    </S.DivWork>
  )
}