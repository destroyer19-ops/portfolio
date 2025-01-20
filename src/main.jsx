import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/', element: <Hero/>},
      {path: 'about', element: <About/>},
      {path: 'projects', element: <Projects/>},
      {path: 'experience', element: <Experience/>},
      {path: '*', element: <NotFound/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
