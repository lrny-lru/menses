import React from 'react';

const DefaultContext = React.createContext({
    updateStore: () => {},

    url:'https://hidden-escarpment-33113.herokuapp.com'
})

export default DefaultContext;

