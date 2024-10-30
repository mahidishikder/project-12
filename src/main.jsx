import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Service from './components/Service/Service.jsx'
import Contact from './components/Contact/Contact.jsx'
import Blog from './components/Blog/Blog.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,

    children:[
      {
        path:'/home',
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },

      {
        path:'/service',
        element: <Service></Service>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },

      {
        path:'/blog',
        element: <Blog></Blog>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
