import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './Components/Home.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'

const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route path="" element={<Home/>}/>
    <Route path="/project" element={<Projects/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>

   </Route>
   )
  )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
