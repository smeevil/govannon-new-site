import {Navigation} from '../../Components/Navigation'
import {Hero} from './Components/Hero'
import {Features} from './Components/Features'
import {Team} from './Components/Team'
import React from 'react'
import {FeaturedImage} from '../../Components/FeaturedImage'

export const Home: React.FC = (): JSX.Element => (

  <React.Fragment>
    <FeaturedImage src={'/bgImages/display.png'}/>
    <div className={'siteWrapper'}>
      <Navigation/>
      <Hero/>
      <Features/>
      <Team/>
    </div>
  </React.Fragment>
)