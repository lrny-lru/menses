/*import { Component } from 'react';
import DefaultContext from './context/DefaultContext';
import { API_ENDPOINT } from './config';

class SearchBar extends Component{
   
  static contextType = DefaultContext;

  handleOnSubmit = (e)=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const searchVal = form.get("search-bar");
    //referencing input name

    //TODO

    fetch(`{this.DefaultContext.url}/` )
      .then( r => r.json() )
      .then( r => console.log(r))
  }
  

  
  render(){
    return(
      <form onSubmit={ handleOnSubmit }>
        <label htmlFor="search-bar" class="hidden"></label>
        <input name="search-bar" type="text" id="search-bar" aria-label="search bar" />
      
      </form>
    )
}

}



export default SearchBar*/