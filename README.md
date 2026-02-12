# 전현우 포트폴리오

React + Vite 기반 개인 포트폴리오 웹사이트입니다.  
실무 프로젝트 경험을 채용 관점으로 구조화해 빠르게 검토할 수 있도록 구성했습니다.

## 배포 URL
- https://wjsgusdn12.github.io/portfolio/

## 기술 스택
- React 19
- Vite 7
- Vanilla CSS
- GitHub Pages
- GitHub Actions (CI/CD)

## 주요 기능
- 섹션 기반 싱글 페이지 포트폴리오
- 프로젝트 카드 요약 + README 상세 모달
- 이미지 갤러리 모달
  - 페이지네이션
  - 좌/우 전환
- 반응형 UI (Desktop / Mobile)

## 프로젝트 구조
```text
src/
  components/
    modals/
      ImageModal.jsx
      ReadmeModal.jsx
    icons.jsx
    ProjectCard.jsx
  data/
    portfolioData.js
  App.jsx
  index.css
tools/
  check-captures.mjs
  optimize-captures.mjs
  clean-png-captures.mjs
```

## 로컬 실행
```bash
npm install
npm run dev
```

## 빌드/검증
```bash
npm run lint
npm run check:captures
npm run build
```

## 이미지 자산 관리
- 갤러리 캡쳐 경로: `public/captures/piosync`
- 최적화 실행:
```bash
npm run optimize:captures
```
- PNG 정리 실행:
```bash
npm run clean:captures:png
```

## CI/CD
- `main` 브랜치 push 시 GitHub Actions가 자동 실행됩니다.
- 빌드 결과(`docs`)를 GitHub Pages에 배포합니다.
