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
  { label: "GitHub", value: "github.com/wjsgusdn12" },
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
      "외국계 ERP의 사용성·연동 한계를 보완하기 위해, 국세청·카드·은행 데이터를 통합 처리하고 전표·승인 업무 결과만 Infor ERP LN에 최종 반영하는 업무 허브를 구축했습니다.",
    cardSummary: [
      "외국계 ERP 직접 사용 부담을 줄이는 한국 실무형 업무 허브",
      "국세청·카드·은행 연동 데이터를 수집·정제해 전표 처리에 연결",
      "PioSync에서 입력·검토·승인을 수행하고 ERP는 최종완결만 반영",
      "일괄삽입/대용량 업로드 최적화로 반복 업무 처리 시간을 단축",
    ],
    stack: ["React", "Spring Boot", "PostgreSQL", "AWS"],
    contribution: "Frontend 100% / Backend 일부",
    deploymentUrl: "사내 시스템 (외부 비공개)",
    readme: {
      summary: [
        "외국계 ERP 직접 사용으로 발생한 입력 복잡도·승인 지연·운영 부담을 줄이기 위해 구축한 전표·승인 연동 시스템",
        "국세청·카드·은행 데이터를 외부 API로 수집해 PioSync에서 입력·검토·승인까지 처리하고, ERP에는 최종완결 데이터만 반영",
        "ERP 커스터마이징 의존과 라이선스 확장 부담을 낮추면서, 한국 실무 기준의 업무 흐름을 웹 화면에서 일관되게 제공",
      ],
      performance: [
        "전표 1건 처리 시간: ERP 2~3분 → PioSync 1분 내외",
        "반복 전표 일괄삽입 처리: 10건당 약 1초 수준",
        "판매/정산 엑셀 업로드 성능: E2E 기준 3,000행당 약 1초 수준",
        "측정 기준: 업로드 → 파싱/검증 → DB 저장 → 완료 응답",
      ],
      highlights: [
        // 1페이지 사진 (id: 01)
        {
          id: "01",
          caption:
            "로그인 화면: Infor ERP LN 사원번호 기반 로그인에서 초기 비밀번호(1234) 사용 시 비밀번호 변경으로 강제 전환합니다. ERP 등록 이메일 인증과 비밀번호 복잡도 검증을 통과한 경우에만 변경을 허용해 초기 계정 설정 오류를 줄였습니다.",
        },
        // 2페이지 사진 (id: 05)
        {
          id: "05",
          caption:
            "매입 전자세금계산서 관리 화면: 현업 사용자 요구(수집·매칭·전환 누락 방지)를 반영해 매일 새벽 2시 퀵허브 API 수집과 사업자번호 기반 ERP 거래처 자동 매칭을 구현했습니다. 미매칭 건은 거래처 등록·사용자 할당 완료 후에만 전표 전환되도록 제어하고, 전표 제외·담당자 이관으로 오배정과 누락 리스크를 낮췄습니다.",
        },
        // 3페이지 사진 (id: 11)
        {
          id: "11",
          caption:
            "매입전표 입력 화면: 헤더/라인 구조에서 필수값 검증 상태를 단계별로 표시해 제출 가능 여부를 즉시 판단할 수 있습니다. 헤더 값 자동 반영과 단축키를 적용해 입력 동선을 줄였고, 전표 1건 처리 시간을 ERP 2~3분에서 약 1분 내외로 단축했습니다.",
        },
        // 4페이지 사진 (id: 12)
        {
          id: "12",
          caption:
            "일괄삽입 모달 화면: 사용자 요구(반복 입력 시간 단축)를 반영해 조건검색 기반 N건 선택, 합계금액/공급가액/세액 즉시 확인 기능을 구현했습니다. 빈값 요청 차단과 리스트 조회·단축키를 적용해 입력 오류를 줄였고, 10행 기준 삽입→응답→리렌더링을 약 1초 수준으로 처리했습니다.",
        },
        // 5페이지 사진 (id: 24)
        {
          id: "24",
          caption:
            "법인카드 전표입력 화면: 카드사/카드번호/연월 조건으로 전표화 대상 데이터를 불러오고, 엑셀 내보내기·불러오기와 서브라인 분기를 지원합니다. 일괄삽입과 함께 카드 전표를 배치 처리 중심으로 전환해 반복 입력 부담을 낮췄습니다.",
        },
        // 6페이지 사진 (id: 27)
        {
          id: "27",
          caption:
            "재무팀 검토 화면: 작성 완료 전표를 최종 검토·확정하고, 오입력 항목은 검토 단계에서 즉시 수정할 수 있습니다. 오류 건은 반려사유 필수로 반려해 작성자 이메일로 자동 통지하고, 반려 전표 되돌리기로 제출 직전 상태에서 재작성을 시작하도록 설계했습니다.",
        },
        // 7페이지 사진 (id: 33)
        {
          id: "33",
          caption:
            "통합전표조회 화면: 재무팀 사용자 요구(누락 전표 가시성 강화)를 반영해 미처리/처리완료/검토누락/결재누락 등 전체 전표 상태를 한 화면에서 통합 조회하도록 구성했습니다. 상태·처리단계 분기 조회로 누락 전표와 병목 구간을 빠르게 추적해 결재 흐름 운영 대응 속도를 높였습니다.",
        },
        // 8페이지 사진 (id: 34)
        {
          id: "34",
          caption:
            "연동로그 이력 화면: 승인 후 ERP 전송 결과와 실패 사유를 사용자 화면에서 즉시 확인합니다. 실패 전표 재전송과 성공 후 재전송 차단을 제공해 중복 전송을 방지하고, DB 직접 조회 없이 연동 이슈 대응 시간을 줄였습니다.",
        },
      ],
      background:
        "기존 외국계 ERP는 전표 입력·검토·승인 절차가 여러 화면에 분산돼 상태 추적이 어렵고, 한국 세무 환경에 필요한 국세청·카드·은행 연동이 기본 제공되지 않아 수작업과 중복 입력이 반복됐습니다. 단순 입력·승인 사용자까지 ERP 계정이 필요해 라이선스 비용이 증가했고, 기능 확장 시 벤더 프레임워크/유료 지원 의존도가 높아 운영 유연성이 낮았습니다. 이에 ERP를 대체하기보다 ERP 앞단에 업무 허브를 두고, 실무 처리와 연동을 분리하는 구조를 선택했습니다.",
      meaning:
        "프론트엔드 전담으로 핵심 업무 화면의 정보 구조·입력 UX·상태 가시성을 설계하고, 사용자 요구사항 기반 기능(일괄삽입, 통합조회, 검토/반려 흐름)을 주도적으로 구현했습니다. 헤더/라인 입력, 유효성 검증, 다건 처리 UI를 고도화해 입력 오류와 재작업을 줄였고, 전표 1건 처리 시간(ERP 2~3분 → 약 1분)과 일괄삽입 성능(10건당 약 1초), 업로드 처리(3,000행당 약 1초) 개선에 기여했습니다. 운영 이슈는 백엔드와 함께 원인 추적 후 배포에 반영해 기능 확장과 안정성을 지속적으로 관리했습니다.",
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
        "프로젝트별 README/이미지 모달과 페이지네이션 중심 인터랙션을 구현",
        "주요 기능: 자기소개, 인적 사항, 기술 스택, 프로젝트/경력 정리",
      ],
      background:
        "Notion/PDF 형태도 검토했지만, 웹 개발자로서 가장 설득력 있게 역량을 전달하는 방식은 직접 구현한 웹 포트폴리오라고 판단했습니다. 단순 나열보다 읽는 순서와 정보 밀도를 직접 설계해, 채용 담당자가 필요한 정보를 빠르게 확인할 수 있는 구조를 목표로 개발했습니다.",
      meaning:
        "포트폴리오 특성상 시각적 완성도보다 정보 전달력과 스캔 속도가 중요하다고 보고, 카드-모달 구조와 섹션 탐색 흐름을 반복적으로 개선했습니다. 구현 과정에서 모달 상태 관리, 이미지 슬라이드 전환, 반응형 레이아웃, GitHub Pages 배포 자동화를 직접 다루며 UI 구현 역량뿐 아니라 운영/유지보수 관점도 함께 강화했습니다.",
      members: ["전현우 (Solo): 기획, 디자인, 개발, 배포 전 과정 수행"],
    },
    images: [],
  },
]

export const getProjectStartValue = (period) => {
  const matched = period.match(/(\d{4})\.(\d{2})/)
  if (!matched) return 0
  return Number(`${matched[1]}${matched[2]}`)
}
