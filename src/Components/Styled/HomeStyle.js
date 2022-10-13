import styled from "styled-components"


export const DivHome = styled.div`

display:flex;
flex-direction:column;


`
export const Div = styled.div`
height:20%;

`
export const H = styled.h2`
height:20vh;
display:flex;
justify-content:center;
align-items:center;
font-size:5em;
color:#743959;

@media (max-width: 800px) {
    font-size:2em;
  }



`
export const Divtwo = styled.div`

display:flex;
justify-content:center;
align-items:center;
@media (max-width: 800px) {
   flex-direction:column;
  }
`
export const Divthree = styled.div`
height:80%;
width:60%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
font-size:2em;

@media (max-width: 800px) {
     width:80%;
    
  }
`

export const Img = styled.img`
height:45vh;
border-radius:10px ;

`


export const P = styled.p`
font-size:1em;
width:70%;
height:10vh;

@media (max-width: 800px) {
  width:100%;
  height:9vh;
  text-indent: 15%;
  font-size:0.6em;
  
}

`
export const Figure = styled.figure`


@media (max-width: 800px) {
  height:50vh;
  font-size:1em;
}

`
