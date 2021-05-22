import React from 'react'
import styled from 'styled-components';
import LeftStatic from '../Left';
import RightStatic from '../Right';
import {ImgWrapper,
    Img,
    DesIssue} from './issueStyles'

const Section4=styled.section`
    height:100vh;
  width:100vw;
  background-color:#ff651a;
  display:grid;
  grid-template-columns:repeat(auto-fit,33%);
  &>*{
    scroll-snap-stop:normal;
  }
`

const Issue4 = () => {
    return (
            <Section4 id="issue4">
                <div>
                    <LeftStatic />
                </div>
                <ImgWrapper>          
                    <Img src='https://backstagetalks.com/img/backstagetalks_cover_issue_4.png' alt="Issue4"/>
                    <DesIssue>Issue #4</DesIssue>
                </ImgWrapper>
                <div>
                    <RightStatic />
                </div>
            </Section4>
    )
}

export default Issue4
