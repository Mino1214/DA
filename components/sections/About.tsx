'use client'

import { motion } from 'framer-motion'
import Section, { SectionTitle } from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function About() {
  return (
    <Section className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="수 년간 쌓아온 경력으로 고객에게"
            subtitle="최고의 경험과 서비스를 제공합니다."
          />
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            고객의 니즈를 파악하고 소통을 우선시 하며,<br />
            최고의 서비스로 최고의 만족을 드립니다.
          </p>
          <Button href="/about">DA 소개 바로가기</Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {item * 10}+
                </div>
                <div className="text-sm text-gray-600">경력</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

