import React, { useState } from "react";
import Home from '../Pages/Home'
import About from '../Pages/About'
import Works from '../Pages/Works'
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
           <Nav link1="Home" link2="About" link3="Works"/>
           </S.DivDesk>
            
            <S.DivMobile>
           {open && <Nav link1="Home" link2="About" link3="Works"/>}
             <S.Button onClick={() => {setOpen(!open);}}>
        {open === true ? "x" : "≣ " }
      </S.Button>
      </S.DivMobile>
        </S.DivHeader>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/works" element={<Works/>}/>
        </Routes>
            </BrowserRouter>
    )
}