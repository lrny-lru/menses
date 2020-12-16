import React from 'react';

import ReactDOM from 'react-dom';



import Notepad from '../components/Notepad';



it(`should not crash`, ()=>{
    const div = document.createElement('div');

    ReactDOM.render(<Notepad />, div);
    ReactDOM.unmountComponentAtNode(div);
});

