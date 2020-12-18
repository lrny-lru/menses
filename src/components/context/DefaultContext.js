import React from 'react';

const DefaultContext = React.createContext({
    updateStore: () => {},

    url:'https://oopsiedaisies.herokuapp.com '
})

export default DefaultContext;

