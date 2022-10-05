import React, { useState } from "react";
import Home from './Home'
import About from './About'
import Works from './Works'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import * as S from './Styled/HeaderStyled'
import Nav from "./Nav"

export default function Header(){
const [open, setOpen]=useState()
    

    return(
    <BrowserRouter>   
        <S.DivHeader>
            <S.DivH>
                <S.H>SCF</S.H>
            </S.DivH>
           

           {open && <Nav link1="Home" link2="About" link3="Works"/>}
             <S.Button onClick={() => {setOpen(!open);}}>
        {open === true ? "x" : "≣ " }
      </S.Button>
        </S.DivHeader>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/works" element={<Works/>}/>
        </Routes>
            </BrowserRouter>
    )
}