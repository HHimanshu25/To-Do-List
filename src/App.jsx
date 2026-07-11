import Home from "./Pages/Home"
import Edit from "./Pages/Edit"
import Calendar from "./Pages/Calendar_Page";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./component/ProctecdProceed";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";



function App() {

// useEffect(()=>{
//   localStorage.removeItem('tasks')
// },[])
  const [form, setForm] = useState({})
  const [taskList, setTaskList] = useState(() => {
    const savetask = localStorage.getItem('tasks')
    return savetask ? JSON.parse(savetask) : []
  })
  
  const [userinfo, setUserInfo] = useState(() => {
    try {
      const savedUser = localStorage.getItem('user')
      return savedUser ? JSON.parse(savedUser) : []
    } catch {
      return []
    }
  })
  
  const liveUserData = localStorage.getItem('user_data')
  const live_user = liveUserData ? JSON.parse(liveUserData) : null
  const id = live_user?.id
  const name = live_user?.name
  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(taskList)
    );
  }, [taskList]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userinfo))
  }, [userinfo])


  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login userinfo={userinfo} setUserinfo={setUserInfo} />,
    },
    {
      path: "/register",
      element: <Register userinfo={userinfo} setUserinfo={setUserInfo} />,
    },

    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home
            taskList={taskList}
            id={id}
            setTaskList={setTaskList}
            form={form}
            setForm={setForm}
          />
        </ProtectedRoute>
      ),
    },
    {
      path: "/calendar",
      element: (
        <ProtectedRoute>
          <Calendar
            taskList={taskList}
            id={id}
            setTaskList={setTaskList}
            form={form}
            setForm={setForm}
          />
        </ProtectedRoute>
      ),
    },
    {
      path: "/edit/:id",
      element: (
        <ProtectedRoute>
          <Edit
            taskList={taskList}
            setTaskList={setTaskList}
            form={form}
            setForm={setForm}
          />
        </ProtectedRoute>
      ),
    },
    {
      path: "/profile",
      element: (
        <ProtectedRoute>
          <Profile userinfo={userinfo} setUserInfo={setUserInfo} name={name} id={id}/>
        </ProtectedRoute>
      ),
    },
  ]);


  return (
    < >
      <RouterProvider router={router} />
    </>
  )
}
export default App