import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Assets/Styles/index.scss"
import 'react-toastify/dist/ReactToastify.css';
import { Router } from "./Routes"
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </RecoilRoot>
  </React.StrictMode>
)
