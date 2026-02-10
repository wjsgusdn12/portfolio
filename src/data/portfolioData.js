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
    name: "PioSync (React + Spring Boot)",
    period: "2025.09 ~ 2026.03",
    team: "2인 실무 프로젝트",
    category: "ERP 연동 웹 개발 및 유지보수 / 운영",
    shortSummary:
      "외부 API로 세금계산서/카드 데이터를 수집하고, PioSync에서 전표 처리 후 최종완결만 Infor ERP LN으로 전달하는 구조를 구현했습니다.",
    cardSummary: [
      "Infor ERP LN 전표 업무를 보완한 연동 웹 시스템",
      "세금계산서·카드·은행 데이터를 외부 API로 수집",
      "PioSync에서 입력·검토·결재/승인 후 ERP 최종반영",
      "최대 10만 행 업로드 기준 검증·진행률 UI로 운영 안정화",
    ],
    stack: ["React", "Spring Boot", "PostgreSQL", "AWS"],
    contribution: "Frontend 100% / Backend 일부",
    deploymentUrl: "사내 시스템 (외부 비공개)",
    readme: {
      summary: [
        "Infor ERP LN에서 직접 처리하기 어려운 전표 업무를 보완하기 위한 연동 웹 서비스",
        "외부 API로 세금계산서·카드 데이터를 수집하고, PioSync에서 전표 입력·검토·권한·결재/승인 처리",
        "최종완결 단계만 ERP로 전달하는 분리 구조로 운영 효율과 검증 가능성 강화",
        "최대 10만 행 엑셀 업로드 기준으로 검증, 진행률, 상태 피드백 UI를 구현",
        "사용자-Role-권한 3열 매핑 관리 화면과 주 1~2회 배포 루틴으로 운영 반영 안정화",
      ],
      background:
        "기존 ERP 환경에서는 전표 처리에 필요한 세부 입력/검토 플로우를 유연하게 운영하기 어려웠고, 외부 정산 데이터(세금계산서·카드)와의 연결도 번거로웠습니다. 이를 보완하기 위해 외부 API 수집-전표 처리-PioSync 내부 검증-ERP 최종완결 전달로 업무 단계를 분리해 운영 흐름을 재설계했습니다.",
      meaning:
        "프론트엔드 전담으로 핵심 도메인 화면을 직접 설계/구현하며, ERP 연동 제약을 고려한 업무 분리 구조를 제품 화면에 녹여냈습니다. API 연동 이슈를 백엔드와 함께 추적하면서 요청/응답 검증 기준을 맞췄고, 배포 사이클 안에서 기능을 점진적으로 확장하는 방식을 익혔습니다.",
      features: [
        "전표 입력/검토 UI (헤더-라인 분리, 스플릿 뷰, 컬럼 리사이징)",
        "다중 파일 업로드 + SSE 기반 진행률/상태 표시",
        "사용자-Role-권한 3열 매핑 관리 및 적용 상태 시각화",
        "거래처·품목·일자 기준 합계 집계 화면",
        "요청/응답 검증 기반 API 연동 루틴 표준화",
      ],
      members: [
        "전현우 (Frontend): UI 구조 설계, 핵심 화면 구현, 운영 흐름 개선",
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
    name: "포트폴리오 웹사이트 (React + Vite)",
    period: "2026.02",
    team: "1인 개인 프로젝트",
    category: "포트폴리오 웹사이트",
    shortSummary:
      "실무 경험을 채용 관점으로 요약한 반응형 포트폴리오 사이트입니다.",
    cardSummary: [
      "실무 경험을 채용 관점으로 빠르게 검토 가능한 정보 구조",
      "섹션·카드 중심 레이아웃으로 핵심 정보 스캔 속도 개선",
      "README·이미지 모달로 프로젝트 상세 맥락까지 탐색 가능",
      "반응형 UI와 GitHub Pages 자동 배포로 운영 효율 확보",
    ],
    stack: ["React", "Vite", "CSS", "GitHub Pages"],
    contribution: "Planning / Design / Development / Deploy 100%",
    deploymentUrl: "https://wjsgusdn12.github.io/portfolio/",
    githubUrl: "https://github.com/wjsgusdn12/portfolio",
    readme: {
      summary: [
        "포트폴리오 웹사이트",
        "실무 프로젝트 경험을 채용 관점에서 빠르게 검토할 수 있도록 직접 설계/개발",
        "핵심 정보 중심의 섹션 구조와 프로젝트별 README/이미지 모달 제공",
        "주요 기능: 자기소개, 인적 사항, 기술 스택, 링크 아카이빙, 프로젝트/경력 정리",
      ],
      background:
        "Notion 또는 PDF 형태도 검토했지만, 웹 개발자로서 저를 가장 잘 보여줄 수 있는 방식은 직접 구현한 웹 포트폴리오라고 판단했습니다. 원하는 UI/UX를 직접 구성하고, 읽는 흐름과 탐색 동선을 스스로 설계하는 것을 목표로 개발했습니다.",
      meaning:
        "포트폴리오 특성상 가독성과 정보 전달력이 가장 중요하다고 보고, 레퍼런스 분석을 바탕으로 UI/UX를 직접 설계했습니다. 구현 과정에서는 모달, 페이지네이션, 드래그 전환, 반응형 레이아웃을 라이브 서비스 관점으로 다듬으며 인터랙션 설계 역량과 운영 관점을 함께 강화했습니다.",
      features: [
        "섹션 기반 내비게이션 + 스크롤 진입 애니메이션",
        "프로젝트 카드형 요약 + README 상세 모달",
        "PioSync 전용 39장 이미지 모달 확장 구조",
        "모바일/데스크톱 반응형 레이아웃 및 접근성 고려",
      ],
      members: ["전현우 (Solo): 기획, 디자인, 개발, 배포 전 과정 수행"],
      setup: ["npm install", "npm run dev"],
    },
    images: [],
  },
]

export const getProjectStartValue = (period) => {
  const matched = period.match(/(\d{4})\.(\d{2})/)
  if (!matched) return 0
  return Number(`${matched[1]}${matched[2]}`)
}
