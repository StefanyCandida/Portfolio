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
background-color:rgb(241, 98, 129);
height:15vh;

`
export const DivH = styled.div`
width:15%;

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
@media (max-width: 800px) {
  width:15vw;
    font-size:4em;
  }


`
export const Nav = styled.nav`
width:70%;
display:flex;
justify-content:space-evenly;
align-items:center;



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