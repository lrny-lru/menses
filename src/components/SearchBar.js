import { Component } from 'react';
import DefaultContext from './context/DefaultContext';


class SearchBar extends Component {
 
  
  
    state = {
    searchInput: ''
    }




    onChange = (e) => {
      const searchInput = this.state;
      console.log(searchInput);

      this.setState({ searchInput: e.target.value });
    }
    

   
    

  render() {
   

    return (
        
      
      <form id="search-bar" onSubmit={(e) => {

        e.preventDefault();
        this.props.setSearchTerm(this.state.searchInput)
        }}>

        <label htmlFor="search-bar" class="hidden"></label>
        <input onChange={(e)=>{
          this.onChange(e);
        }} name="search-bar" type="text" id="search-bar" aria-label="search bar" /><button  type="submit" id="search-submit-button" />
        

      </form>
      
    )
  }

}



export default SearchBar;