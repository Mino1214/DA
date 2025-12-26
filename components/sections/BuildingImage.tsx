'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'

export default function BuildingImage() {
  return (
    <Section className="bg-white py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl"
      >
        <Image
          src="/building.png"
          alt="DA 건물"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </Section>
  )
}

