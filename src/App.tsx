import './App.scss'
import React from 'react'

import {Navigation} from './Components/Navigation'
import {Hero} from './Components/Hero'
import {Features} from './Components/Features'
import {Team} from './Components/Team'

function App() {

  return (

    <div className={'siteWrapper'}>
      <Navigation />
      <Hero/>
      <Features/>
      <Team/>
    </div>
  )
}

export default App
