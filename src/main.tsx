import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import {Home} from './Pages/Home'
import {Infra} from './Pages/Infra'
import {Contact} from './Pages/Contact'
import {Consultancy} from './Pages/Consultancy'
import {Developers} from './Pages/Developers'

 const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/infra',
    element: <Infra/>,
  },
   {
     path: '/contact',
     element: <Contact/>,
   },
   {
     path: '/developers',
     element: <Developers/>,
   },
   {
     path: '/consultancy',
     element: <Consultancy/>,
   },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
