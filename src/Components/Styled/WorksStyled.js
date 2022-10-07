import styled from "styled-components"

export const DivWork = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;


`
export const DivMap = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;

@media (max-width: 800px) {
 flex-direction:column;
}

`
export const Figure = styled.figure`
display:flex;
align-items:center;
justify-content:center;
height:45vh;
width:30%;
@media (max-width: 800px) {
  width:80%;

 }

`
export const Img = styled.img`
width:80%;
height:80%;
border-radius:10%;
&:hover{
    width:90%;
    height:90%;
}

@media (max-width: 800px) {
  &:hover{
    width:80%;
    height:80%;
}
 }
`

export const A = styled.a`
text-decoration:none;
color:black;

`

export const DivInt = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:60%;
height:30vh;
`
export const H = styled.h3`
font-size:3em;
heigth:30%;
display:flex;
justify-content:center;

@media (max-width: 800px) {
    font-size:2em;
    
  }

`

export const P = styled.p`
height:100%;
width:70%;
display:flex;
justify-content:center;
align-items:center;
font-size:1.5em;
@media (max-width: 800px) {
    flex-direction:column;
    font-size:1em;
     width:100%;
  }

`
