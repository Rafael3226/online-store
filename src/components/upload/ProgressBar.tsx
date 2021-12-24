import React from 'react'
import { motion } from 'framer-motion'

const ProgressBar = ({ progress }: { progress: number }) => {
  if (!progress) return <></>
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

export default ProgressBar
