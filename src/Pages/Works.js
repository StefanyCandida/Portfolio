import React, { useState } from "react";
import * as S from "../Components/Styled/WorksStyled"
import Footer from "../Services/Footer"
import Starwars from '../Components/Img/star.png'
/*import Cronometro from '../Components/Img/ceu.jpg'*/
import Recipes from '../Components/Img/recipes.png'
import ApiRick from '../Components/Img/Rick.png'
import Wicther from '../Components/Img/TheWitcher.png'
import HPApi from '../Components/Img/hp.png'
import Todo from '../Components/Img/Todo.png'
import Finn from '../Components/Img/Finn.png'
import Riot from '../Components/Img/Riot.png'

import { TbBrandHtml5 , TbBrandReactNative, TbBrandCss3 } from "react-icons/tb";

import { IoLogoJavascript } from "react-icons/io";


export default function Work() { 
 

  const [Fav] = useState([{
    title: "Harry Potter",
    img: HPApi,
    url: "https://stefanycandida.github.io/Api-HP/",
    description: "Desafio de consumir API do Harry Porter com React Hooks, React Rotas e com uso de modal, trabalho foi apresentado aos alunos e fiz junto para incentivá-los.",
    tecnologias: [<TbBrandHtml5/>, <TbBrandReactNative/>,<TbBrandCss3/>]
  
  },
  {
    title: "Recipes",
    img: Recipes,
    url: "https://stefanycandida.github.io/maddening-cake/",
    description: "Site com base em um desing fornecido pelo Vai na Web, o proposito era relembrar modelo de caixa e elementos de estilização, de html e css, mas usando a tecnologia React, base do curso.",
    tecnologias: [<TbBrandHtml5/>, <TbBrandReactNative/>,<TbBrandCss3/>]
  },  
  {
    title: "Login LOL",
    img: Riot,
    url: "https://stefanycandida.github.io/login-projeto/",
    description: "Site de informações de jogo, feito em tecnologia HTML, CSS, JAVASCRIPT, site feito a partir de pagian já existente, feita para pormos em pratica a aula de DOM. ",
    tecnologias: [<TbBrandHtml5/>, <IoLogoJavascript/>,<TbBrandCss3/>]
  },
  /*{
    title: "Cronometro",
    img: Cronometro,
    url: "",
    description: "Cronometro feito sem modelo.",
    tecnologias: [<TbBrandHtml5/>, <TbBrandReactNative/>,<TbBrandCss3/>]
  },*/
  {
    title: "Todo",
    img: Todo,
    url: "https://836z74.csb.app/",
    description: "Cronometro feito sem modelo, com estilo livre, usei props com shildrem para testar conhecimento adquirido projeto em ReactJS.",
    tecnologias: [<TbBrandHtml5/>, <TbBrandReactNative/>,<TbBrandCss3/>]
  },

  {
    title: "Api Rick Morty",
    img: ApiRick,
    url: "https://stefanycandida.github.io/RickMortyApi/",
    description: `Site de informações de desenho, feito por Arê Nascimento, minha colaboração foi deixar o design responsivo para pequenas telas, tecnologia HTML, CSS, JAVASCRIPT,`,
    tecnologias: [<TbBrandHtml5/>, <IoLogoJavascript/>,<TbBrandCss3/>]
  },
  {
    title: "Star Wars",
    img: Starwars,
    url: "https://stefanycandida.github.io/ProjetoFinalVaiNaWeb/",
    description: "Site produzido com base em um design fornecido pelo Vai na web, feito com somente HTML e CSS, esse foi desafio final do MOD 1.",
    tecnologias: [<TbBrandHtml5/>, <TbBrandCss3/>]
  },
  {
    title: "Finn",
    img: Finn,
    url: "https://stefanycandida.github.io/Finn/",
    description: "Site produzido com base em um design fornecido pelo Vai na Web, feito para pratica de position com site feito somente HTML e CSS.",
    tecnologias: [<TbBrandHtml5/>, <TbBrandCss3/>]
  },
  {
    title: "The Wicther",
    img: Wicther,
    url: "https://stefanycandida.github.io/The-Wither/",
    description: "Site produzido com base em um design do Vai na Web, feito em HTML E CSS, usando modelos de display block e margin e padding, o intuito era aprender sobre como posicionar imagem.",
    tecnologias: [<TbBrandHtml5/>,<TbBrandCss3/>]
  }
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
            <S.Icone>{item.tecnologias}</S.Icone>
            </S.DivInt>          
             
           </S.DivMap>     
       </div>
      )) }
      <Footer/>
    </S.DivWork>
  )
}