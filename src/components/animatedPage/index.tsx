import { motion } from 'framer-motion'
import React from 'react'

const animations = {
  initial: { opacity: 0},
  animate: { opacity: 1},
  exit: { opacity: 0},
}

export default function AnimatedPage({ children }: {children: React.ReactNode}) {

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

