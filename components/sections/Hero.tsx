'use client'

import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[700px] lg:min-h-[800px] overflow-hidden pt-0">
      {/* 배경 비디오 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/building.mp4" type="video/mp4" />
        </video>
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
      </div>
      
      {/* 콘텐츠 */}
      <div className="relative z-10 w-full pt-16 sm:pt-28 lg:pt-32 pb-10 sm:pb-20 lg:pb-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[400px] sm:min-h-[700px] lg:min-h-[800px]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
            >
              더 나은 미래,<br />
              최정상급 노하우
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl mb-8 leading-relaxed text-white drop-shadow-md"
            >
              DA는 고객을 최우선으로 생각하는<br />
              고객 중심 기업입니다.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/new-car">신차금융 상담하기</Button>
              <Button href="/about" variant="outline">회사소개</Button>
            </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

