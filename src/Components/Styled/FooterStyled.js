import styled from "styled-components"


export const DivFooter = styled.div`
height:12vh;
display flex;
justify-content:center;
align-items:center;


`
export const DivMap = styled.div`
height:100%;
width:50%;
display flex;
align-items:center;
justify-content:space-between;

`
export const A = styled.a`
height:100%;
width:5%;
font-size:15vh;
display flex;
justify-content:center;
align-items:center;
cursor:pointer;
text-decoration:none;
color:#f6a9bb;
&:hover{
    font-size:25vh;
}
@media (max-width: 800px) {
 
    width:20%;

    }


`