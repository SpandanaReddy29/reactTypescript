import React from 'react';
import { PersonListProps } from './Props.types';

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.name.map((ele) => {
        return (
         <h2 key={ele.first}>{ ele.first} {ele.last}</h2>
        )
      })}
    </div>
  )
}

export default PersonList