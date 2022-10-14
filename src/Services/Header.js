import React, { useState } from "react";
import Home from '../Pages/Home'
import About from '../Pages/About'
import Works from '../Pages/Works'
import Contatos from '../Pages/Contatos'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import * as S from '../Components/Styled/HeaderStyled'
import Nav from "./Nav"
import Logo from '../Components/Img/Logo.png'
export default function Header(){
const [open, setOpen]=useState()

    return(
    <BrowserRouter>   
        <S.DivHeader>
            <S.Figure>
                <S.ImgLogo src={Logo}/>
                
            </S.Figure>
           <S.DivDesk>
           <Nav link1="Home" link2="About" link3="Works" link4="Contatos"/>
           </S.DivDesk>
            
            <S.DivMobile>
           {open && <Nav link1="Home" link2="About" link3="Works" link4="Contatos"/>}
             <S.Button onClick={() => {setOpen(!open);}}>
        {open === true ? "x" : "≣ " }
      </S.Button>
      </S.DivMobile>
        </S.DivHeader>
        <S.Div>
            <S.Hdois>Developer Front-end</S.Hdois>
            <S.P>Stéfany Candida Farias </S.P>
           
        </S.Div> 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/works" element={<Works/>}/>
            <Route path="/contatos" element={<Contatos/>}/>
        </Routes>
            </BrowserRouter>
    )
}