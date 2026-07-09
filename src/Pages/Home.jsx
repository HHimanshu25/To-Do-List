import { Link } from 'react-router-dom'

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

function Home({taskList, setTaskList, form, setForm}) {
    const [showFooter, setShowFooter] = useState(false)
   
    return ( 
        <div className="relative flex h-screen max-h-screen flex-col overflow-hidden bg-black text-white scrollbar-none">
            <Navbar />
            <TodoList data={taskList} setdata={setTaskList} />
            {showFooter ?
                <AddTask
                    data={setTaskList}                    
                    show={setShowFooter}
                    form={form}
                    setForm={setForm}                  
                />
                : <Footer show={setShowFooter} />
            } 
            {/* {activModal === "priority" && (
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
            )} */}

        </div>
    )
}

export default Home