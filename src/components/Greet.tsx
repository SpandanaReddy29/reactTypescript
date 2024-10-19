import React from 'react'
import { GreetProps } from './Props.types';


const Greet = (props: GreetProps) => {

  const {messageCount = 0} = props;

  return (
    <div>
      <h2>
        {props.isLoggedIn ? `Welcome ${props.name}! You have ${messageCount} unread messages` : 'Welcome Guest'}
      </h2>
    </div>
  )
}

export default Greet