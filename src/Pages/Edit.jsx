import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PriorityModel from "../component/Task lable/PriorityModel";
import TimeModal from "../component/Task lable/TimeModel";
import LabelModal from "../component/Task lable/LabelModal";
import Calendar from "../component/Task lable/Calendar";
import Input from '../component/Input'

function Edit() {
    const { id } = useParams();
    const [activModal, setActivModal] = useState(null)
    const [task, setTask] = useState({})
    const data = JSON.parse(localStorage.getItem('tasks')) || []
    useEffect(() =>
        setTask(data.find(ele => ele.id === Number(id)))
        , [])

    const [showBtn, setShowBtn] = useState(false)

    const details = [
        {
            icon: "timer",
            title: "Task Time",
            click: "calendar",
            value: `${task.date ? `${task.date} ${task.month}` : "Today"}${task.time ? ` at ${task.time}` : ""}`,
        },
        {
            icon: task.category?.[0] || "sell",
            title: "Task Category",
            click: "label",
            value: task.category?.[1] || "None",
        },
        {
            icon: "flag",
            title: "Task Priority",
            click: "priority",
            value: task.priority || "Default",
        },
    ];

    function oncheck() {
        setTask({
            ...task,
            done: !task.done
        })
    }

    function SaveTask() {
        const index = data.findIndex(ele => ele.id === Number(id))
        if (index != -1) {

            data[index] = task
            localStorage.setItem('tasks', JSON.stringify(data))
            console.log(data[index])
        }
        window.history.back()
    }

    function DeleteTask() {
        const newData = data.filter(ele => ele.id !== Number(id))
        localStorage.setItem('tasks', JSON.stringify(newData))
        setShowBtn(false)
    }

    return (
        <div className="h-screen max-h-screen w-screen relative bg-[#121212] text-white px-5 py-4 flex flex-col">

            {/* Header */}
            <div className="flex justify-between items-center">
                <button className="w-9 h-9 bg-[#2A2A2A] rounded-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">
                        close
                    </span>
                </button>

                <button className="w-9 h-9 bg-[#2A2A2A] rounded-md flex items-center justify-center">
                    <span className="material-symbols-outlined text-xl">
                        sync
                    </span>
                </button>
            </div>

            {/* Task */}
            <div className="flex items-start gap-4 mt-10">

                <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 appearance-none rounded-full border-2 border-white checked:bg-white cursor-pointer"
                    onChange={() => oncheck()}
                />

                <div className="flex-1">
                    <h2 className="text-xl font-medium">
                        {task.title}
                    </h2>

                    <p className="text-gray-400 mt-1 text-sm">
                        {task.descreption}
                    </p>
                </div>

                <button onClick={() => { setActivModal('input') }}>
                    <span className="material-symbols-outlined text-xl">
                        edit
                    </span>
                </button>

            </div>

            {/* Details */}

            <div className="mt-10 flex flex-col gap-6">
                {details.map((item) => (
                    <div key={item.title} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <span>{item.title} :</span>
                        </div>

                        <button className="bg-[#3A3A3A] text-sm px-4 py-2 rounded-md" onClick={() => setActivModal(`${item.click}`)}>
                            {item.value}
                        </button>
                    </div>
                ))}


            </div>

            {/* Delete */}

            <button className="flex items-center gap-3 text-red-500 mt-10" onClick={()=>setShowBtn(true)}>
                <span className="material-symbols-outlined">
                    delete
                </span>

                Delete Task
            </button>

            {/* Bottom Button */}

            <div className="mt-auto pt-10">

                <button className="w-full bg-[#8B82F8] py-3 rounded-md text-lg font-medium" onClick={() => SaveTask()}>
                    Edit Task
                </button>

            </div>
            {showBtn ?
                (
                    <>
                        <div className=' bg-[rgb(0,0,0,0.7)] h-screen w-screen absolute flex justify-center items-center flex-col z-3 right-0 bottom-0'>
                            <div className='flex justify-center items-center flex-col gap-2 bg-[rgb(36,36,36)] p-5'>
                                <div className='py-2.5  border-b-gray-400 border-b w-full text-center'>Delete Task</div>
                                <div className="text-center text-xl">
                                    Are You sure you want to delete this task?
                                    Task title : Do math homework
                                </div>
                                <div className='flex gap-5 text-2xl mt-5 w-full justify-center'>
                                    <button className=' w-full rounded-sm py-2.5 ' >Cancel</button>
                                    <button className=' w-full rounded-sm py-2.5 bg-[rgb(134,135,231)]' onClick={DeleteTask}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
                : null}
            {activModal === "priority" && (
                <PriorityModel
                    back={() => setActivModal(null)}
                    form={task}
                    setForm={setTask}

                />
            )}

            {activModal === "calendar" && (
                <Calendar
                    timer={() => setActivModal('timer')}
                    back={() => setActivModal(null)}
                    form={task}
                    setForm={setTask}
                />
            )}
            {activModal === "label" && (
                <LabelModal
                    back={() => setActivModal(null)}
                    form={task}
                    setForm={setTask}
                />
            )}
            {activModal === "timer" && (
                <TimeModal
                    back={() => setActivModal(null)}
                    form={task}
                    setForm={setTask}
                />
            )}
            {activModal === "input" && (
                <Input
                    back={() => setActivModal(null)}
                    form={task}
                    setForm={setTask}
                />
            )}
        </div>
    );
}


export default Edit;






// let task = data.find(ele=> ele.id === Number(id))
// useEffect(()=>{
//     setUpdateTask(task)
// },[])

// useEffect(()=>{
//     task = updateTask
// },[updateTask])
