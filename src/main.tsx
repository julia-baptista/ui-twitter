//phosphoricons
// npm install phosphor-react
// https://reactrouter.com/en/main/start/tutorial
// npm install react-router-dom localforage match-sorter sort-by

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'


import './global.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
