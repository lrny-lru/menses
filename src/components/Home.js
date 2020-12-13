import React, { Component } from "react";



class Home extends Component{
    render(){
        return(
            <div className="welcome-container">
             <h1 title="Welcome to menses" aria-label="Welcome to menses"  id="welcome">Welcome to (me)nses</h1>
                <section classname="landing-container">
                    
                    <label aria-label="What is menses?"><h3>What is (me)nses?</h3></label>
                    <p id="whatis">
                        Menses is a wiki dedicated to cultivating up-to-date knowledge on: the menstrual cycle, sex hormones, anatomy and disorders/diseases related to menses without using gendered language. 
                    </p>
                </section>
               
            
            </div>
            


                 

        );
    }
}


//state is a global place to hold information


export default Home;
