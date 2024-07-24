"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  return (
    <>
    <h1 className='bg-black text-white p-5 text-xl font-bold text-center'>Dev's TodoList</h1>
    
    <form>
      <input type="text" className='text-xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter Title Here' value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      
      ></input>
    
    <input type="text" className='text-xl border-zinc-800 border-4 m-5 px-4 py-2' placeholder='Enter Discription Here'value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}
    
    
    ></input>

    <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5 '>Add Task</button>
    </form>
    </>
  )
}

export default page