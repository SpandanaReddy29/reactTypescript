import React, {useState} from 'react'

const UseStateHook = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true)
  };

  const handleLogout = () => {
    setLoggedIn(false)
  };

  return (
    <div>
      <button onClick={handleLogin} >Login</button>
      <button onClick={handleLogout} >Logout</button>
      <div>User is {isLoggedIn ? 'Logged In' : 'Logged Out' } </div>
    </div>
  )
}

export default UseStateHook