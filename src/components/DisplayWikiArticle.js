import { Component } from 'react';
import DefaultContext from './context/DefaultContext';



class DisplayWikiArticle extends Component {
    static contextType = DefaultContext;

    state={
        open:false
    }
    

    togglePanel= (e)=>{
        this.togglePanel = this.togglePanel.bind(this);

        this.setState({open:!this.state.open})
    }
    


    

    

        
    


   

    render(){
        
        const { name, content, tags } = this.props;
            return(
                
                <section className="wiki-article" id="wiki-article">
                    <h3 onClick={(e)=>this.togglePanel(e)} id="display-wiki-name">{name}</h3>
                    {this.state.open ? ( <p id="content">{content}</p>) : null}
                    
                    <p id="bold-keywords"><b>keywords:</b> {tags}</p>
                </section>
                
             );
    }

    
}



//TODO add keywords 

export default DisplayWikiArticle;