import Section, { SectionTitle } from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { Users, Lightbulb, Handshake } from 'lucide-react'

export const metadata = {
  title: '회사소개 - DA',
  description: '더 나은 미래, 최정상급 노하우. DA는 고객을 최우선으로 생각하는 고객 중심 기업입니다.',
}

export default function AboutPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-white pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            회사소개
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            더 나은 미래, 최정상급 노하우<br />
            DA는 고객을 최우선으로 생각하는 고객 중심 기업입니다.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle 
          title="회사 개요"
          subtitle="오토모빌리티 전문기업 DA"
        />
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            DA는 수 년간 쌓아온 경력으로 고객에게 최고의 경험과 서비스를 제공합니다.
            고객의 니즈를 파악하고 소통을 우선시 하며, 최고의 서비스로 최고의 만족을 드립니다.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            우리는 신차 금융, 중고차 금융, 부동산 금융 등 다양한 금융 서비스를 제공하며,
            고객의 다양한 니즈에 맞춘 맞춤형 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { title: '설립연도', value: '2015', description: '년' },
            { title: '직원 수', value: '100+', description: '명' },
            { title: '고객 수', value: '10,000+', description: '명' },
            { title: '매출', value: '500억+', description: '원' },
          ].map((stat, index) => (
            <Card key={stat.title} delay={index * 0.1} className="p-6 text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mb-1">{stat.description}</div>
              <div className="text-lg font-semibold text-gray-900">{stat.title}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionTitle 
          title="핵심 가치"
          subtitle="DA가 추구하는 가치"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: '고객 중심',
              description: '고객을 최우선으로 생각하며, 고객의 만족을 최우선 가치로 둡니다.',
              icon: Users,
            },
            {
              title: '혁신',
              description: '지속적인 혁신을 통해 최고의 서비스를 제공합니다.',
              icon: Lightbulb,
            },
            {
              title: '신뢰',
              description: '투명하고 정직한 서비스로 고객의 신뢰를 얻습니다.',
              icon: Handshake,
            },
          ].map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card key={value.title} delay={index * 0.1} className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <IconComponent className="w-12 h-12 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </Card>
            )
          })}
        </div>
      </Section>
    </>
  )
}

