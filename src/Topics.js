import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './index.css';


import WikiWindow from './components/WikiWindow';


class Topics extends Component {



    render() {
        return (
            <div>
                <div className="Topics-Container">
                    <h2>Topics</h2>
                    <div className="topics">
                        <ul id="topics">
                            <li id="anatomy"><a href="/anatomy">Anatomy</a></li>
                            <li id="Symptom"><a href="/Symptoms">Symptoms</a></li>
                            <li id="hormone"><a href="/hormones">Hormones</a></li>
                            <li id="disorder"><a href="/disorders">Disorders</a></li>
                            <li id="cycle"><a href="/cycles">Cycle phases</a></li>
                        </ul>
                    </div>

                </div>
                <footer className="results" >

                   

                </footer>

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