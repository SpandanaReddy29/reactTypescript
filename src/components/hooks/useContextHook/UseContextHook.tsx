import React from 'react'
import { ThemeContextProvider } from './ThemeContext';
import { UserContextProvider } from './UserContext';
import Box from './Box';
import User from './User';

const UseContextHook = () => {
  return (
    <div>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  )
}

export default UseContextHook