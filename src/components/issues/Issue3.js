import React from 'react'
import styled from 'styled-components';
import LeftStatic from '../Left';
import RightStatic from '../Right';
import {ImgWrapper,
    Img,
    DesIssue} from './issueStyles'

const Section3=styled.section`
    height:100vh;
    width:100vw;
    background-color:#ffbe00;
    display:grid;
  grid-template-columns:repeat(auto-fit,33%);
`

const Issue3 = () => {
    return (
         <Section3 id="issue3">
             <div>
                    <LeftStatic />
                </div>
                <ImgWrapper>
                    <Img src='https://backstagetalks.com/img/backstagetalks_cover_issue_3.png' alt="Issue3"/>
                    <DesIssue>Issue #3</DesIssue>
                </ImgWrapper>
                <div>
                    <RightStatic />
                </div>
         </Section3>
    )
}

export default Issue3
