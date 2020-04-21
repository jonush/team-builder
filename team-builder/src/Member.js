import React from 'react'

function Member({ details }) {
  if (!details) {
    return <h3>Loading the member&apos;s details...</h3>
  }
  return (
    <div className='profile'>
        <div className='content'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>

        <div>
            <button className='edit'>Edit</button>
        </div>
    </div>
  )
}

export default Member;