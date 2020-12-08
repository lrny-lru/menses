import React from 'react';

import ReactDOM from 'react-dom';



import WikiWindow from '../src/components/WikiWindow';



it(`should not crash`, ()=>{
    const div = document.createElement('div');

    ReactDOM.render(<WikiWindow />, div);
    ReactDOM.unmountComponentAtNode(div);
});

