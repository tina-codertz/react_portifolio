import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import {Footer} from './components/Footer'
import { About } from './components/About'
import {Skills} from './components/Skills'
import {Projects} from './components/Projects'
import {Contacts} from './components/Contacts'

const App = () => {
  return (
    <div className='min-h-screen'>

      {/* fixed navigation. bar */}
      <Navbar/>


      <main>
       <Hero/>
       <About/>
       <Skills/>
       <Projects/>
       <Contacts/>
      </main>


      {/* footer */}
      <Footer/>
     
    </div>
  );
}

export default App