import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Component/Layout.jsx'
import Home from './Component/Home.jsx'
import Contact from './Component/Contact.jsx'
import About from './Component/About.jsx'
import Work from './Component/Work.jsx'

const router = createBrowserRouter( [
{
  path : '/',
  element:<Layout />,
  children : [
    {
      path:'home',
      element:<Home />
    },
    {
      path:'about',
      element:<About />
    },
    {
      path:'work',
      element:<Work />
    },
    {
      path:'contact',
      element:<Contact />
    }
  ]
}
   

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
