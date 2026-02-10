const buildImageList = (dir, count, label, ext = "png") =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0")
    return {
      id: number,
      src: `${dir}/${number}.${ext}`,
      alt: `${label} 캡쳐 ${index + 1}`,
    }
  })

const assetBase = import.meta.env.BASE_URL || "/"
const withBase = (path) => `${assetBase}${path.replace(/^\/+/, "")}`

export const profileItems = [
  { label: "이름", value: "전현우" },
  { label: "생년월일", value: "1996.04.10" },
  { label: "위치", value: "서울특별시 서대문구" },
  { label: "이메일", value: "gusdntkd0410@gmail.com" },
  { label: "연락처", value: "010-5056-4577" },
  { label: "학력", value: "Shanghai Jiao Tong Univ. (중퇴)" },
]

export const skillGroups = [
  {
    title: "Languages",
    tags: ["JavaScript", "Java", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    tags: ["React", "Vite", "React Router", "Axios"],
  },
  {
    title: "Backend",
    tags: ["Spring Boot", "JPA", "Swagger"],
  },
  {
    title: "Database",
    tags: ["PostgreSQL", "Oracle", "MSSQL"],
  },
  {
    title: "DevOps",
    tags: ["AWS EC2", "S3", "CloudFront"],
  },
  {
    title: "Tools",
    tags: ["Git", "GitHub", "VS Code", "IntelliJ"],
  },
]

export const projects = [
  {
    id: "piosync",
    name: "PioSync",
    period: "2025.09 ~ 2026.03",
    team: "2인 실무 프로젝트",
    category: "ERP Integration Platform",
    shortSummary:
      "ERP 연동 업무 웹. 전표/권한/업로드 흐름을 통합하고 프론트를 주도 구현했습니다.",
    stack: ["React", "Spring Boot", "PostgreSQL", "AWS"],
    contribution: "Frontend 100% / Backend 일부",
    deploymentUrl: "사내 시스템 (외부 비공개)",
    readme: {
      summary: [
        "전표 입력·검토·권한·결재/승인 흐름을 연계된 화면 구조로 설계한 ERP 연동 서비스",
        "엑셀형 입력, 대량 처리, 업로드 진행률 등 실제 병목 구간 중심으로 UI/UX 개선",
        "요구사항 변경에 대응하도록 상태 모델 분리와 배포 루틴 표준화로 안정성 강화",
      ],
      background:
        "기존 운영 방식은 수기 입력과 다중 검토 과정이 길어 반복 작업이 많고, 권한/첨부/결재 흐름에서 사용자 피로도가 높았습니다. 실제 업무 담당자의 요청을 기준으로 입력-검토-반영 플로우를 재설계하고, 화면에서 즉시 현재 상태를 파악할 수 있도록 구조를 단순화하는 것을 목표로 개발했습니다.",
      meaning:
        "프론트엔드 전담으로 핵심 도메인 화면을 직접 설계/구현하면서, 운영 관점의 문제 정의와 개선 우선순위 설정까지 경험했습니다. 또한 API 연동 이슈를 백엔드와 함께 추적하며 요청/응답 검증 루틴을 표준화했고, 주 1~2회 배포 사이클에서 안정적으로 기능을 확장하는 방법을 체득했습니다.",
      features: [
        "엑셀형 전표 입력/검토 UI (헤더-라인 분리, 스플릿 뷰, 컬럼 리사이징)",
        "다중 파일 업로드 + SSE 기반 진행률/상태 표시",
        "사용자-Role-권한 3열 매핑 관리 및 적용 상태 시각화",
        "대량 입력/검색 모달과 일괄 처리 UX",
        "Swagger 명세 + request/response 검증 기반 API 연동 루틴",
      ],
      members: [
        "전현우 (Frontend): UI 구조 설계, 핵심 화면 구현, 운영 개선",
        "사내 Backend 개발자 (Backend): API/DB 및 서버 로직 구현",
      ],
      setup: [
        "npm install",
        "npm run dev",
        "(백엔드) Gradle 실행 및 API 서버 연결",
      ],
    },
    images: buildImageList(withBase("captures/piosync"), 39, "PioSync", "webp"),
  },
  {
    id: "portfolio",
    name: "Web Portfolio",
    period: "2026.02",
    team: "1인 개인 프로젝트",
    category: "Personal Branding Site",
    shortSummary:
      "실무 경험을 채용 관점으로 요약한 반응형 포트폴리오 사이트입니다.",
    stack: ["React", "Vite", "CSS", "GitHub Pages"],
    contribution: "Planning / Design / Development / Deploy 100%",
    deploymentUrl: "https://wjsgusdn12.github.io/portfolio/",
    githubUrl: "https://github.com/wjsgusdn12/portfolio",
    readme: {
      summary: [
        "실무 프로젝트 경험을 빠르게 검증 가능한 정보 구조로 재편한 포트폴리오 웹",
        "채용 담당자가 짧은 시간 안에 핵심 역량을 파악할 수 있도록 섹션/카드 구조 최적화",
        "프로젝트별 README/이미지 모달로 상세 맥락까지 탐색 가능한 인터랙션 설계",
      ],
      background:
        "기존 포트폴리오는 정보가 분산되어 있고 프로젝트 맥락 전달력이 약해, 실제 기여 범위와 문제 해결 경험이 충분히 드러나지 않았습니다. 그래서 단순 소개 페이지가 아니라 '읽는 문서 + 보는 데모'의 중간 형태를 목표로, 핵심 정보 우선순위와 탐색 흐름을 다시 설계했습니다.",
      meaning:
        "이 프로젝트를 통해 단순한 스타일링을 넘어 정보 아키텍처, 인터랙션 우선순위, 반응형 가독성까지 포함한 UI/UX 설계 역량을 강화했습니다. 또한 GitHub Pages 기반 배포 파이프라인을 유지하며 빠르게 수정-검증-반영하는 운영 루틴을 정착시켰습니다.",
      features: [
        "섹션 기반 내비게이션 + 스크롤 진입 애니메이션",
        "프로젝트 카드형 요약 + README 상세 모달",
        "PioSync 전용 39장 이미지 모달 확장 구조",
        "모바일/데스크톱 반응형 레이아웃 및 접근성 고려",
      ],
      members: ["전현우 (Solo): 기획, 디자인, 개발, 배포 전 과정 수행"],
      setup: ["npm install", "npm run dev", "npm run build"],
    },
    images: [],
  },
]

export const getProjectStartValue = (period) => {
  const matched = period.match(/(\d{4})\.(\d{2})/)
  if (!matched) return 0
  return Number(`${matched[1]}${matched[2]}`)
}
