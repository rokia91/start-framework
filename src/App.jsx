
import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Contacts from './Components/Contacts/Contacts'
import Portfolio from './Components/Portfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import '@fortawesome/fontawesome-free/css/all.min.css'


let x = createBrowserRouter([
  {
    path: '', 
    element: <Layout />, 
    children: [
      { index:true, element: <Home /> },
      {path: 'Home', element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'about', element: <About /> },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}
export default App
