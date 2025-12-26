import Link from 'next/link'

const footerLinks = [
  { label: '이용약관', href: '/terms' },
  { label: '개인정보 처리방침', href: '/privacy' },
  { label: '이메일무단수집거부', href: '/email-policy' },
  { label: '금융소비자보호', href: '/consumer-protection' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">DA</h3>
            <p className="text-sm">
              더 나은 미래, 최정상급 노하우<br />
              고객을 최우선으로 생각하는<br />
              고객 중심 기업입니다.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/new-car" className="hover:text-white transition-colors">신차금융</Link></li>
              <li><Link href="/used-car" className="hover:text-white transition-colors">중고차금융</Link></li>
              <li><Link href="/real-estate" className="hover:text-white transition-colors">부동산 금융</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">회사소개</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">뉴스룸</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">채용공고</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">고객센터</Link></li>
              <li className="text-sm">상담전화: 1833-6220</li>
              <li className="text-sm">평일 09시~18시</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex flex-wrap gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="text-center md:text-right">
              <p>대표: 지근혁 | 사업자등록번호: xxx-xx-xxxxx</p>
              <p>메일: xxx@xxx.xxx</p>
              <p>주소: xxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>COPYRIGHT (C) DA. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

