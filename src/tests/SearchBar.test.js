import React from 'react';

import ReactDOM from 'react-dom';



import SearchBar from '../src/SearchBar';



it(`should not crash`, ()=>{
    const div = document.createElement('div');

    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
});

