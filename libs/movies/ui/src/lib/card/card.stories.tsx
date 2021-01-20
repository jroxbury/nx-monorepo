
import React from 'react';
import { Card, MovieProps  } from './card';

export default {
  component: Card,
  title: 'Card'
};

export const primary = () => {
  
  
  const props:MovieProps = {
    id:'1',
    title:"The Rock",
    genre:"Action",
    year:"1996",
    runtime:'2hr 5m',
    image:'/the-rock.jpeg',
    onClick: () => {}
  };
  

  return <Card {...props} />;
};