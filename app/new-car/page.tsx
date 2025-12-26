import Section, { SectionTitle } from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata = {
  title: '신차금융 - DA',
  description: '신차구매를 가장 합리적인 가격으로 제안하는 신차 렌트 전문 브랜드',
}

export default function NewCarPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-white pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            신차 금융
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            신차구매를 가장 합리적인 가격으로 제안하는 신차 렌트 전문 브랜드 입니다.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle 
          title="신차 금융 서비스"
          subtitle="다양한 신차 구매 옵션을 제공합니다"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: '신차 렌트',
              description: '최신 모델의 신차를 합리적인 가격에 렌트하세요.',
              features: ['저렴한 월 렌트비', '최신 모델', '유지보수 포함'],
            },
            {
              title: '신차 리스',
              description: '기업 고객을 위한 신차 리스 서비스입니다.',
              features: ['세금 혜택', '자본 효율성', '전문 상담'],
            },
            {
              title: '신차 구매 대출',
              description: '신차 구매를 위한 맞춤형 대출 상품입니다.',
              features: ['저금리', '빠른 승인', '다양한 상환 옵션'],
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
            신차 금융 상담 신청
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            전문 상담사가 최적의 금융 상품을 추천해드립니다.
          </p>
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            무료 상담 신청하기
          </Button>
        </div>
      </Section>
    </>
  )
}

