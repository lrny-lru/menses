import React from 'react';

import ReactDOM from 'react-dom';



import Topics from '../components/Topics';



it(`should not crash`, ()=>{
    const div = document.createElement('div');

    ReactDOM.render(<Topics />, div);
    ReactDOM.unmountComponentAtNode(div);
});

