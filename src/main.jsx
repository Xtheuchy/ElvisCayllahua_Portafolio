import { React, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './header/Header'
import './index.css'
import { Skills } from './Skills/Skills'
import { Projects } from './Projects/Projects'
import { Services } from './services/Services'
import { About } from './About/About'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <section id='inicio'>
      <Header  />
    </section>
    <section id='habilidades'>
      <Skills/>
    </section>
    <section id='Proyectos'>
      <Projects/>
    </section>
    <section id='Services'>
      <Services />
    </section>
    <section id="About">
      <About/>
    </section>
  </StrictMode>,
)
