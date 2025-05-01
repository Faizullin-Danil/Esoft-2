import React, { useState } from 'react';
import { useEffect } from 'react';

const Greeting = ({name}) => {
    const [ message, setMessage ] = useState('')

    useEffect(() => {
        if (message === '') {
          setMessage(`Привет, ${name}!`);
        } else {
          setMessage(`Привет, у тебя поменялось имя, теперь ты ${name}!`);
        }
      }, [name]); 
    
    return (
        <h1>{message}</h1>
    );
};

export default Greeting;