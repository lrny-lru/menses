import { Component } from 'react';
import DefaultContext from './context/DefaultContext';
import config from './config';

class SearchBar extends Component {
  static contextType = DefaultContext;
  
  
  state = {
    searchInput: '',
    filter: '',
    topics: []
  }




  onChange = (e) => {



    const searchInput = e.target.search.value;

    const filter = e.target.value;
    this.setState({

      search: searchInput,
      filter: filter,
      error: null,

    })



    fetch(`${config.API_ENDPOINT}/${filter}/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })

      .then(r => {
        if (!r.ok) {
          throw new Error(r.status);
        }
        return r.json();
      })
      .then(result => {
        console.log(result.results);
        this.setState({
          topicsData: result.results
        })
      })
      .catch(error => this.setState({ error }));

  }

  render() {
    const mensesContext ={
      search:this.state.search,
      filter:this.state.filter,
      topicsData: this.state.TopicsData,
      handleOnSubmit: this.handleOnSubmit
    };

    return (
        
      <DefaultContext.Provider value={mensesContext}>
      <form onSubmit={(e) => {
        e.preventDefault();
        this.handleOnSubmit(e.target)
      }}>

        <label htmlFor="search-bar" class="hidden"></label>
        <input name="search-bar" type="text" id="search-bar" aria-label="search bar" />
        <button type="submit" id="search-submit-button" />

      </form>
      </DefaultContext.Provider>
    )
  }

}



export default SearchBar;