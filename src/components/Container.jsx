import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import { useEffect } from 'react';
import Greeting from './Greeting';
import Clock from './Clock';
import Header from './Header';

const Container = () => {
    const [name, setName] = useState(faker.person.firstName())

    useEffect(() => {
      const interval = setInterval(() => {
        setName(faker.person.firstName())
      }, 2000)

      return () => clearInterval(interval);
    }, []);
    
    return (
        <div style={{height: '100vh',  width: '100%'}}>
            <Header />
            <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Greeting name={name} />
                <Clock />
            </div>
        </div>  
    );
};

export default Container;