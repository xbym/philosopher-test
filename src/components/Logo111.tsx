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
        {/* 猫头轮廓 */}
        <path
          d="M50 10 
             C30 10 10 30 10 50 
             C10 70 30 90 50 90 
             C70 90 90 70 90 50 
             C90 30 70 10 50 10
             M30 30 Q20 20 30 10 
             M70 30 Q80 20 70 10"
          fill="#FFD700"
          stroke="#4A4A4A"
          strokeWidth="2"
        />
        
        {/* 猫眼睛 */}
        <circle cx="35" cy="40" r="5" fill="#4A4A4A" />
        <circle cx="65" cy="40" r="5" fill="#4A4A4A" />
        
        {/* 问号 */}
        <path
          d="M45 55 Q50 65 55 55 Q60 45 50 45 Q40 45 45 55
             M50 70 L50 75"
          fill="none"
          stroke="#4A4A4A"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* 测试卷角 */}
        <path
          d="M70 70 L80 70 L80 80 Z"
          fill="#FFFFFF"
          stroke="#4A4A4A"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  )
}