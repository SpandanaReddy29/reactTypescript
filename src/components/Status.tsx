import React from 'react';
import { StatusProps } from './Props.types';

const Status = (props: StatusProps) => {

  let message
  if(props.status === 'loading'){
    message = 'Loading...'
  } else if (props.status === 'success'){
    message = 'Data Fetched Successfully'
  } else if (props.status === 'error') {
    message = 'Something Went Wrong! Error Occured'
  };

  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  )
}

export default Status