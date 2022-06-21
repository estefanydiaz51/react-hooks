import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from './HooksApp'
import './index.css'
// import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <SimpleForm />
  // </React.StrictMode>
)
