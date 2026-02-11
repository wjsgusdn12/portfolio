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
      "판매/정산 엑셀 대용량 업로드: E2E 기준 DB Insert 약 3,000 rows/s 수준",
    ],
    stack: ["React", "Spring Boot", "PostgreSQL", "AWS"],
    contribution: "Frontend 100% / Backend 일부",
    deploymentUrl: "사내 시스템 (외부 비공개)",
    readme: {
      summary: [
        "Infor ERP LN 직접 사용 부담을 줄이기 위해 구축한 전표·승인 연동 웹 시스템",
        "세금계산서·카드·은행 데이터를 외부 API로 수집하고, PioSync에서 입력·검토·결재/승인까지 처리",
        "최종완결 데이터만 ERP로 반영하는 분리 구조로 업무 흐름 단절과 중복 입력 문제를 완화",
        "전표 1건 처리 시간: ERP 2~3분 → PioSync 1분 내외, 반복 전표는 일괄삽입으로 10건당 1초 수준 처리",
        "판매/정산 엑셀 대용량 업로드: E2E 기준 DB Insert 약 3,000 rows/s 수준",
      ],
      highlights: [
        {
          id: "01",
          caption:
            "사내 운영 환경 기준 권한 기반 접근/메뉴 노출로 업무 진입 흐름을 단순화",
        },
        {
          id: "02",
          caption:
            "상태/기간/거래처 포함 전체 컬럼 통합 검색으로 전표 탐색 속도를 개선하고, 단계별 큐를 분리",
        },
        {
          id: "03",
          caption:
            "헤더-라인 분리 + 동시 편집 구조로 입력/수정 전환 비용을 감소",
        },
        {
          id: "04",
          caption:
            "반복 입력을 템플릿/일괄삽입으로 전환해 10건 단위 작업을 초 단위로 단축",
        },
        {
          id: "05",
          caption:
            "대량 업로드를 분리 처리하고 SSE로 진행률/상태를 제공해 대기·실패 스트레스를 감소",
        },
        {
          id: "06",
          caption:
            "제출→재무검토→결재요청 흐름을 강제하고, 대기함으로 누락/정체를 확인",
        },
        {
          id: "07",
          caption:
            "사용자-Role-권한 3열 매핑을 화면에서 관리해 권한 적용 상태를 시각화",
        },
        {
          id: "08",
          caption:
            "결재/연동 오류를 중앙화해 재현·원인분석·수정까지의 리드타임을 줄임",
        },
      ],
      performance: [
        "기준: E2E(업로드→파싱/필터링→검증→DB 저장→완료 응답)",
        "처리량: DB Insert row 기준 약 3,000 rows/s 수준",
        "파일 스펙: 30KB ~ 4,000KB, 원본 10~20 컬럼(판매처별 상이) / 저장 컬럼 약 10개",
      ],
      validationParsing: [
        "판매처별로 헤더/컬럼 구성이 달라 양식별 헤더 매핑 및 저장 대상 컬럼 필터링 처리",
        "Row 단위 정제: 빈 행 제거, row 길이 제한 적용",
        "Java 파서에서 인코딩/형식 분기 처리, 날짜/숫자/금액 등 타입 파싱 분기 처리",
        "중복 업로드 방지: 주문번호 기준 또는 복합 Unique Key로 중복 제거",
        "미지원/허용되지 않는 판매처 양식은 스킵 처리(운영 안정성 우선)",
        "음수 금액은 업무상 필요 케이스로 허용",
      ],
      background:
        "기존 ERP 환경은 한국 실무 기준에서 전표 입력/검토/승인 절차가 여러 화면으로 분산되어 있어 처리 단계와 상태를 한눈에 파악하기 어려웠습니다. 또한 세금계산서·카드·은행 데이터 연동이 기본 제공되지 않아 별도 처리와 수작업이 반복됐고, 단순 입력/승인 사용자까지 ERP 계정이 필요한 운영 부담이 있었습니다. 이에 ERP를 직접 대체하기보다 ERP 앞단에 업무 허브를 두는 방식이 현실적이라고 판단해, 외부 API 수집-전표 처리-내부 검증-ERP 최종반영으로 업무 단계를 분리한 구조를 설계했습니다.",
      meaning:
        "프론트엔드 전담으로 핵심 도메인 화면을 직접 설계/구현하며, 단순 UI 제작이 아니라 실제 업무 흐름을 제품 화면으로 구조화하는 경험을 했습니다. 헤더/라인 입력 UX 재구성과 자체 유효성 검증으로 전표 1건 처리 시간을 ERP 2~3분 → PioSync 1분 내외로 줄였고, 반복 전표는 일괄삽입으로 10건당 1초 수준 처리했습니다. 또한 판매/정산 엑셀 대용량 업로드를 3000행당 1초 수준으로 처리했습니다. API 연동 이슈를 백엔드와 함께 추적해 요청/응답 검증 기준과 오류 처리 루틴을 정리했고, 운영 피드백을 주기 배포에 반영하면서 기능 확장과 안정성의 균형을 체득했습니다.",
      features: [
        "전표 입력/검토 UI (헤더-라인 분리, 스플릿 뷰, 컬럼 리사이징, 대량 입력 UX)",
        "반복 전표 다건 일괄삽입 기능",
        "다중 파일 업로드 + SSE 기반 실시간 진행률/상태 표시",
        "사용자-Role-권한 3열 매핑 관리 및 적용 상태 시각화",
        "전표 제출→재무팀 검토→결재 요청 강제 흐름 및 검토 필터링",
        "거래처·품목·일자 기준 집계/조회 + 요청/응답 검증 기반 연동 루틴 표준화",
        "결재 오류 모니터링 API/화면 기반 추적-원인분석-수정 운영",
      ],
      architecture: [
        "외부 연동 → 전표 처리 → 검증 → ERP 반영으로 단계 분리",
        "재무팀 검토 후 승인 흐름 강제",
        "대량 입력/업로드에 맞춘 UI·검증 구조",
        "운영 피드백 기반 주기 배포로 안정화",
      ],
      troubleshooting: [
        {
          title: "대량 업로드 지연/타임아웃",
          items: [
            "증상: 대용량 업로드 시 응답 지연과 실패가 간헐적으로 발생",
            "원인: 검증/저장 과정이 동기 처리로 묶여 병목 발생",
            "해결: 업로드 단위를 분리해 처리하고 진행률 피드백을 분리",
            "재발방지: 업로드 크기 기준과 모니터링 지표를 운영에 반영",
          ],
        },
        {
          title: "승인 누락/오류 추적 어려움",
          items: [
            "증상: 승인 단계가 분산되어 누락 여부를 즉시 확인하기 어려움",
            "원인: 상태가 화면/권한 단위로 분산되어 가시성이 낮음",
            "해결: 승인 대기함 + 오류 모니터링 화면으로 상태를 중앙화",
            "재발방지: 승인 상태 변경 로그와 필터 기준을 운영에 반영",
          ],
        },
      ],
      members: [
        "전현우 (Frontend): UI 구조 설계, 핵심 화면 구현, 운영 흐름 개선",
        "사내 Backend 개발자 (Backend): API/DB 및 서버 로직 구현",
      ],
      notice:
        "화면 내 데이터/텍스트는 포트폴리오 공개를 위해 샘플 데이터로 구성했습니다.",
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
