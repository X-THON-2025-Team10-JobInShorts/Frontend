# Next.js(App Router) 템플릿

- 개인적으로 빠르게 시작하려고 만든 보일러플레이트
- Next.js(App Router) + React + TypeScript + Tailwind 기반 SPA/SSR 혼합 프로젝트용

## 종속성

![stacks](https://go-skill-icons.vercel.app/api/icons?i=react,nextjs,typescript,tailwindcss,pnpm,reactquery,axios,zustand)

```
- Next.js 16+ (App Router)
- tailwindcss 4.0
- pnpm
- @tanstack/react-query
- react
- typescript
- zod
- zustand
- axios
```

## 프로젝트 구조

```
src/
 ├─ app/              # Next.js App Router 페이지 & 레이아웃
 │   ├─ layout.tsx    # 전체 레이아웃
 │   ├─ page.tsx      # 홈 페이지
 │   └─ (routes)/     # URL 구조별 그룹 레이아웃 & 페이지
 ├─ apis/             # API 관련 코드 (아래 참고)
 ├─ components/       # 재사용 가능한 UI 컴포넌트
 ├─ constants/        # 전역 상수
 │   ├─ path.ts       # URL 라우팅 상수
 │   └─ query-keys.ts # React Query 쿼리 키 모음
 ├─ hooks/            # 커스텀 훅
 ├─ layouts/          # 페이지/섹션 레이아웃
 ├─ lib/              # 유틸리티 함수 모음
 ├─ stores/           # Zustand 전역 상태
 ├─ styles/           # 전역 스타일
 └─ types/            # 앱 전역 타입 정의
```

### apis/ 규칙

```
apis/
 ├─ auth/          # 도메인 단위 (ex. 인증)
 │  ├─ dto/        # API 요청/응답 스키마 (zod)
 │  ├─ queries/    # GET 요청
 │  └─ mutations/  # POST, PUT, DELETE 요청
 └─ instance.ts    # Axios 공통 인스턴스 (인증, 에러 핸들링, 재시도 로직 포함)
```

- 도메인 단위: `/auth`, `/user`, `/post` 처럼 서버 API 기준으로 폴더 분리
- **dto/**: 서버와 송수신하는 데이터의 타입/스키마 정의
- **queries/ vs mutations/**: React Query의 용도에 맞게 API 호출 분리
- **instance.ts**: 인증 헤더, 401 리프레시 로직 등 포함

## 시작

```
pnpm install
pnpm run dev
```

## 특징

- App Router 기반으로 레이아웃, 서버/클라이언트 컴포넌트 분리 용이
- React Query + Axios 조합으로 클라이언트에서 서버 상태 관리 간편
  - Next.js를 배우고 있어서 React Query의 사용은 우선 클라이언트에만 집중할 예정
- TailwindCSS 4.x + TypeScript 완전 통합
- Zustand로 전역 상태 관리
- 모듈 단위 폴더 구조로 유지보수 편리
