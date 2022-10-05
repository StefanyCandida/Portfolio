import styled from "styled-components"


export const DivAbo = styled.div`

display:flex;
flex-direction:column;
justify-content:space-between;
border:solid;

`
export const DivHome = styled.div`
height:55vh;
display:flex;
align-items:center;
justify-content:space-evenly;
@media (max-width: 800px) {
    flex-direction:column;
    font-size:0.5em;
  }

`
export const Img = styled.img`
height:80%;
width:20%;

`
export const P = styled.p`
height:18vh;
width:50%;
height:100%;
display:flex;
align-items:center;
font-size:1.5em;
&:hover{
    font-size:2em;
}

`