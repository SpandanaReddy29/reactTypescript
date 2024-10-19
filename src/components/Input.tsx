import React from 'react'
import { InputProps } from './Props.types'

const Input = ({value, handleChange}: InputProps) => {

  const handleInputChange = (event: React.ChangeEventHandler<HTMLInputElement>) => {
    console.log(event)
  }

  return (
    <div>
      <input
        type='text'
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input