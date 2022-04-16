import { motion, Variants } from 'framer-motion'
import React, { useEffect, useState } from 'react'

//all 0.3s ease
export default function AnimatedPage({ children }: {children: React.ReactNode}) {
  const [widthBrowse, setWidthBrowse] = useState(document.body.offsetWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidthBrowse(document.body.offsetWidth))
  }, [])

  const animations: Variants = {
    initial: { 
      opacity: 0, translateX: document.body.offsetWidth < 645 ? '' : -(widthBrowse / 10), 
      transitionDuration: '0.3', transitionProperty: 'all'},
    animate: { 
      opacity: 1,  translateX: 0, 
      transitionDuration: '0.3', transitionProperty: 'all'},
    exit: { 
      opacity: 0,  translateX: document.body.offsetWidth < 645 ? '' : (widthBrowse / 10), 
      transitionDuration: '0.3', transitionProperty: 'all'},
  }

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit">
      {children}
    </motion.div>
  )
}

