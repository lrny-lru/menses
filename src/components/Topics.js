import React, { Component } from 'react';









class Topics extends Component {



    render() {

        
        return (
            <div>
                <div id="Topics-Container">
                    <h2>Topics</h2>
                    <p>When you click, results related to the topic will appear in the recently added articles box below</p>
                    <div >
                        <ul id="topics">

                            <li title="Anatomy" id="anatomy"><a  aria-label="anatomy" onClick={(e)=> {
                                e.preventDefault();
                                this.props.setSearchTerm("Anatomy")}} href="/anatomy"><b>Anatomy</b></a></li>

                            <li title="Symptoms"  id="Symptom"><a href="/Symptoms" onClick={(e)=> {
                                e.preventDefault();
                                this.props.setSearchTerm("Symptoms")}}><b> Symptoms</b></a></li>

                            <li title="Hormones"  id="hormone"><a onClick={(e)=> {
                                e.preventDefault();
                                this.props.setSearchTerm("Hormones")}} href="/hormones"><b>Hormones</b></a></li>

                            <li title="Disorders" id="disorder"><a onClick={(e)=> {
                                e.preventDefault();
                                this.props.setSearchTerm("Disorders")}} href="/disorders"><b>Disorders</b></a></li>

                            <li title="Menstrual Cycle" aria-label="Menstrual Cycle" id="cycle"><a onClick={(e)=> {
                                e.preventDefault();
                                this.props.setSearchTerm("Menstrual Cycle")}} href="/cycles"><b>Menstrual cycle</b></a></li>
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