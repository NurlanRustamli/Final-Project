import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { globalState } from './redux/store'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScroolToTop from './provider/scroolToTop'
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={globalState}>
    <BrowserRouter>
   
        <App />

    </BrowserRouter>
  </Provider>

)
