import React from 'react'
import { HeroProject } from './HeroProject'
import { Footer } from '../Footer'
import ParallaxEffect from '../Effects/ParallaxPattern'

export const MainProject = () => {
  return (
    <div>
      <HeroProject />
      <Footer />

      {/* Background Pattern */}
      <ParallaxEffect />
    </div>
  )
}
