import React from 'react'
import { motion } from "framer-motion"

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-24 h-24 md:w-32 md:h-32 mx-auto"
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#E0E7FF" />
        <path
          d="M50 10 L90 90 L10 90 Z"
          fill="none"
          stroke="#4F46E5"
          strokeWidth="4"
        />
        <circle cx="50" cy="45" r="5" fill="#4F46E5" />
        <motion.circle
          cx="50"
          cy="70"
          r="5"
          fill="#4F46E5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>
    </motion.div>
  )
}