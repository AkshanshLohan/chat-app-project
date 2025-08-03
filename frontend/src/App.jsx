import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter ,RouterProvider}  from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
const router=createBrowserRouter(
  [{
    path:"/",
    element:<HomePage/>
  },
{
  path: "/login",
  element:<Login/>
},
{
  path:"/register",
  element:<Signup/>
}]
)

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
