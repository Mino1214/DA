# 지엔에이 웹사이트

오토모빌리티 전문기업 지엔에이의 공식 웹사이트입니다.

## 기술 스택

- **Next.js 14** - React 프레임워크 (정적 렌더링)
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **Framer Motion** - 애니메이션 라이브러리

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `out` 디렉토리에 생성됩니다.

## 프로젝트 구조

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 전역 스타일
├── components/
│   ├── layout/            # 레이아웃 컴포넌트
│   │   ├── Header.tsx     # 헤더/네비게이션
│   │   └── Footer.tsx     # 푸터
│   ├── sections/          # 페이지 섹션 컴포넌트
│   │   ├── Hero.tsx       # 히어로 섹션
│   │   ├── Services.tsx   # 서비스 소개
│   │   ├── About.tsx      # 회사 소개
│   │   ├── News.tsx       # 뉴스 섹션
│   │   └── Careers.tsx    # 채용 섹션
│   └── ui/                # 재사용 가능한 UI 컴포넌트
│       ├── Section.tsx    # 섹션 래퍼
│       ├── Button.tsx     # 버튼 컴포넌트
│       └── Card.tsx       # 카드 컴포넌트
└── public/                # 정적 파일
```

## 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ Framer Motion 애니메이션
- ✅ 정적 사이트 생성 (SSG)
- ✅ 재사용 가능한 컴포넌트 구조
- ✅ TypeScript 타입 안정성

## 커스터마이징

### 색상 변경

`tailwind.config.ts`에서 `primary` 색상을 수정하세요.

### 콘텐츠 수정

각 섹션 컴포넌트의 데이터를 수정하여 콘텐츠를 변경할 수 있습니다.

## 라이선스

Copyright (C) GNA. ALL RIGHTS RESERVED.

