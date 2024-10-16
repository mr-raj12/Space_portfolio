'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface Props {
  src: string
  width: number
  height: number
  index: number
}

const SkillDataProvider: React.FC<Props> = ({ src, width, height, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const animationDelay = 0.3

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.5 }}
      className="flex items-center justify-center"
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt='skill image'
        className="object-contain"
      />
    </motion.div>
  )
}

export default SkillDataProvider