import Home from "./Pages/Home"
import Edit from "./Pages/Edit"
import Calendar from "./Pages/Calendar_Page";
import Profile from "./Pages/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path:'/calendar',
      element:<Calendar/>
    },
    {
      path: '/edit/:id',
      element: <Edit />
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