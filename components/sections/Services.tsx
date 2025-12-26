'use client'

import Section, { SectionTitle } from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Car, CarFront, Building2 } from 'lucide-react'

const services = [
  {
    title: '신차 금융',
    description: '신차구매를 가장 합리적인 가격으로 제안하는 신차 렌트 전문 브랜드 입니다.',
    icon: Car,
    href: '/new-car',
  },
  {
    title: '중고차 금융',
    description: '중고차를 가장 합리적인 가격으로 안전하게 구매할 수 있는 중고차 전문 브랜드 입니다.',
    icon: CarFront,
    href: '/used-car',
  },
  {
    title: '부동산 금융',
    description: '국내외 모든 부동산 금융 컨설팅 서비스를 제공하는 부동산 금융 컨설팅 전문 브랜드 입니다.',
    icon: Building2,
    href: '/real-estate',
  },
]

export default function Services() {
  return (
    <Section className="bg-white">
      <SectionTitle 
        title="오토모빌리티 전문기업"
        subtitle="DA의 지속 가능한 미래"
        center
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <Card key={service.title} delay={index * 0.1} className="p-8">
              <div className="mb-4">
                <IconComponent className="w-12 h-12 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            <Button href={service.href} variant="outline" className="w-full">
              자세히 보기
            </Button>
          </Card>
          )
        })}
      </div>
    </Section>
  )
}

