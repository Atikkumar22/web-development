import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Card from "./day2-Components/Card.jsx";
import Paragraph from "./day2-Components/Paragraph.jsx";
import CreateTodo from './day2-Components/CreateTodo.jsx';

import Nav from './day3-structures/navbar/Nav.jsx';
import Hero from './day3-structures/hero section/Hero.jsx';
import Middle from './day3-structures/middle section/Middle.jsx';
import Services from './day3-structures/services/Services.jsx';
import './day3.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    {/* <Card />
    <Paragraph />
    <CreateTodo /> */}

    <Nav />
    <Hero />
    <Middle />
    <Services />

  </StrictMode>
)
