import React from 'react';

import ReactDOM from 'react-dom';



import DisplayWikiArticle from '../components/DisplayWikiArticle';



it(`should not crash`, ()=>{
    const div = document.createElement('div');

    ReactDOM.render(<DisplayWikiArticle />, div);
    ReactDOM.unmountComponentAtNode(div);
});

