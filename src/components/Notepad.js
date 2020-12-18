import { Component } from 'react';
import './Notepad.css';
import DefaultContext from './context/DefaultContext';

class Notepad extends Component {
    static contextType = DefaultContext;
    state =
        {
            store:{ 
             subject:"",
             content:"",
             error: null,
            },
            url:'https://oopsiedaisies.herokuapp.com',
        };

    clearValues = () => {
        this.setState({
            subject: "",
            content: "",
        });
    };


    handleSubmit = (e) => {

        e.preventDefault();
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
            
            fetch( `${this.state.url}/notes`, postOptions )

             .then( r =>{
                 if ( !r.ok ){
                     throw new Error( "Something went wrong, please try again later." );
                 }
                 return r.json();
             })
             .then( newNote =>{ 
                    this.context.addNote( newNote );
                    this.clearValues();
                    this.props.history.push( `/notes` );

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
            content:noteContent,

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
                    <p id="please-help">
                        This resource is for y'all so feel free to help me complete it! 
                    </p>
                    <section className="notes-section">
					<form
						className="note-form"
						aria-label="note-form"
						onSubmit={(e) => this.handleSubmit(e)}
					>
						<section className="form-section">
							<label htmlFor=""></label>
							<fieldset className="subject-line" aria-label="subject-line">
								<label htmlFor="subject">Subject</label>
								<input
									type="text"
									placeholder="Name of suggestion"
									value={this.state.subject}
									className="subject"
									id="subject"
									onChange={(e) => this.updateNoteSubject(e.target.value)}
									required
								/>
                                <textarea
								
								    id="notebox"
								    placeholder="Ex: Add more info on PCOS or Polycystic Ovary Syndrome"
								    value={this.state.content}
								    rows="15"
								    required
								    onChange={(e) => this.updateNoteContent(e.target.value)}
							        >

                                </textarea>
                                <button className="save-note" type="submit" aria-label="save-note">
							        Submit
						        </button>
							</fieldset>
							
						</section>
						
					</form>
                </section>
                </td>
            </article>

        )
    }
}

export default Notepad;