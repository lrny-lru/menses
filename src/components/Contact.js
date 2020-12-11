import React, { Component } from 'react';

class Contact extends Component{
    render(){
        return(
            <div className="Contacts-container">
                <h2>Wanna contact the author?</h2>
                <section className="contacts">
                <a  classNamee="btn btn-email" href="mailto:llaruej@gmail.com">Email</a>
                <a href="https://www.linkedin.com/in/lauren-larue-joyner-41b184133/" className="btn btn-primary">Linkedin</a>
                <a href="https://twitter.com/lrnlru" id="instagram">Twitter</a>
                <a className="github-button" href="https://github.com/lrny-lru" aria-label="Follow @lrny-lru on GitHub">Github</a>
                </section>
            </div>
        );
    }
}

export default Contact;