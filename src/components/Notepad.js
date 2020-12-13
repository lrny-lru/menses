import { Component } from 'react';
import './Notepad.css';
import DefaultContext from './components/context/DefaultContext';

class Notepad extends Component {
    static contextType = DefaultContext;
    state =
        {
            store:{ 
             subject: "",
             content: "",
             error: null,
            },
            url:'https://hidden-escarpment-33113.herokuapp.com',
        };

    clearValues = () => {
        this.setState({
            subject: "",
            content: "",
        });
    };


    handleSubmit = (e) => {

        e.preventDefaualt();
        const { subject, content } = this.state;
        this.setState({ error: null });
        const newNote = {
            subject,
            content,
        };
    

        const postOptions = {
            method: "POST",
            headers:

                {
                "Content-type": "application/json",
                Accept: "application/json",
                },

                body: JSON.stringify( newNote ),

            };
            
            fetch( `${this.context.url}//TODO `  ,postOptions)

             .then( r =>{
                 if ( !r.ok ){
                     throw new Error( "Something went wrong, please try again later." );
                 }
                 return r.json();
             })
             .then( newNote =>{ 
                    this.context.addNote( newNote );
                    this.clearValues();
                    this.props.history.push(` /notes `);

             })
             .catch( err =>{
                 this.setState({
                     error: err.message,
                 });
             });
    };

    updateNoteSubject = (noteSubject) => {
        this.setState({
            subject: noteSubject,
        });
    };

    updateNoteContent = (noteContent) => {
        this.setState({
            content noteContent,

        });
    };

    validateNote(){
        const noteSubject = this.state.subject.trim();
        if ( noteSubject.length === 0){
            return "Subject is required";
        
        }else if ( noteSubject.length > 50 ) {
            return "Subject input must be less than 50 characters long."
        }

    }

    render() {
        return (

            <article>
                <td id="note-box">
                    <p>
                        This resource isn't anywhere near complete yet but you can help!
                    </p>
                    <form id="note-form">
                        <textarea />
                    </form>
                </td>
            </article>

        )
    }
}

export default Notepad;