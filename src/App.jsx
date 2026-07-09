import Home from "./Pages/Home"
import Edit from "./Pages/Edit"
import Calendar from "./Pages/Calendar_Page";
import Profile from "./Pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";



function App() {


   const [form, setForm] = useState({})
      const [taskList, setTaskList] = useState(() => {
          const savetask = localStorage.getItem('tasks')
          return savetask ? JSON.parse(savetask) : []
      })
  
      useEffect(() => {
          localStorage.setItem(
              "tasks",
              JSON.stringify(taskList)
          );
      }, [taskList]);
  
      
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home taskList={taskList} setTaskList={setTaskList} form={form} setForm={setForm}/>
    },
    {
      path:'/calendar',
      element:<Calendar taskList={taskList} setTaskList={setTaskList} form={form} setForm={setForm}/>
    },
    {
      path: '/edit/:id',
      element: <Edit taskList={taskList} setTaskList={setTaskList} form={form} setForm={setForm} />
    },
    {
      path:'/profile',
      element:<Profile/>
    }
  ])
  return (
    < >
      <RouterProvider router={router} />
    </>
  )
}
export default App