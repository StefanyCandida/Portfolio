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
height:75vh;
display:flex;
align-items:center;
justify-content:space-evenly;

@media (max-width: 800px) {
    flex-direction:column-reverse;
    font-size:0.5em;
    height:100vh;
   
  }

`
export const DivMeioImg = styled.img`
height:70%;
@media (max-width: 800px) {
height:50%;
border-radius:15%;
object-fit: cover;
}
`
export const Figure = styled.figure`
height:100%;
display:flex;
align-items:center;
object-fit: cover;
@media (max-width: 800px) {
  height:100%;
width:35%;
  }

`
export const Img = styled.img`
height:80%;
width:100%;
object-fit: cover;
@media (max-width: 800px) {
height:70%;
width:100%;
border-radius:15%;
}


`
export const P = styled.p`
height:18vh;
width:50%;
display:flex;
align-items:center;
font-size:1.6em;
text-indent: 10%;

@media (max-width: 800px) {
  font-size:2em;
  text-indent: 15%;
  height:65vh;
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

@media (max-width: 800px) {
  font-size:1.5em;
  width:100%;
 
}

`
export const Ps = styled.p`
height:18vh;
width:100%;
color:#743959;
display:flex;
align-items:center;
justify-content:center;
font-size:2.6em;

@media (max-width: 800px) {
  font-size:2em;
  text-indent: 15%;
  height:65vh;
  width:80%;

}

`