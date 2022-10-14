import styled from "styled-components"


export const DivAbo = styled.div`

display:flex;
flex-direction:column;
justify-content:space-between;

`
export const DivAbout = styled.div`
height:60vh;
display:flex;
align-items:center;
justify-content:space-evenly;
@media (max-width: 800px) {
    flex-direction:column;
    justify-content:end;
    font-size:0.5em;
    height:70vh;

    
  }

`
export const DivAboutMeio = styled.div`
height:60vh;
display:flex;
align-items:center;
justify-content:space-evenly;
@media (max-width: 800px) {
    flex-direction:column-reverse;
    font-size:0.5em;
    height:70vh;
   
  }

`
export const DivAboutTec = styled.div`
height:20vh;
display:flex;
align-items:center;
justify-content:space-evenly;


@media (max-width: 800px) {
    flex-direction:column;
    align-items:center;
    font-size:1em;
    
  }

`

export const Figure = styled.figure`
width:20%;
display:flex;
align-items:center;

@media (max-width: 800px) {
   width:50%;
  }

`
export const Img = styled.img`
height:80%;
width:100%;
object-fit: cover;
@media (max-width: 800px) {
height:100%;
width:100%;
border-radius:15%;
}


`
export const P = styled.p`
height:18vh;
width:50%;
display:flex;
align-items:center;
font-size:2em;
text-indent: 10%;
color:#ad5478;
@media (max-width: 800px) {
  font-size:2em;
  text-indent: 15%;
  height:40%;
  width:80%;
}

`
export const H = styled.h2`
height:10vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;
font-size:2.5em;
color:#743959;
@media (max-width: 800px) {
  font-size:1.5em;
  width:100%;
}

`
export const Ps = styled.p`


color:#743959;
display:flex;
align-items:center;
justify-content:center;
font-size:2.6em;

@media (max-width: 800px) {
  font-size:1.5em; 

}

`
export const FigureMeio = styled.figure`

width:20%;
display:flex;
align-items:center;

@media (max-width: 800px) {
  width:50%;

  }
`