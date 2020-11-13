
import React, { Component } from 'react';


import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Home from './Home';
import Topics from './Topics';
import Contact from './Contact';

class Main extends Component {
   
    render(){ 
        return(
            <HashRouter>
               
                    <header id="static-header">
                        <div id="flex">
                            <nav>
                                <ul className="unordered-list">
                                    <li><NavLink exact to="/">Home</NavLink></li>
                                    <li><NavLink to="/topics">Topics</NavLink></li>
                                    <li><NavLink to="/contact">Contact </NavLink></li>
                                    <label htmlFor="page title" aria-label="menses" class="screen-reader-text"><h1 id="menses-title">(me)nses</h1></label>
                                
                                 </ul>
                                    
                            </nav>
                        </div>
                  
                       
                        <div className="content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/Topics" component={Topics}/>
                            <Route path="/Contact" component={Contact}/>

                        </div>
                    </header>
            </HashRouter>
        );
    }
}



export default Main;