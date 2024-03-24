import React from 'react'
import { useContext } from 'react'
import { Mycontext } from './context/Mycontext'

function Mini() {
    const {count,setCount} = useContext(Mycontext);
    
  return (
    <>
    <div className='text-5xl text-center cursor-pointer pt-10' onClick={()=>{setCount("context")}}>{count}</div>
    
    
    </>
  )
}

export default Mini