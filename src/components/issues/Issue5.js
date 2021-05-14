import React from 'react'
import styled from 'styled-components';
import LeftStatic from '../Left';
import RightStatic from '../Right';

const Section5=styled.section`
  height:100vh;
  width:100vw;
  background-color:#00c1b5;
  display:grid;
  grid-template-columns:repeat(auto-fit,33%);
`
const Img5=styled.img`
    display:block;
    flex-basis:100%;
    object-fit:cover;
    max-width:100%;
    max-height:100%;
    top:7%;
`
const DesIssue5=styled.p`
    text-align:center;
`
const Issue5 = () => {
    return (
            <Section5 id="issue5">
                <div>
                    <LeftStatic />
                </div>
                <div>
                    <Img5 src='https://backstagetalks.com/img/backstagetalks_cover_issue_5.png' alt="Issue5"/>
                    <DesIssue5>Issue #5</DesIssue5>
                </div>
                <div>
                    <RightStatic />
                </div>
            </Section5>
    )
}

export default Issue5
