import Section, { SectionTitle } from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const metadata = {
  title: '부동산금융 - DA',
  description: '국내외 모든 부동산 금융 컨설팅 서비스를 제공하는 부동산 금융 컨설팅 전문 브랜드',
}

export default function RealEstatePage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-white pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            부동산 금융
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            국내외 모든 부동산 금융 컨설팅 서비스를 제공하는 부동산 금융 컨설팅 전문 브랜드 입니다.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle 
          title="부동산 금융 서비스"
          subtitle="다양한 부동산 금융 솔루션을 제공합니다"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: '부동산 구매 대출',
              description: '주택, 상가, 토지 등 다양한 부동산 구매를 위한 대출 상품입니다.',
              features: ['저금리', '장기 상환', '다양한 담보'],
            },
            {
              title: '부동산 개발 금융',
              description: '부동산 개발 프로젝트를 위한 전문 금융 서비스입니다.',
              features: ['프로젝트 파이낸싱', '전문 컨설팅', '리스크 관리'],
            },
            {
              title: '해외 부동산 투자',
              description: '해외 부동산 투자를 위한 전문 컨설팅 및 금융 서비스입니다.',
              features: ['해외 시장 분석', '투자 컨설팅', '세무 자문'],
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
                    <span className="text-black mr-2">✓</span>
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
            부동산 금융 상담 신청
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            전문 상담사가 최적의 부동산 금융 상품을 추천해드립니다.
          </p>
          <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
            무료 상담 신청하기
          </Button>
        </div>
      </Section>
    </>
  )
}

