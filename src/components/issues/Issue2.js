import React from 'react'
import styled from 'styled-components';
import LeftStatic from '../Left';
import RightStatic from '../Right';

const Section2=styled.section`
    height:100vh;
    width:100vw;
    background-color:#1d3fbb;
    display:grid;
  grid-template-columns:repeat(auto-fit,33%);
`
const Img2=styled.img`
    display:block;
    flex-basis:100%;
    object-fit:cover;
    max-width:100%;
    max-height:100%;
    top:7%;
`
const DesIssue2=styled.p`
    text-align:center;
`
const Issue2 = () => {
    return (
        <Section2 id="issue2">
            <div>
                    <LeftStatic />
                </div>
                <div>
                    <Img2 src='https://backstagetalks.com/img/backstagetalks_cover2017.png' alt="Issue2"/>
                    <DesIssue2>Issue #2</DesIssue2>
                </div>
                <div>
                    <RightStatic />
                </div>
        </Section2>
    )
}

export default Issue2
