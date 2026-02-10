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
        "Infor ERP LN에서 직접 처리하기 어려운 전표·승인 업무를 보완하기 위해 구축한 연동 웹 시스템",
        "세금계산서·카드·은행 데이터를 외부 API로 수집하고, PioSync에서 입력·검토·권한·결재/승인까지 처리",
        "최종완결 데이터만 ERP로 전달하는 구조로 업무 단계를 분리해 운영 효율과 검증 가능성 강화",
        "최대 10만 행 엑셀 업로드 시나리오를 기준으로 검증/진행률/상태 피드백 UI 구현",
        "사용자-Role-권한 3열 매핑 관리와 주 1~2회 배포 루틴으로 운영 반영 속도/안정성 확보",
      ],
      background:
        "기존 ERP 환경은 한국 실무 기준에서 전표 입력/검토/승인 흐름이 분산되어 있어 화면 이동이 많고, 업무 상태를 직관적으로 파악하기 어려웠습니다. 또한 세금계산서·카드·은행 데이터 연동이 기본 제공되지 않아 별도 처리와 수작업이 반복되는 문제가 있었습니다. ERP를 직접 대체하기보다 ERP 앞단에 업무 허브를 두는 방식이 현실적이라 판단했고, 외부 API 수집-전표 처리-내부 검증-ERP 최종반영으로 업무 단계를 분리하는 구조를 설계했습니다.",
      meaning:
        "프론트엔드 전담으로 핵심 도메인 화면을 직접 설계/구현하며, 단순 UI 개발이 아니라 업무 흐름 자체를 화면 구조로 풀어내는 경험을 했습니다. API 연동 이슈를 백엔드와 함께 추적하면서 요청/응답 검증 기준과 장애 대응 순서를 정리했고, 운영 피드백을 주기 배포에 반영하며 기능을 안정적으로 확장하는 방식을 체득했습니다.",
      features: [
        "전표 입력/검토 UI (헤더-라인 분리, 스플릿 뷰, 컬럼 리사이징)",
        "다중 파일 업로드 + SSE 기반 실시간 진행률/상태 표시",
        "사용자-Role-권한 3열 매핑 관리 및 적용 상태 시각화",
        "거래처·품목·일자 기준 집계/조회 화면",
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
        "실무 경험과 프로젝트를 채용 담당자가 짧은 시간 안에 파악할 수 있도록 설계한 포트폴리오 웹사이트",
        "기존 포트폴리오 자료를 웹 문서 구조로 재정리해 핵심 정보의 탐색 흐름을 개선",
        "프로젝트별 README/이미지 모달, 페이지네이션, 드래그 전환 등 탐색 중심 인터랙션 구현",
        "주요 기능: 자기소개, 인적 사항, 기술 스택, 링크 아카이빙, 프로젝트/경력 정리",
      ],
      background:
        "Notion/PDF 형태도 검토했지만, 웹 개발자로서 가장 설득력 있게 역량을 전달하는 방식은 직접 구현한 웹 포트폴리오라고 판단했습니다. 단순 나열보다 읽는 순서와 정보 밀도를 직접 설계해, 채용 담당자가 필요한 정보를 빠르게 확인할 수 있는 구조를 목표로 개발했습니다.",
      meaning:
        "포트폴리오 특성상 시각적 완성도보다 정보 전달력과 스캔 속도가 중요하다고 보고, 카드-모달 구조와 섹션 탐색 흐름을 반복적으로 개선했습니다. 구현 과정에서 모달 상태 관리, 이미지 슬라이드 전환, 반응형 레이아웃, GitHub Pages 배포 자동화를 직접 다루며 UI 구현 역량뿐 아니라 운영/유지보수 관점도 함께 강화했습니다.",
      features: [
        "섹션 기반 내비게이션과 스크롤 진입 애니메이션",
        "프로젝트 카드 요약 + README 상세 모달 분리 구조",
        "PioSync 39장 이미지 모달(페이지네이션/드래그 전환/원본 확인)",
        "모바일/데스크톱 반응형 레이아웃과 접근성 고려",
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
