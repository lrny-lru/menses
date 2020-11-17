import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import DisplayWikiArticle from './components/DisplayWikiArticle';


class Topics extends Component {

    populateItems = () => {
        return (
            this.props.store.topics.map((topic) => {
                return (

                    <DisplayWikiArticle
                        key={topic.id}
                        name={topic.title}
                        content={topic.content}
                        tags={topic.keywords}
                    />
                );
            })
        )
    }

    render() {
        return (
            <div>
                <div className="Topics-Container">
                    <h2>Topics</h2>
                    <div className="topics">
                        <ul id="topics">
                            <li><a href="/anatomy">Anatomy</a></li>
                            <li><a href="/Symptoms">Symptoms</a></li>
                            <li><a href="/hormones">Hormones</a></li>
                            <li><a href="/disorders">Disorders</a></li>
                            <li><a href="/cycles">Cycle phases</a></li>
                        </ul>
                    </div>

                </div>
                    <div className="results" >

                        {this.populateItems()}

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