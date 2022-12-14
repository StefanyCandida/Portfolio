import styled from "styled-components"
import { Link } from "react-router-dom"

export const Nav = styled.nav`
width:80%;
display:flex;
justify-content:space-evenly;
align-items:center;

`

export const DivNav = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
height:15vh;
width:90%;


  
`

export const Ul = styled.ul`
display:flex;
justify-content:space-evenly;
align-items:center;
height:10vh;
text-decoration: none;
width:90%;
@media (max-width: 800px) {
    flex-direction:column;
    
  }
`
export const Links = styled(Link)`
text-decoration: none;
color:#743959;
font-size:2vw;
`
