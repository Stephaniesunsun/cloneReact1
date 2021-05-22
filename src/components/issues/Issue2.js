import React from 'react'
import styled from 'styled-components';
import LeftStatic from '../Left';
import RightStatic from '../Right';
import {ImgWrapper,
    Img,
    DesIssue} from './issueStyles'

const Section2=styled.section`
    height:100vh;
    width:100vw;
    background-color:#1d3fbb;
    display:grid;
  grid-template-columns:repeat(auto-fit,33%);
`
const Issue2 = () => {
    return (
        <Section2 id="issue2">
            <div>
                    <LeftStatic />
                </div>
                <ImgWrapper>
                    <Img src='https://backstagetalks.com/img/backstagetalks_cover2017.png' alt="Issue2"/>
                    <DesIssue>Issue #2</DesIssue>
                </ImgWrapper>
                <div>
                    <RightStatic />
                </div>
        </Section2>
    )
}

export default Issue2
