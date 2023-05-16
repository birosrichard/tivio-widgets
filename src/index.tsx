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
import { ErrorScreen } from './components/ErrorScreen'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorScreen />,
  },
  {
    path: '/tivio/*',
    element: <Tivio />
  }
])

root.render(
  <>
    <TivioProvider conf={{
      secret: 'ZuUF7JGu8Poqy7E8k5fx',
      language: LangCode.CS,
      currency: 'CZK',
      // @ts-ignore
      bundleUrlOverride: 'http://localhost:3000/core-react-dom-bundle/index.js',
    }}>
      <RouterProvider router={router} />
    </TivioProvider>
  </>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
