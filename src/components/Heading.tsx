import React from 'react';
import { HeadingProps } from './Props.types';

const Heading = (props: HeadingProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Heading