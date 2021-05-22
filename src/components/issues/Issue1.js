import React from 'react'
import styled from 'styled-components';
import LeftStatic from '../Left';
import RightStatic from '../Right';
import {ImgWrapper,
    Img,
    DesIssue} from './issueStyles'

const Section1=styled.section`
    height:100vh;
    width:100vw;
    background-color:#e30512;
    display:grid;
  grid-template-columns:repeat(auto-fit,33%);
  overflow-y:hidden;
`

const Issue1 = () => {
    return (
            <Section1 id="issue1">
                <div>
                    <LeftStatic />
                </div>
                <ImgWrapper>
                    <Img src='https://backstagetalks.com/img/backstagetalks_cover2016_n.png' alt="Issue1"/>
                    <DesIssue>Issue #1</DesIssue>
                </ImgWrapper>
                <div>
                    <RightStatic />
                </div>
            </Section1>
    )
}

export default Issue1
