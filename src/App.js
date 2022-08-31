import React, { useState } from 'react'
import Topbar from './Components/topbar/Topbar'
import Intro from './Components/intro/Intro';
import Portfolio from './Components/potfolio/Portfolio'
import Works from './Components/works/Works';
import Skill from './Components/skills/Skill';
import './App.scss';
import Menu from './Components/menu/Menu';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='app'>
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro/>
        <Portfolio/>
        <Works/>
        <Skill/>
      </div>
    </div>
  );
}

export default App