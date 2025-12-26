import Section, { SectionTitle } from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export const metadata = {
  title: '뉴스룸 - DA',
  description: 'DA의 최신 소식과 뉴스를 확인하세요',
}

const allNews = [
  {
    title: '(주)DA, 2025 송년감사인사 성황리에 개최',
    date: '2025.01.15',
    category: '행사',
    content: 'DA가 2025년 송년감사인사를 성황리에 개최했습니다.',
  },
  {
    title: '(주)DA, \'이노비즈데이\'서 일자리 창출 공로로 이노비즈협회장 표창 수상',
    date: '2025.01.10',
    category: '수상',
    content: 'DA가 이노비즈데이에서 일자리 창출 공로로 이노비즈협회장 표창을 수상했습니다.',
  },
  {
    title: 'DA, AI 기반 신차 구매·리스·렌트·중고차 거래… 모빌리티 금융 혁신 선도',
    date: '2025.01.05',
    category: '기술',
    content: 'DA가 AI 기반 모빌리티 금융 혁신을 선도하고 있습니다.',
  },
  {
    title: '(주)DA, 자동차 수출 전문 브랜드 \'투바이어\' 공식 런칭',
    date: '2024.12.20',
    category: '런칭',
    content: 'DA가 자동차 수출 전문 브랜드 투바이어를 공식 런칭했습니다.',
  },
  {
    title: 'DA, 서울 마곡에 \'마곡지점\' 신규 오픈…수도권 서남부 거점 확보',
    date: '2024.11.15',
    category: '오픈',
    content: 'DA가 서울 마곡에 마곡지점을 신규 오픈하여 수도권 서남부 거점을 확보했습니다.',
  },
  {
    title: 'DA, 2024년 매출 525억원 기록… 성장세 이어가',
    date: '2024.10.20',
    category: '실적',
    content: 'DA가 2024년 매출 525억원을 기록하며 지속적인 성장세를 이어가고 있습니다.',
  },
]

export default function NewsPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-white pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            뉴스룸
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            DA의 새로운 소식과 최신 뉴스를 확인하세요
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allNews.map((news, index) => (
            <Card key={index} delay={index * 0.05} className="p-6 hover:border-primary-200 border-2 border-transparent transition-colors">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                  {news.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {news.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {news.content}
              </p>
              <p className="text-sm text-gray-500">{news.date}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}

