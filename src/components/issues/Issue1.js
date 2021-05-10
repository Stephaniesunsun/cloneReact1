import React from 'react'
import styled from 'styled-components';
import LeftStatic from '../Left';
import RightStatic from '../Right';

const Section1=styled.section`
    height:100vh;
    width:100vw;
    background-color:#e30512;
    display:grid;
  grid-template-columns:repeat(auto-fit,33%);
`
const Img1=styled.img`
    display:block;
    flex-basis:100%;
    object-fit:cover;
    max-width:100%;
    max-height:100%;
    top:7%;
`
const DesIssue1=styled.p`
    text-align:center;
`
const Issue1 = () => {
    return (
            <Section1 id="issue1">
                <div>
                    <LeftStatic />
                </div>
                <div>
                    <Img1 src='https://backstagetalks.com/img/backstagetalks_cover2016_n.png' alt="Issue1"/>
                    <DesIssue1>Issue #1</DesIssue1>
                </div>
                <div>
                    <RightStatic />
                </div>
            </Section1>
 
    )
}

export default Issue1
