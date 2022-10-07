import styled from "styled-components"
import { Link } from "react-router-dom"
import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-size:border-box;

}

`

export const DivHeader = styled.div`
display:flex;
justify-content:space-between;
background-color:#f17c9d;
height:20vh;

`
export const Figure = styled.figure`
width:10%;
display:flex;
justify-content:center;
align-items:center;
@media (max-width: 800px) {

  width:20%;
  }

`
export const ImgLogo = styled.img`
width:60%;
heigth:50%;
@media (max-width: 800px) {
  width:100%;
heigth:100%;

  }

`

export const H = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100%;
font-size:3em;

`
export const Button = styled.button`
height:100%;
width:5vw;
font-size:2em;
background-color:#f17c9d;
border:none;
@media (max-width: 800px) {
  width:15vw;
    font-size:4em;
    width:50%;
  }


`
export const DivDesk = styled.nav`
width:70%;
display:flex;
justify-content:space-evenly;
align-items:center;


@media (max-width: 800px) {
  display:none;
  
  }
`
export const DivMobile = styled.nav`
display:none;
 
@media (max-width: 800px) {
  display:initial;
 display:flex;
 justify-content:end;
  width:60%;

  }


`

export const Ul = styled.ul`
display:flex;
justify-content:space-evenly;
align-items:center;
height:10vh;
font-size:3em;
text-decoration: none;
width:70%;
@media (max-width: 800px) {
  width:70%;
  font-size:1em;
}
`
export const Links = styled(Link)`
text-decoration: none;
color: black;
`