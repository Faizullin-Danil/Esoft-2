import { useState, useRef } from 'react';
import { useEffect } from 'react';

const Greeting = ({name}) => {
    const prevNameRef = useRef()

    useEffect(() => {
        prevNameRef.current = name
      }, [name]); 
    
    return (
      <h1>
        {prevNameRef.current !== name
          ? `Привет, у тебя поменялось имя, теперь ты ${name}!`
          : `Привет, ${name}!`
        }
      </h1>
        
    );
};

export default Greeting;