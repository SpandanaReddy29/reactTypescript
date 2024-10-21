import React from 'react';
import { ButtonProps } from './Props.types';

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click</button>
    </div>
  )
}

export default Button