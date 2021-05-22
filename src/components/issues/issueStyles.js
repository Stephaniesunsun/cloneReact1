import styled from 'styled-components';

export const ImgWrapper=styled.div`
flex-basis:100%;
position:relative;
`
export const Img=styled.img`
display:block;
flex-basis:100%;
object-fit:cover;
max-width:50vw;
height:auto;
top:7%;
top:3%;
left:-5vw;
margin-left:auto;
margin-right:auto;
position:absolute;
@media screen and (min-width:1018px){
    max-width:100%;
    margin:0;
    left:0;
    position:relative;
}
`
export const DesIssue=styled.p`
text-align:center;
`
