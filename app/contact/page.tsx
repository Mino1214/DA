'use client'

import { useState } from 'react'
import Section, { SectionTitle } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직 (추후 구현)
    alert('상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.')
  }

  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 to-white pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            고객센터
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            궁금한 사항이 있으시면 언제든지 문의해주세요
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle 
              title="문의하기"
              subtitle="상담 신청 폼을 작성해주세요"
            />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  연락처 *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  문의 서비스 *
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">선택해주세요</option>
                  <option value="new-car">신차금융</option>
                  <option value="used-car">중고차금융</option>
                  <option value="real-estate">부동산금융</option>
                  <option value="other">기타</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  문의 내용 *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <Button type="submit" variant="primary" className="w-full">
                상담 신청하기
              </Button>
            </form>
          </div>
          
          <div>
            <SectionTitle 
              title="연락처 정보"
              subtitle="다양한 방법으로 연락주세요"
            />
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">전화 상담</h3>
                </div>
                <p className="text-lg text-primary-600 font-semibold mb-2">
                  1833-6220
                </p>
                <p className="text-sm text-gray-600">
                  평일 09시 ~ 18시
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">이메일</h3>
                </div>
                <p className="text-lg text-primary-600 font-semibold mb-2">
                  help@dacar.com
                </p>
                <p className="text-sm text-gray-600">
                  24시간 접수 가능
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">주소</h3>
                </div>
                <p className="text-gray-700">
                  서울 강남구 봉은사로322<br />
                  앨트웰빌딩 6층
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

