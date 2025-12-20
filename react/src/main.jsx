import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Card from "./day2-Components/Card.jsx";
import Paragraph from "./day2-Components/Paragraph.jsx";
import CreateTodo from './day2-Components/CreateTodo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    <Card />
    <Paragraph />
    <CreateTodo />
  </StrictMode>
)
