import { Component } from 'react';
import DisplayWikiArticle from './DisplayWikiArticle';

class WikiWindow extends Component {
    
    populateItems = () => {
        return (
            this.props.store.topics.map((topic) => {
                return (

                    <DisplayWikiArticle
                        key={topic.id}
                        name={topic.title}
                        content={topic.content}
                        tags={topic.keywords}
                        expanded="false"
                    />
                );
            })
        )
    }
    render(){

        return( 
            <section id="container4container">
                <section id="container-for-wikis">
                    <h2>Recently added articles</h2>
                    {this.populateItems(<DisplayWikiArticle />)}
               
                </section>
            </section>
        );
    }

}

export default WikiWindow;