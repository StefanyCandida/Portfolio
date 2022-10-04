import React, { useState } from "react";
import Home from './Home'
import About from './About'
import Works from './Works'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import * as S from './Styled/HeaderStyled'

export default function Header(){
const [open, setOpen]=useState()
    

    return(
    <BrowserRouter>   
        <S.DivHeader>
            <S.DivH>
                <S.H>SCF</S.H>
            </S.DivH>
            <S.Button onClick={() => {setOpen(!open);}}>
        {open === true ? "x" : "≣"}
      </S.Button>

            <S.Nav>
                <S.Ul>
                    <S.Links to='/'>Home</S.Links>
                    <S.Links to='/about'>About</S.Links>
                    <S.Links to='/works'>Works</S.Links>
                </S.Ul>
            </S.Nav>
        </S.DivHeader>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/works" element={<Works/>}/>
        </Routes>
            </BrowserRouter>
    )
}