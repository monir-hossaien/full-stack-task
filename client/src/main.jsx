import { createRoot } from 'react-dom/client'

//external css file
import "/src/assets/css/common.css"
import "/src/assets/css/main.css"
import './index.css'

import 'react-loading-skeleton/dist/skeleton.css'

import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";
import {AuthProvider} from "./context/auth.context.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
      </AuthProvider>
  </QueryClientProvider>
)
