import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import ErrorPage from './error-page'
import Contact from './routes/contact'
import { loader as rootLoader ,action as rootAction} from './routes/root'
import { loader as contactLoader } from './routes/contact'
import EditContact,{action as editAction} from './routes/edit'
import { destroy } from './routes/destroy'
import Index from './routes'


const router= createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
    loader:rootLoader,
    action:rootAction,
    children:[
      {
        index: true,
        element: <Index/>
      },
      {
        path:'contacts/:contactId',
        element:<Contact/>,
        loader:contactLoader
      },
      {
        action:destroy,
        path:'contacts/:contactId/destroy/',
        errorElement:<p>Oops , there is an error</p>
      },
      {
        path:'contacts/:contactId/edit',
        element:<EditContact/>,
        loader:contactLoader,
        action:editAction
      }
    ]
  },
  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

