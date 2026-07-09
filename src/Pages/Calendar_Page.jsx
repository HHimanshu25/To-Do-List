
import React, { useState, useEffect, useRef } from 'react'
import Footer from '../component/Footer';
import TaskList from '../component/TaskList';
import AddTask from '../component/AddTask';
function Calendar_Page({taskList, setTaskList, form, setForm}) {

  // const [form, setForm] = useState({})
  //   const [taskList, setTaskList] = useState(() => {
  //       const savetask = localStorage.getItem('tasks')
  //       return savetask ? JSON.parse(savetask) : []
  //   })

  //   useEffect(() => {
  //       localStorage.setItem(
  //           "tasks",
  //           JSON.stringify(taskList)
  //       );
  //   }, [taskList]);


  const todayRef = useRef(null);
  useEffect(() => {
    todayRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

  }, []);

  const date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth();
  const [task, setTask] = useState(() => {
    const savetask = localStorage.getItem('tasks')
    return savetask ? JSON.parse(savetask) : []
  })
  const [result, setresult] = useState(task)

  const [showFooter, setShowFooter] = useState(false)

  const MONTHS = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

  const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let totalDays = new Date(year, month + 1, 0).getDate();
  let firstDay = new Date(year, month, 1).getDay()
  let days = []
  const today = new Date().getDate();
  useEffect(() => {
    ShowTask(today)
  }, [])
  function ShowTask(value) {
    setresult(task.filter(ele => ele.date === value))
  }
  for (let i = 1; i <= totalDays; i++) {
    days.push(i)
  }

  const [ses, setSes] = useState(date.getDate())

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
    <div className='min-h-0 bg-black h-screen w-screen flex flex-col'>
      <section className='bg-[#363636] p-2.5'>

        <div className='flex justify-between  items-center'>
          <div className='material-symbols-outlined '>arrow_back_ios</div>
          <div>
            <div className='text-xl text-center'>{MONTHS[month]}</div>
            <div className='text-center text-gray-500 text-sm'>{year}</div>
          </div>
          <div className='material-symbols-outlined'>arrow_forward_ios</div>
        </div>

        <div className="flex gap-2.5 text-center overflow-x-auto scrollbar-none">
          {days.map((ele) => {
            const date = new Date(year, month, ele);

            return (
              <div
                key={ele}
                onClick={() => { setSes(ele), ShowTask(ele) }}
                ref={ele === today ? todayRef : null}
                className={`min-w-15 p-2 rounded-md ${ele === ses ? "bg-purple-500" : "bg-[#272727]"
                  }`}
              >
                <div>{WEEK_DAYS[date.getDay()]}</div>
                <div>{ele}</div>
              </div>
            );
          })}
        </div>

      </section >
      <section className='min-h-0 p-5 flex-1 flex flex-col gap-2.5'>
        <div className='bg-[#4c4c4c] flex gap-5 justify-center p-5'>
          <button className=' px-6 py-3 text-xl w-full bg-[rgb(134,135,231)]'>Today</button>
          <button className='border-2 border-gray-500 px-6 py-3 text-xl w-full'>Completed</button>
        </div>
        {result.length === 0 ?
          (<div className='flex h-full w-full flex-col items-center justify-center gap-2 px-3 text-center'>
            <div className='text-lg font-medium'>What do you want to do today?</div>
            <div className='text-sm text-gray-400'>Tap + to add your tasks</div>
          </div>)
          :
          (<>

            <div className='min-h-0 overflow-y-scroll scrollbar-none'>
              <TaskList data={result} oncheck={DoneHandle} con={false} />
            </div>
          </>)
        }
      </section>
      {showFooter ?
                <AddTask
                    data={setTaskList}                    
                    show={setShowFooter}
                    form={form}
                    setForm={setForm}                  
                />
                : <Footer show={setShowFooter} />
            } 
    </div>
  )
}

export default Calendar_Page