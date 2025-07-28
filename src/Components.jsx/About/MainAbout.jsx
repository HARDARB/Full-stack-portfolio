import React from 'react'
import { HomeAbout } from './HomeAbout'
import ParallaxEffect from '../Effects/ParallaxPattern'

export const MainAbout = () => {
  return (
    <div>
      <HomeAbout />

      {/* Background Pattern */}
      <ParallaxEffect />
    </div>
  )
}
