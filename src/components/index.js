import React,{useRef} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Link} from 'react-scroll';
import Issue1 from './issues/Issue1'
import Issue2 from './issues/Issue2'
import Issue3 from './issues/Issue3'
import Issue4 from './issues/Issue4'
import Issue5 from './issues/Issue5'
import LeftStatic from './Left';
import '../App.scss';
function PageLayout(){
    return (
        <div className="whole">
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
            <div className="middle">
                        <Issue5 />
                        <Issue4 />
                        <Issue3 />
                        <Issue2 />
                        <Issue1 />
            </div>
            </Router>
            </div>
            
    )
}

export default PageLayout
