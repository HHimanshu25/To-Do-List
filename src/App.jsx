import Home from "./Pages/Home"
import Edit from "./Pages/Edit"
import {createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {path:'/edit/:id',
      element:<Edit/>
    }
  ])
  return (
    < >
    <RouterProvider router={router}/>
    </>
  )
}
export default App