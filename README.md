# Atomic Design Example

Atomic Design 패턴을 적용한 React 컴포넌트 예제 프로젝트입니다.

## Atomic Design 구조

이 프로젝트는 Atomic Design의 5단계 구조를 따릅니다:

- **Atoms**: 기본적인 UI 요소 (버튼, 텍스트, 아바타 등)
- **Molecules**: Atoms의 조합 (검색바, 사용자 정보 등)
- **Organisms**: Molecules의 조합 (헤더, 사용자 카드 등)
- **Templates**: 페이지 레이아웃
- **Pages**: 실제 구현된 페이지

## 컴포넌트 구조

```
src/
├── components/
│   ├── atoms/
│   │   ├── Avatar.tsx
│   │   ├── Button.tsx
│   │   └── Text.tsx
│   ├── molecules/
│   │   ├── SearchBar.tsx
│   │   └── UserInfo.tsx
│   └── organisms/
│       ├── Header.tsx
│       └── UserCard.tsx
└── app/
    └── examples/
        └── page.tsx
```

## 기술 스택

- Next.js 15.2.4
- React 19
- TypeScript
- Tailwind CSS

## 시작하기

1. 저장소 클론
```bash
git clone https://github.com/lhg1006/atomic-design-example.git
```

2. 의존성 설치
```bash
npm install
# or
yarn install
```

3. 개발 서버 실행
```bash
npm run dev
# or
yarn dev
```

4. 브라우저에서 확인
```
http://localhost:3000/examples
```

## 컴포넌트 예시

### Atoms
- **Button**: 기본 버튼 컴포넌트
- **Avatar**: 사용자 프로필 이미지 컴포넌트
- **Text**: 텍스트 표시 컴포넌트

### Molecules
- **SearchBar**: 검색 기능을 제공하는 컴포넌트
- **UserInfo**: 사용자 정보를 표시하는 컴포넌트

### Organisms
- **Header**: 상단 네비게이션 바와 검색 기능을 포함한 헤더 컴포넌트
- **UserCard**: 사용자 정보와 메시지 기능을 포함한 카드 컴포넌트

## 라이선스

MIT License
