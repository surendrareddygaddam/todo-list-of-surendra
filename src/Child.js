import React from 'react'

const Child = ({todo,addtodo}) => {
    console.log('child is running...')
  return (
    <div>
        {todo.map((i,index)=>{
           return  <li key={index}>{i}</li>
        })}
        <button onClick={addtodo}>Click me</button>
    </div>
  )
}

export default Child