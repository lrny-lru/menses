import React from 'react';

import ReactDOM from 'react-dom';



import Main from './src/Main';



it(`should render the SPA without crashing`, ()=>{
    const div = document.createElement('div');

    ReactDOM.render(<Main />, div);
    ReactDOM.unmountComponentAtNode(div);
});

