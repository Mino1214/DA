'use client'

import { motion } from 'framer-motion'
import Section, { SectionTitle } from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const jobOpenings = [
  {
    title: 'DA 영업 신입사원 모집',
    date: '24-07-04',
    type: '정규직',
  },
]

export default function Careers() {
  return (
    <Section className="bg-gradient-to-br from-primary-50 to-white">
      <SectionTitle 
        title="DA와 함께 하고 싶은"
        subtitle="인재를 모집합니다."
        center
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-6 mb-8">
          {jobOpenings.map((job, index) => (
            <Card key={index} delay={index * 0.1} className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{job.date}</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button href="/careers" variant="primary">
                  지원하기
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button href="/careers" variant="outline">
            채용공고 바로가기
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}

