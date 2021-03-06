/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import DefaultContext from './components/context/DefaultContext';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Home from './components/Home';
import Topics from './components/Topics';
import Contact from './components/Contact';
import WikiWindow from './components/WikiWindow';
import SearchBar from './components/SearchBar';
import Notepad from '../src/components/Notepad';


class Main extends Component {
    static contextType = DefaultContext;

   state ={
       store:{
           topics:[]
       }, 
       url:'https://oopsiedaisies.herokuapp.com',

       searchTerm:'' 
   };

   updateStore = () =>{
       this.getTopics();
   }

   setSearchTerm =(searchTerm) =>{
       
       this.setState({searchTerm})
   }

   getTopics = () =>{
       
        
        fetch(`${this.state.url}/topics`)
            .then( r => r.json( ))
            .then(r => {this.setState({
                store:{
                    topics:r
                }
            });
        })
        .catch( e => {
            console.error( e )
            throw new Error(`Error retrieving topics: ${e.message}`);
        })
   }

   componentDidMount=()=>{
       this.updateStore();
   } 

   

    render(){ 
        const contextValue = {
            updateStore: this.updateStore,
            url:this.state.url
        }
         
        return(
            <DefaultContext.Provider value={contextValue}>
                <HashRouter>
               
                    <header id="static-header">
                    <label htmlFor="page title" aria-label="menses" class="screen-reader-text"><h1 id="menses-title">(me)nses</h1></label>
                        
                        <div  id="contain-ul">
                                <ul id="unordered-list">
                                
                               
                                    <li><NavLink exact to="/">Home</NavLink></li>
                                    <li ><NavLink to="/topics">Topics</NavLink></li>
                                    <li ><NavLink to="/contact">Contact </NavLink></li>
                                    <SearchBar setSearchTerm={this.setSearchTerm} />
                                </ul>
                                
                                  
                        </div>
                        </header>
                  
                       
                        <section id="content">
                            <Route exact path="/" component={Home}/>
                            
                            <Route path="/Topics" render={()=><Topics setSearchTerm={this.setSearchTerm} store={this.state.store} />} />
                            <Route path="/Contact" component={Contact}/>

                        </section>
                        <Notepad />
                        <WikiWindow store={this.state.store} searchTerm={this.state.searchTerm} />
                   
                    <footer id="main-footer">
                        
                    
                    <p><h6 id="footer-text">Copyright © 2020 (me)nses All rights reserved</h6></p>
                    <p aria-label="menses"><h3>(me)nses</h3></p>
                    </footer>
                   
                </HashRouter>
            </DefaultContext.Provider>

        );
    }
}



export default Main;