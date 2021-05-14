//main page layout 
import React from 'react'
import styled from 'styled-components';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Issue1 from './issues/Issue1'
import Issue2 from './issues/Issue2'
import Issue3 from './issues/Issue3'
import Issue4 from './issues/Issue4'
import Issue5 from './issues/Issue5'
import '../App.scss';

const Middle=styled.div``;

function PageLayout(){
    return (
        <div className="whole">
            //specify all the external links that are used in the entire page (redirect)
            <Router>
                <Route path='/milk' component={()=>{
                        window.location.href='https://milk.sk/';
                    }} />
                <Route path='/term-policy' component={()=>{
                        window.location.href='https://backstagetalks.com/privacy-policy.php';
                    }} />
                <Route path='/info' component={()=>{
                        window.location.href='#';
                    }} />
            <Middle>
                        <Issue5 />
                        <Issue4 />
                        <Issue3 />
                        <Issue2 />
                        <Issue1 />
            </Middle>
            </Router>
        </div>
            
    )
}

export default PageLayout
