import TodoList from "../component/TodoList";
import Footer from "../component/Footer";
import AddTask from "../component/AddTask";
import React, { useState, useEffect, act } from 'react'
import Navbar from "../component/Navbar";
import PriorityModel from "../component/Task lable/PriorityModel";
import TimeModel from "../component/Task lable/TimeModel";
import LabelModal from "../component/Task lable/LabelModal";
import Calendar from "../component/Task lable/Calendar";
import TimeModal from "../component/Task lable/TimeModel";

function Home() {
    const [showFooter, setShowFooter] = useState(false)
    const [form, setForm] = useState({})
    const [taskList, setTaskList] = useState(() => {
        const savetask = localStorage.getItem('tasks')
        return savetask ? JSON.parse(savetask) : []
    })


    const [activModal, setActivModal] = useState(null)


    useEffect(() => {
        localStorage.setItem(
            "tasks",
            JSON.stringify(taskList)
        );
    }, [taskList]);

    


    return ( 
        <div className=" h-screen max-h-screen scrollbar-none flex flex-col relative ">
            <Navbar />
            <TodoList data={taskList} setdata={setTaskList} />
            {showFooter ?
                <AddTask
                    data={setTaskList}                    
                    show={setShowFooter}
                    form={form}
                    setForm={setForm}
                    openPriority={() => setActivModal("priority")}
                    openCalendar={() => setActivModal("Calendar")}
                    openTimer = {() => setActivModal("Timer")}
                    openLabel={() => setActivModal("label")}
                />
                : <Footer show={setShowFooter} />
            } 
            {activModal === "priority" && (
                <PriorityModel
                    back={() => setActivModal(null)}
                    form={form}
                    setForm={setForm}

                />
            )}

            {activModal === "Calendar" && (
                <Calendar
                    timer = {()=> setActivModal('Timer')}
                    back = {()=> setActivModal(null)}
                    form={form}
                    setForm={setForm}
                />
            )}
            {activModal === "label" && (
                <LabelModal
                    back={() => setActivModal(null)}
                    form={form}
                    setForm={setForm}
                />
            )}
            {activModal === "Timer" && (
                <TimeModal
                    back ={() => setActivModal(null)}
                    form={form}
                    setForm={setForm}
                />
            )}

        </div>
    )
}

export default Home