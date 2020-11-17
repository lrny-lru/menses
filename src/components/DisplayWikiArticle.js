import { Component } from 'react';
import DefaultContext from '../context/DefaultContext';


class DisplayWikiArticle extends Component {
    static contextType = DefaultContext;
   
    


    render(){
        const { name, content, tags } = this.props;
            return(
                <section className="wiki-article" id="wiki-article">
                    <h2 id="display-wiki-name">{name}</h2>
                    <p>{content}</p>
                    <p id="bold-keywords"><b>keywords:</b> {tags}</p>
                </section>
             );
    }

    
}



//TODO add keywords 

export default DisplayWikiArticle;