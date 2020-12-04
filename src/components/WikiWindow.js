/* eslint-disable eqeqeq */
import { Component } from 'react';
import DisplayWikiArticle from './DisplayWikiArticle';

class WikiWindow extends Component {
    
    populateItems = () => {
        return (
            this.props.store.topics

            .filter((topic) => {
                if( topic.title.includes( this.props.searchTerm ) 
                    || topic.content.includes( this.props.searchTerm )
                    || topic.keywords.includes( this.props.searchTerm ) ){
                    return true;
                }
                return false;
            })
            
            .map((topic) => {
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
                    <h2> {this.props.searchTerm.length==0 ? "Recently added articles" : `Showing results for: ${this.props.searchTerm}`}</h2>
                    {this.populateItems(<DisplayWikiArticle />)}
               
                </section>
            </section>
        );
    }

}

export default WikiWindow;