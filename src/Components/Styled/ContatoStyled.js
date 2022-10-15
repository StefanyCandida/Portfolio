import styled from "styled-components";


export const Div = styled.div`
height:60vh;
font-size:2em;
display:flex;
flex-direction:column;
align-items:center;
`
export const Form = styled.form`
border:solid red;
background-color:rgb(241, 193, 214);
border-radius:20px;
width:30%;
height:60%;
font-size:1em;
display:flex;
align-items:center;
flex-direction:column;
justify-content:space-evenly;
@media (max-width: 800px) {
    flex-direction:column;
    font-size:0.5em;
     width:90%;
  }
`
export const DivDados = styled.div`
width:90%;

display:flex;
justify-content:space-between;

`
export const DivT = styled.div`
width:90%;
height:60%;
display:flex;
justify-content:space-between;

`
export const Label = styled.label`
color:#ad5478;


`

export const Input = styled.input`
width:70%;

font-size:0.8em;
border-radius:20px;
text-indent:3%;

`
export const Textarea = styled.textarea`
width:80%;
border-radius:20px;
text-indent:5%;
font-size:0.8em;

`
export const Button = styled.button`
width:30%;
border-radius:20px;
font-size:0.8em;
color:#ad5478;
`

export const DivIcone = styled.div`
height:40%;
justify-content:space-evenly;
display:flex;
flex-direction:column;
align-items:center;
width:20%;

@media (max-width: 800px) {
    
    width:60%;
  }
`
export const A = styled.a`
color:#ad5478;
 display:flex;
 align-items:center;
 justify-content:space-evenly;
 text-decoration:none;
 width:100%;
@media (max-width: 800px) {
   
    letter-spacing: 2px;
   font-size:0.5em;
    height:35%;
    width:100%;
  }
`