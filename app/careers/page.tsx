import Section, { SectionTitle } from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

export const metadata = {
  title: '채용공고 - DA',
  description: 'DA와 함께 성장할 인재를 모집합니다',
}

const jobOpenings = [
  {
    title: 'DA 영업 신입사원 모집',
    date: '24-07-04',
    type: '정규직',
    location: '서울 강남구',
    experience: '신입',
    description: '고객 상담 및 금융 상품 판매를 담당할 영업 신입사원을 모집합니다.',
  },
  {
    title: 'DA 마케팅 담당자 모집',
    date: '24-07-10',
    type: '정규직',
    location: '서울 강남구',
    experience: '경력 3년 이상',
    description: '디지털 마케팅 및 브랜드 관리 업무를 담당할 마케팅 담당자를 모집합니다.',
  },
  {
    title: 'DA 개발자 모집',
    date: '24-07-15',
    type: '정규직',
    location: '서울 강남구',
    experience: '경력 2년 이상',
    description: '웹 서비스 개발 및 유지보수를 담당할 개발자를 모집합니다.',
  },
]

export default function CareersPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-white pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            채용공고
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            DA와 함께 성장할 인재를 모집합니다
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle 
          title="채용 공고"
          subtitle="DA와 함께 미래를 만들어가세요"
        />
        
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <Card key={index} delay={index * 0.1} className="p-8">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {job.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {job.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.experience}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {job.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button href="/contact" variant="primary">
                    지원하기
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            DA와 함께하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            더 많은 채용 정보는 고객센터로 문의해주세요.
          </p>
          <Button href="/contact" variant="outline" className="text-lg px-8 py-4">
            문의하기
          </Button>
        </div>
      </Section>
    </>
  )
}

