import React from 'react';

const DefaultContext = React.createContext({

    notes:[],
    updateStore: () => {},

    url:'https://oopsiedaisies.herokuapp.com '
})

export default DefaultContext;

