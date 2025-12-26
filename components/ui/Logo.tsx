'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export default function Logo({ className = '', width = 120, height = 40 }: LogoProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center"
      >
        {/* 로고 이미지가 있으면 사용, 없으면 텍스트로 표시 */}
        <div className="relative" style={{ width, height }}>
          {!imageError ? (
            <Image
              src="/logo.png"
              alt="DA 로고"
              width={width}
              height={height}
              className="object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="text-2xl font-bold text-primary-600 flex items-center justify-center h-full">
              DA
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  )
}

