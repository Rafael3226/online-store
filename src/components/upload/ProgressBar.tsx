import React from 'react'
import useStorage from '../../hooks/useStorage'
import { motion } from 'framer-motion'

const ProgressBar = () => {
  const { progress } = useStorage()
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

export default ProgressBar
