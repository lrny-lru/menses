import React from 'react';

import ReactDOM from 'react-dom';



import SearchBar from '../components/SearchBar';



it(`should not crash`, ()=>{
    const div = document.createElement('div');

    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
});

