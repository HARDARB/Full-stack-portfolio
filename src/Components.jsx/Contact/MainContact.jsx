import React from 'react'
import { HeroContact } from './HeroContact'
import ParallaxEffect from '../Effects/ParallaxPattern'

export const MainContact = () => {
  return (
    <div>
      <HeroContact />

      {/* Background Pattern */}
      <ParallaxEffect />
    </div>
  )
}
