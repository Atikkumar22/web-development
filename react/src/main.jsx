import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from "./Components/Card.jsx";
import Paragraph from "./Components/Paragraph.jsx";
import CreateTodo from './Components/CreateTodo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Card />
    <Paragraph />
    <CreateTodo />
  </StrictMode>
)
