import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "/src/assets/css/common.css"
import "/src/assets/css/main.css"
import './index.css'

import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <App />
      <ToastContainer
          position="top-right"
          autoClose={5000}
          toastStyle={{
              width:"250px",
              minHeight: '32px',
              fontSize: '14px',
          }}
      />
  </StrictMode>,
)
