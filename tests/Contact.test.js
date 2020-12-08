import React from 'react';

import ReactDOM from 'react-dom';



import Contact from '../src/components/Contact';



it(`should not crash`, ()=>{
    const div = document.createElement('div');

    ReactDOM.render(<Contact />, div);
    ReactDOM.unmountComponentAtNode(div);
});

