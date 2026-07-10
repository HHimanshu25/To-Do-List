import { Link } from 'react-router-dom'

import TaskList from "../component/TaskList";
import Footer from "../component/Footer";
import AddTask from "../component/AddTask";
import React, { useState, useEffect } from 'react'
import Navbar from "../component/Navbar";
import PriorityModel from "../component/Task lable/PriorityModel";
import TimeModel from "../component/Task lable/TimeModel";
import LabelModal from "../component/Task lable/LabelModal";
import Calendar from "../component/Task lable/Calendar";
import TimeModal from "../component/Task lable/TimeModel";

function Home({taskList, setTaskList, form, setForm, id}) {
    // console.log(id)
    const [showFooter, setShowFooter] = useState(false)
   
    return ( 
        <div className="relative flex h-screen max-h-screen flex-col overflow-hidden bg-black text-white scrollbar-none">
            <Navbar />
            <TaskList data={taskList} setdata={setTaskList} id={id} />
            {showFooter ?
                <AddTask
                    setTaskList={setTaskList}                    
                    show={setShowFooter}
                    form={form}
                    user = {id}
                    setForm={setForm}                  
                />
                : <Footer show={setShowFooter} />
            } 
        </div>
    )
}

export default Home