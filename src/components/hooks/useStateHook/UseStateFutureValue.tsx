import React, {useState} from 'react'

type AuthUser = {
  name: string,
  email: string
}

const UseStateFuturevalue = () => {

  //usestate for future value
  // const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);


  const handleLogin = () => {
    setUser({
      name: 'Spandana',
      email: 'Spandana@gmail.com'
    })
  };

  const handleLogout = () => {
    setUser(null)
  };

  return (
    <div>
      <button onClick={handleLogin} >Login</button>
      <button onClick={handleLogout} >Logout</button>
      <div>User name is {user?.name} </div>
      <div>User email is {user?.email} </div>
    </div>
  )
}

export default UseStateFuturevalue