import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './index.css';


class Topics extends Component {

    
    render(){
        return(
            <div className="Topics-Container">
                <h2>Topics</h2>
                <section className="topics">
                    <ul id="topics">
                        <li><a href="/anatomy">Anatomy</a></li>
                        <li><a href="/Symptoms">Symptoms</a></li>
                        <li><a href="/hormones">Hormones</a></li>
                        <li><a href="/disorders">Disorders</a></li>
                        <li><a href="/cycles">Cycle phases</a></li>
                    </ul>
                </section>
                <div className="results">
                    <article></article>
                            

                </div>
            </div>
        );
    }
}
//search term as prop
//entities, groups of info someone is looking for
//keywords
//blobs = pictures, we store a link to the photo; live within file structure

/* folder called images,  */
export default Topics; 