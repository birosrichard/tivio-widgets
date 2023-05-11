import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { LangCode, TivioProvider } from '@tivio/sdk-react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './routes/Root'
import Tivio from './routes/Tivio'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div><h1>Error occured</h1></div>,
  },
  {
    path: '/tivio/*',
    element: <Tivio />
  }
])

root.render(
  <TivioProvider conf={{
    secret: 'pdvtvM4PCofoVav0AHGe',
    language: LangCode.CS,
    currency: 'CZK'
  }}>
    <RouterProvider router={router} />
  </TivioProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
