import React from 'react'
import styled from 'styled-components';
import LeftStatic from '../Left';
import RightStatic from '../Right';
import {ImgWrapper,
    Img,
    DesIssue} from './issueStyles'

const Section5=styled.section`
  height:100vh;
  width:100vw;
  background-color:#00c1b5;
  display:grid;
  grid-template-columns:repeat(auto-fit,33%);
`

const Issue5 = () => {
    return (
            <Section5 id="issue5">
                <div>
                    <LeftStatic />
                </div>
                <ImgWrapper>
                    <Img src='https://backstagetalks.com/img/backstagetalks_cover_issue_5.png' alt="Issue5"/>
                    <DesIssue>Issue #5</DesIssue>
                </ImgWrapper>
                <div>
                    <RightStatic />
                </div>
            </Section5>
    )
}

export default Issue5
