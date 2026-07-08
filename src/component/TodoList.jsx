import React, { useEffect, useState } from 'react'
import TaskList from './TaskList'
import Navbar from './Navbar'
import Footer from './Footer'
import AddTask from './AddTask'

// import { createLogger } from 'vite'

function TodoList({ data, setdata }) {

    const [search, setSearch] = useState('')
    const [update, setUpdate] = useState('')
    const [searchData, setSearchData] = useState(data)

    const searchHandle = (e) => {
        const value = e.target.value.toLowerCase();

        setSearch(value);

        setSearchData(
            data.filter(ele =>
                ele.title.toLowerCase().includes(value)
            )
        );
        setTimeout(() => {
            console.log(searchData)
        }, 100);
    };
    useEffect(() => console.log(searchData), [searchData])
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
        <div className='flex min-h-0 w-full flex-1 flex-col bg-black px-4 py-3'>
            {data.length === 0 ?
                (<div className='flex h-full w-full flex-col items-center justify-center gap-2 px-3 text-center'>
                    <div className='text-lg font-medium'>What do you want to do today?</div>
                    <div className='text-sm text-gray-400'>Tap + to add your tasks</div>
                </div>)
                :
                (<>
                    <div className='mt-2 flex items-center rounded-md border border-gray-400 bg-[rgb(29,29,29)] p-3 text-white'>
                        <span className="material-symbols-outlined text-gray-400">search</span>
                        <input type="text" name='search' value={search} onChange={searchHandle} placeholder='Search for your task...' className='mx-2.5 flex-1 border-none bg-transparent text-sm outline-none' />
                    </div>
                    <select name="day" id="" className='mt-4 w-fit rounded bg-[rgb(54,54,54)] p-2 text-sm text-white'>
                        <option value="today">Today</option>
                    </select>
                    <div className='mt-4 min-h-0 overflow-y-auto pb-20 scrollbar-none'>
                        <TaskList data={searchData} oncheck={DoneHandle} con={false} />
                        <select name="day" id="" className='my-4 w-fit rounded bg-[rgb(54,54,54)] p-2 text-sm text-white'>
                            <option value="today">Complete</option>
                        </select>

                        <TaskList data={searchData} oncheck={DoneHandle} con={true} />

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
