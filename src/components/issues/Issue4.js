import React from 'react'
import styled from 'styled-components';
import LeftStatic from '../Left';
import RightStatic from '../Right';

const Section4=styled.section`
    height:100vh;
  width:100vw;
  background-color:#ff651a;
  display:grid;
  grid-template-columns:repeat(auto-fit,33%);
`
const Img4=styled.img`
    display:block;
    flex-basis:100%;
    object-fit:cover;
    max-width:100%;
    max-height:100%;
    top:7%;
`
const DesIssue4=styled.p`
    text-align:center;
`
const Issue4 = () => {
    return (
            <Section4 id="issue4">
                <div>
                    <LeftStatic />
                </div>
                <div>          
                    <Img4 src='https://backstagetalks.com/img/backstagetalks_cover_issue_4.png' alt="Issue4"/>
                    <DesIssue4>Issue #4</DesIssue4>
                </div>
                <div>
                    <RightStatic />
                </div>
            </Section4>
    )
}

export default Issue4
