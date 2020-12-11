import React from 'react';

import ReactDOM from 'react-dom';

import Home from '../src/components/Home.js';


it('should render the landing sections without crashing', () =>{
    const div = document.createElement('div');

    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
})