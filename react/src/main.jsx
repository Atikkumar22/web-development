import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Card from "./day2-Components/Card.jsx";
import Paragraph from "./day2-Components/Paragraph.jsx";
import CreateTodo from './day2-Components/CreateTodo.jsx';

import Nav from './day3-structures/navbar/Nav.jsx';
import Hero from './day3-structures/hero section/Hero.jsx';
import Middle from './day3-structures/middle section/Middle.jsx';
import Services from './day3-structures/services/Services.jsx';
// import './day3.css'

import Prop from './day4-prop drilling/Prop.jsx';
import Footer from './day4-prop drilling/Footer.jsx';
import MainPage from './day4-prop drilling/MainPage.jsx';
import Apps from './day4-prop drilling/Apps.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    {/* DAY2 */}
    {/* <Card />
    <Paragraph />
    <CreateTodo /> */}

    {/* DAY3 */}
    {/* <Nav />
    <Hero />
    <Middle />
    <Services /> */}

    {/* DAY4 */}
    <Prop />
    <Footer />
    <MainPage />
    <Apps />

  </StrictMode>
)
