import { Component } from 'react';
import DefaultContext from './context/DefaultContext';


class DisplayWikiArticle extends Component {
    static contextType = DefaultContext;
    


    seeLess = (content) =>{ 

        
        let sentence = content;
        const maxLength = 300;
        let trimmedString = sentence.substr(0, maxLength);

        if(sentence.length > trimmedString.length){
         trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
         

        

        }
        return trimmedString;
    }

    seeMore = (event) =>{
        event.preventDefault();
        
    }


   

    render(){
        
        const { name, content, tags } = this.props;
            return(
                
                <section className="wiki-article" id="wiki-article">
                    <h3 id="display-wiki-name">{name}</h3>
                    
                    <p id="content">{this.seeLess(content)}</p><button id="seeMore">...</button>
                    <p id="bold-keywords"><b>keywords:</b> {tags}</p>
                </section>
                
             );
    }

    
}



//TODO add keywords 

export default DisplayWikiArticle;