import React from 'react'
import { HeroArticle } from './HeroArticle'
import { Footer } from '../Footer'
import ParallaxEffect from '../Effects/ParallaxPattern'

export const MainArticle = () => {
  return (
    <div>
      <HeroArticle />
      <Footer />

      {/* Background Pattern */}
      <ParallaxEffect />
    </div>
  )
}
