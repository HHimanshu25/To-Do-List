import React, { useEffect, useState } from 'react'
import TaskList from './TaskList'
import Navbar from './Navbar'
import Footer from './Footer'
import AddTask from './AddTask'

// import { createLogger } from 'vite'

function TodoList({ data, setdata }) {

    const [search, setSearch] = useState('')
    const [update, setUpdate] = useState('')


    const searchHandle = (e) => {
        setSearch(e.target.value)
    }

    const DoneHandle = (id) => {
        setdata((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, done: !task.done }
                    : task
            )
        );
    };

    return (
        <div className=' min-h-0 flex-1 bg-black w-full p-1.5 flex flex-col'>
            {data.length === 0 ?
                (<div className='w-full h-full flex flex-col justify-center items-center gap-2'>
                    <div className='text-2xl'>What do you want to do today?</div>
                    <div className=''>Tap + to add your tasks</div>
                </div>)
                :
                (<>
                    <div className='seach-box bg-[rgb(29,29,29)] border rounded- border-gray-400 text-white p-2 mt-4 flex items-center rounded-md'>
                        <span className="material-symbols-outlined text-gray-400 ">search</span>
                        <input type="text" name='search' value={search} onChange={searchHandle} placeholder='Search for your task...' className='outline-none border-none text-xl mx-2.5' />
                    </div>
                    <select name="day" id="" className='text-white bg-[rgb(54,54,54)] mt-5 p-2 rounded w-fit'>
                        <option value="today">Today</option>
                    </select>
                    <div className='min-h-0 overflow-y-auto scrollbar-none pb-20 mt-5'>
                        <TaskList data={data} oncheck={DoneHandle} con={false} />
                        <select name="day" id="" className='text-white bg-[rgb(54,54,54)] my-5 p-2 rounded w-fit'>
                            <option value="today">Complete</option>
                        </select>
                        <TaskList data={data} oncheck={DoneHandle} con={true} />
                    </div>
                </>)
            }
        </div>

    )
}

export default TodoList





















{/* {
    data.map(ele => {
        if (!ele.done) {
            return <TaskList key={ele.id} task={ele} oncheck={DoneHandle} />
        }
        return null
    })
} */}
{/* <select name="status" id="" className='text-white bg-[rgb(54,54,54)] mt-5 p-2 rounded w-fit'>
    <option value="complete">Complete</option>
</select> */}
{/* {
    taskList.map(ele => {
        if (ele.done) {
            return <TaskList key={ele.id} task={ele} oncheck={DoneHandle} />
        }
        return null
    })
} */}
