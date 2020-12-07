import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

import './index.css';




class Topics extends Component {



    render() {
        return (
            <div>
                <div id="Topics-Container">
                    <h2>Topics</h2>
                    <div className="topics">
                        <ul id="topics">
                            <li title="Anatomy" id="anatomy"><a  aria-label="anatomy" href="/anatomy">Anatomy</a></li>
                            <li title="Symptoms" id="Symptom"><a href="/Symptoms" Component={<SearchBar searchTerm="Symptoms" />}>Symptoms</a></li>
                            <li title="Hormones" onClick={<SearchBar searchTerm="Hormones" />} id="hormone"><a href="/hormones">Hormones</a></li>
                            <li title="Disorders" id="disorder"><a href="/disorders">Disorders</a></li>
                            <li title="Menstrual Cycle" aria-label="Menstrual Cycle" id="cycle"><a href="/cycles">Menstrual Cycle</a></li>
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