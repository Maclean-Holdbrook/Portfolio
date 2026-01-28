import './App.css'
import Home from "./Pages/Home"
import Service from './Pages/Service'

import About from "./Pages/About"
import Hire from "./Pages/Contact-me"
import Resume from "./Pages/Resume"
import Projects from "./Pages/Projects"
import Layout from "./Component/Layout"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "projects",
            element: <Projects />
          },
          {
            path: "service",
            element: <Service />
          },

          {
            path: "about",
            element: <About />
          },
          {
            path: "hire",
            element: <Hire />
          },
          {
            path: "resume",
            element: <Resume />
          },
        ]
      }
    ]
  )


  return (
    <>
      <RouterProvider router={router} />

    </>
  )

}

export default App
