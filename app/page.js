"use client"
import React, { useState } from 'react'
import { render } from 'react-dom'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title , desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
    
  }
  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length>0){
  renderTask = mainTask.map((t,i)=>{
    return <li>
      <div className='flex justify-between mb-5'>
      <h4 className='text-2xl font-semibold'>{t.title}</h4>
      <h5 className='text-xl font-semibold'>{t.desc}</h5>
    </div>
    </li>
  })}

  
  return (
    <>
    <h1 className='bg-black text-white p-5 text-xl font-bold text-center'>Dev's TodoList</h1>
    
    <form onSubmit={submitHandler}>

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
    <hr></hr>
    <div className='p-8 bg-slate-100'>
      <ul>
        {renderTask}
      </ul>
    </div>


    </>
  )
}

export default page