'use client'

import Section, { SectionTitle } from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const newsItems = [
  {
    title: '(주)DA, 2025 송년감사인사 성황리에 개최',
    date: '2025.01.15',
    category: '행사',
  },
  {
    title: '(주)DA, \'이노비즈데이\'서 일자리 창출 공로로 이노비즈협회장 표창 수상',
    date: '2025.01.10',
    category: '수상',
  },
  {
    title: 'DA, AI 기반 신차 구매·리스·렌트·중고차 거래… 모빌리티 금융 혁신 선도',
    date: '2025.01.05',
    category: '기술',
  },
  {
    title: '(주)DA, 자동차 수출 전문 브랜드 \'투바이어\' 공식 런칭',
    date: '2024.12.20',
    category: '런칭',
  },
]

export default function News() {
  return (
    <Section className="bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
        <SectionTitle 
          title="DA의 새로운 소식"
          subtitle="News"
        />
        <Button href="/news" variant="outline" className="mt-4 sm:mt-0">
          DA 소식 바로가기
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {newsItems.map((news, index) => (
          <Card key={index} delay={index * 0.1} className="p-4 sm:p-6 hover:border-gray-300 border-2 border-transparent transition-colors">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 text-xs font-semibold rounded-full">
                {news.category}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
              {news.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">{news.date}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

