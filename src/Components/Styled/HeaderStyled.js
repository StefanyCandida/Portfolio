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
display:none;
@media (max-width: 800px) {
    display:initial;
    font-size:7rem;
  }

`
export const Nav = styled.nav`
width:50%;
@media (max-width: 800px) {
    display:none;
    
  }
`
export const Ul = styled.ul`
display:flex;
justify-content:space-evenly;
align-items:center;
height:10vh;
font-size:3em;
text-decoration: none;
`
export const Links = styled(Link)`
text-decoration: none;
color: black;
`