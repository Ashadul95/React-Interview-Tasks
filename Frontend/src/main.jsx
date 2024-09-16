import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp.jsx'
import LogIn from './components/LogIn.jsx'
import Dashboard from './components/Dashboard.jsx'
import About from './components/About.jsx'
import Service from './components/Service.jsx'
import Contact from './components/Contact.jsx'
import ProtectedComponent from './components/ProtectedComponent.jsx'
import ContextProvider from './context/contextProvider.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedComponent>
            <Dashboard />
          </ProtectedComponent>
        ),
        children: [
          { path: "about", element: <About /> },
          { path: "service", element: <Service /> },
          { path: "contact", element: <Contact /> },
        ]
      },

    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
