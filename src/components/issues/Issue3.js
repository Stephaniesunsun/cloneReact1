import React from 'react'
import styled from 'styled-components';
import LeftStatic from '../Left';
import RightStatic from '../Right';


const Section3=styled.section`
    height:100vh;
    width:100vw;
    background-color:#ffbe00;
    display:grid;
  grid-template-columns:repeat(auto-fit,33%);
`
const Img3=styled.img`
    display:block;
    flex-basis:100%;
    object-fit:cover;
    max-width:100%;
    max-height:100%;
    top:7%;
`
const DesIssue3=styled.p`
    text-align:center;
`
const Issue3 = () => {
    return (
         <Section3 id="issue3">
             <div>
                    <LeftStatic />
                </div>
                <div>
                    <Img3 src='https://backstagetalks.com/img/backstagetalks_cover_issue_3.png' alt="Issue3"/>
                    <DesIssue3>Issue #3</DesIssue3>
                </div>
                <div>
                    <RightStatic />
                </div>
         </Section3>
    )
}

export default Issue3
