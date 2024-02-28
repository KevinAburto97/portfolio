import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Banner from './components/Banner'
import Box from '@mui/material/Box';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <Box sx={{textAlign: 'center'}}>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </Box>
  )
}

export default App
