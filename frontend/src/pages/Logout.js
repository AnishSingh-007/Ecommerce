import React from 'react'

const Logout = () => {
    const removeUser = localStorage.removeItem('token');
  return (
    <div>Logout</div>
  )
}

export default Logout