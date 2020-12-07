import { Component } from 'react';




class DisplayWikiArticle extends Component {
   

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
                    <span  title="Click to expand" aria-label="click to expand" ><h3 tabindex="0"        onClick={(e)=>this.togglePanel(e)} id="display-wiki-name">{name}</h3></span>
                    {this.state.open ? ( 
                        <p id="content">{content}</p>) : null}
                    
                    <p id="bold-keywords"><b>keywords:</b> {tags}</p>
                </section>
                
             );
    }

    
}



//TODO add keywords 

export default DisplayWikiArticle;