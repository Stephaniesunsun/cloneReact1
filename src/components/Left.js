//left static part, reusable for every issue
import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Left=styled.div`
    display:flex;
    flex-direction:column;
`
const Title=styled.h1`
position:fixed;
    top:3%;
    left:2%;
    right:66%;
`
const Desc=styled.p`
    position:fixed;
    left:2%;
    right:75%;
    bottom:15%;
    @media screen and (min-width:1018px){
    right:66%;
    }
`;
const Span1=styled(Link)`
    color:black;
    position:fixed;
    left:2%;
    right:66%;
    bottom:10%;
`
const Span2=styled(Link)`
    color:black;
    position:fixed;
    left:2%;
    right:66%;
    bottom:5%;
`
function LeftStatic(){
    return (
        <Left>
            <Title>BACKSTAGE TALKS</Title>
            <Desc>Backstage Talks is a magazine of casual, but in depth
                dialogues on design and business. Our decisions shape
                and influence this complex world- to have a chance to 
                make the right ones, we need to talk.
            </Desc>
            <Span1 to="/milk">@2021 Published by studio Milk</Span1>
            <Span2 to="/term-policy">Privacy Policy</Span2>
        </Left>
    )
}

export default LeftStatic

                