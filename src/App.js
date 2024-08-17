import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

const App = () => {
  const [count,setCount]=useState(0)
  const [todo,setTodo]=useState(['helllo','ramya','you'])
  const data = useMemo(()=>expenseCalculation(10),[])

  const addtodo = useCallback(()=>{
    setTodo((p)=>[...p,'this is new'])
  },[todo])
    return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>INcrment</button>
      {data}
      <Child todo={todo} addtodo={addtodo}/>
    </div>
  )
}

export default App

const expenseCalculation=(num)=>{
 console.log('calculating....') 
  for(let i=0;i<10000000;i++){
    num+=i
  }
  return num
}