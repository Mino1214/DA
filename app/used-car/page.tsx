import Section, { SectionTitle } from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata = {
  title: '중고차금융 - DA',
  description: '중고차를 가장 합리적인 가격으로 안전하게 구매할 수 있는 중고차 전문 브랜드',
}

export default function UsedCarPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-white pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            중고차 금융
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            중고차를 가장 합리적인 가격으로 안전하게 구매할 수 있는 중고차 전문 브랜드 입니다.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle 
          title="중고차 금융 서비스"
          subtitle="안전하고 합리적인 중고차 구매를 지원합니다"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: '중고차 구매 대출',
              description: '중고차 구매를 위한 전용 대출 상품입니다.',
              features: ['저금리', '빠른 심사', '다양한 상환 기간'],
            },
            {
              title: '중고차 검수 서비스',
              description: '전문가가 직접 검수하는 안전한 중고차입니다.',
              features: ['전문 검수', '사고 이력 확인', '품질 보증'],
            },
            {
              title: '중고차 판매 대행',
              description: '중고차 판매를 전문가가 대행해드립니다.',
              features: ['최고가 보장', '빠른 매도', '전문 상담'],
            },
          ].map((service, index) => (
            <Card key={service.title} delay={index * 0.1} className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="text-primary-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" className="w-full">
                상담 신청하기
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            중고차 금융 상담 신청
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            전문 상담사가 최적의 중고차 금융 상품을 추천해드립니다.
          </p>
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            무료 상담 신청하기
          </Button>
        </div>
      </Section>
    </>
  )
}

