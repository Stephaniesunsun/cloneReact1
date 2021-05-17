//right static part, reusable for every issue 
import React from 'react'
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link} from 'react-scroll';

const Right=styled.div`
    display:flex;
    flex-direction:column;
    position:fixed;
    right:5%;
`
const Email=styled(LinkR)`
    text-decoration:none;
    color:black;
    display:block;
    margin-bottom:auto;
    text-align:right;
    position:fixed;
    top:3%;
    right:2%;
    left:66%;
`
const Nav=styled.ul`
    display:flex;
    flex-direction:column;
    list-style:none;
    position:fixed;
    right:2%;
    left:66%;
    bottom:5%;
`
const LinkWrapper=styled.li`
    text-decoration:none;
    text-align:right;
`
const NavLink=styled(Link)`
    cursor: pointer;
    &:hover{
        border-bottom:2px solid black;
    }
    &.active{
        border-bottom:2px dotted black;
    }
`
const RightStatic = () => {
    return (
        <Right>
            <Email to="/info">info@backstagetalks.com</Email>
            <Nav>
                <LinkWrapper>
                    <NavLink to="issue5" smooth={true}
                    duration={500}
                    spy={true}
                    exact="true">Issue #5</NavLink>
                </LinkWrapper>
                <LinkWrapper>
                    <NavLink to="issue4" smooth={true}
                    duration={600}
                    spy={true}
                    exact="true">Issue #4</NavLink>
                </LinkWrapper>
                <LinkWrapper>
                    <NavLink to="issue3" smooth={true}
                    duration={600}
                    spy={true}
                    exact="true">Issue #3</NavLink>
                </LinkWrapper>
                <LinkWrapper>
                    <NavLink to="issue2" smooth={true}
                    duration={600}
                    spy={true}
                    exact="true">Issue #2</NavLink>
                </LinkWrapper>
                <LinkWrapper>
                    <NavLink to="issue1" smooth={true}
                    duration={600}
                    spy={true}
                    exact="true">Issue #1</NavLink>
                </LinkWrapper>
            </Nav>
        </Right>
    )
}

export default RightStatic
