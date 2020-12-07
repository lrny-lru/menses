
import React, { Component } from 'react';
import DefaultContext from './components/context/DefaultContext';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Home from './components/Home';
import Topics from './Topics';
import Contact from './components/Contact';
import WikiWindow from './components/WikiWindow';
import SearchBar from './components/SearchBar';

class Main extends Component {
    static contextType = DefaultContext;

   state ={
       store:{
           topics:[]
       }, 
       url:'https://hidden-escarpment-33113.herokuapp.com',

       searchTerm:'' 
   };

   updateStore = () =>{
       this.getTopics();
   }

   setSearchTerm =(searchTerm) =>{
       this.setState({searchTerm})
   }

   getTopics = () =>{
       
    
        fetch(`${this.context.url}/topics`)
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
                        
                        <div id="flex">
                            <nav>
                                <ul className="unordered-list">
                                    <li><NavLink exact to="/">Home</NavLink></li>
                                    <li><NavLink to="/topics">Topics</NavLink></li>
                                    <li><NavLink to="/contact">Contact </NavLink></li>
                                    <label htmlFor="page title" aria-label="menses" class="screen-reader-text"><h1 id="menses-title">(me)nses</h1></label>
                                    <SearchBar setSearchTerm={this.setSearchTerm} />
                                
                                 </ul>
                                 <section>
                                   
                                </section>
                                    
                            </nav>
                        </div>
                  
                       
                        <div id="content">
                            <Route exact path="/" component={Home}/>
                            
                            <Route path="/Topics" render={()=><Topics store={this.state.store} />} />
                            <Route path="/Contact" component={Contact}/>

                        </div>
                        <WikiWindow store={this.state.store} searchTerm={this.state.searchTerm} />
                    </header>
                    <footer>

                    
                    <p><h6 id="footer-text">©(me)nses</h6></p>
                    </footer>
                   
                </HashRouter>
            </DefaultContext.Provider>

        );
    }
}



export default Main;