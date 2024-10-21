import React from 'react';
import { ContainerProps } from './Props.types';


const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles} >
      Props for Styling
    </div>
  )
}

export default Container