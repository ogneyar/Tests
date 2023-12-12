
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home'
import Tutorial from './pages/tutorials/Tutorial'
import Main from './pages/tutorials/Main'
import TransformOnScroll from './pages/tutorials/TransformOnScroll'

import './App.css'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/tutorials",
      element: <Tutorial />,
    },
    {
      path: "/tutorials/main",
      element: <Main />,
    },
    {
      path: "/tutorials/transformOnScroll",
      element: <TransformOnScroll />,
    },
  ])


const App = () => {
  return ( <RouterProvider router={router} /> )
}


export default App
