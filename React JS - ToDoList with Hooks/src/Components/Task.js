import React from 'react'

export default function Task({taskName}) {
  return (
    <div className='task'>
        <h1>Today's Task : {taskName}</h1>
    </div>
  )
}
