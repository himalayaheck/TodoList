"use client"
import React, { useState } from "react";
const page = () => {
  const [title, settitle] = useState("")
  const [des, setdes] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandlar = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, des }]);
    settitle(" ");
    setdes(" ");
    console.log(mainTask)
  }
  const deleteHandler = (i) => {
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2 className="m-6 text-2xl justify-center">No Task Available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-3  ">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="m-4 text-2xl font-semibold">{t.title}</h5>
            <h6 className="m-4 text-1xl font-semibold">{t.des}</h6>

          </div>
          <button
            onClick={()=>{
              deleteHandler(i)
            }
            }
            className="bg-red-400 rounded text-semibold m-3 px-3 py-2">Delete</button>
        </li>

      );
    });
  }

  return (
    <>
      <h1 className="bg-blue-400 text-center text-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">Todo List</h1>
      <form onSubmit={submitHandlar}>
        <input type="text" className="text-2xl border-4 m-7 px-5 border-pink-600"
          placeholder="Enter title  Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        <input type="text" className="text-2xl border-4 m-7 px-5 border-pink-600"
          placeholder="Enter Description Here"
          value={des}
          onChange={(e) => {
            setdes(e.target.value)
          }}
        />

        <button className="bg-blue-500 text-2xl m-4 px-3 rounded">Add Task</button>


      </form>
      <hr />
      <div className="bg-slate-200 ">
        <ul>
          {renderTask}
        </ul>
      </div>

    </>
  )

}

export default page