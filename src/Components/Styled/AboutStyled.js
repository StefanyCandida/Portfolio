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
  
  }

`
export const DivAboutMeio = styled.div`
height:55vh;

display:flex;
align-items:center;
justify-content:space-evenly;
@media (max-width: 800px) {
    flex-direction:column-reverse;
    font-size:0.5em;
    
  }

`
export const Figure = styled.figure`
height:100%;
width:15%;
display:flex;
align-items:center;
@media (max-width: 800px) {
  height:100%;
width:35%;
  }

`
export const Img = styled.img`
height:80%;
width:100%;
@media (max-width: 800px) {
height:90%;
width:100%;
border-radius:15%;
}


`
export const P = styled.p`
height:18vh;
width:50%;
height:100%;
display:flex;
align-items:center;
font-size:1.5em;
text-indent: 10%;
@media (max-width: 800px) {
 
  text-indent: 15%;

}

`
export const H = styled.h2`
height:10vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;
font-size:2.5em;

@media (max-width: 800px) {
  font-size:1.5em;
  width:100%;
 
}

`