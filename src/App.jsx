import React, { useEffect } from "react"

const profileItems = [
  { label: "이름", value: "전현우" },
  { label: "생년월일", value: "1996.04.10" },
  { label: "위치", value: "서울특별시 서대문구" },
  { label: "이메일", value: "gusdntkd2@naver.com" },
  { label: "연락처", value: "010-5056-4577" },
  { label: "학력", value: "Shanghai Jiao Tong Univ. (중퇴)" },
]

const skillGroups = [
  {
    title: "Frontend",
    tags: ["React", "JavaScript", "HTML/CSS", "React Router", "Axios"],
  },
  {
    title: "Backend",
    tags: ["Spring Boot", "Java", "JPA", "Gradle", "YAML"],
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
    tags: ["Git", "GitHub", "VS Code", "IntelliJ", "Swagger"],
  },
]

const projectFeatures = [
  "엑셀형 전표 입력/검토 UI (헤더·라인 분리, 스플릿 뷰, 컬럼 리사이징)",
  "다중 파일 업로드 + SSE 진행률/ETA 표시",
  "사용자-Role-권한 3열 매핑 관리 UI",
  "대량 입력/검색 모달 및 일괄 처리 UX",
  "판매·정산 엑셀 업로드 풀스택 구현",
]

const achievements = [
  "전표/결재/권한/첨부 등 핵심 업무 화면을 단독 설계 및 구현",
  "주 1~2회 배포 사이클에서 기능 개선 및 운영 반영 경험",
  "업무 부서 요청을 반영한 UI/UX 개선으로 반복 입력 작업 시간 단축",
]

const troubleshooting = [
  {
    title: "ERP 연동 이슈의 이중 원인 추적",
    body:
      "웹 로그만으로 해결되지 않는 케이스에서 ERP 설정/데이터 조건을 분리해 검증했고, 테스트 케이스를 재구성해 누락 설정을 찾아 수정했습니다.",
  },
  {
    title: "대량 입력 업무의 반복 작업 최소화",
    body:
      "필터 조회 -> 대상 선택 -> 벌크 입력/저장 흐름을 설계해 대량 전표 처리 시간을 줄였고, 입력 실수를 줄이기 위한 UI 가이드를 추가했습니다.",
  },
  {
    title: "권한 매핑 화면의 인지부하 완화",
    body:
      "사용자/Role/권한 3열 구조에서 적용 상태와 선택 상태를 분리해 사용자가 현재 상태를 빠르게 판단할 수 있도록 개선했습니다.",
  },
]

const actionItems = [
  "신규 기능 구현 시 상태/이벤트 흐름을 먼저 정의하고 컴포넌트를 분리해 재사용성을 높입니다.",
  "API 연동 이슈는 요청/응답 로깅과 백엔드 코드 확인을 병행해 원인을 빠르게 좁힙니다.",
  "사용자 피드백을 UI 변경사항으로 연결할 때 영향 범위를 체크리스트로 관리합니다.",
]

const miniProjectSummary = [
  {
    title: "기획 의도",
    body: "실무 경험을 한 화면에 검증 가능하도록 구조화하고, 채용 담당자가 3분 내 핵심 역량을 파악할 수 있도록 설계했습니다.",
  },
  {
    title: "구현 범위",
    body: "반응형 레이아웃, 섹션 기반 내비게이션, 스크롤 진입 애니메이션, 프로젝트/성과/트러블슈팅 정보 아키텍처를 직접 구현했습니다.",
  },
  {
    title: "기술 선택 이유",
    body: "React + Vite로 빠른 개발/빌드 환경을 확보하고, CSS 변수 기반 테마로 시각 일관성과 유지보수성을 높였습니다.",
  },
  {
    title: "운영 방식",
    body: "GitHub Pages 배포 구조(`docs`)와 GitHub Actions 자동 배포 워크플로를 구성해 커밋 단위 배포 검증이 가능하도록 했습니다.",
  },
  {
    title: "개선 이력",
    body: "초기 정적 페이지에서 React 구조로 전환한 뒤, 정보 밀도/가독성/모바일 반응형/퍼포먼스를 단계적으로 개선했습니다.",
  },
]

function App() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal"))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 }
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            JEON HYUNWOO
          </a>
          <nav className="menu">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#archiving">Archiving</a>
            <a href="#projects">Projects</a>
            <a href="#career">Career</a>
            <a href="#hiring">Hiring</a>
          </nav>
          <a className="nav-cta" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-pattern" />
          <div className="hero-inner reveal is-visible">
            <p className="hero-kicker">PORTFOLIO</p>
            <h1 className="hero-title">전현우</h1>
            <h2 className="hero-subtitle">Frontend-focused Web Developer</h2>
            <p className="hero-desc">
              실무 프로젝트에서 React 프론트를 주도하고, Spring Boot 일부까지
              연결하며 화면-API-운영 흐름을 끝까지 완성해온 개발자입니다.
            </p>
            <div className="hero-chips">
              <span>React</span>
              <span>UI Architecture</span>
              <span>Spring Boot</span>
              <span>AWS Deploy</span>
            </div>
            <div className="hero-stats">
              <div>
                <strong>7개월</strong>
                <span>실무 경험</span>
              </div>
              <div>
                <strong>5+</strong>
                <span>핵심 도메인 화면</span>
              </div>
              <div>
                <strong>1~2회/주</strong>
                <span>배포 운영 사이클</span>
              </div>
            </div>
            <a className="hero-btn" href="#projects">
              프로젝트 보기
            </a>
          </div>
        </section>

        <section id="about" className="section reveal">
          <div className="section-head">
            <p className="section-eyebrow">Profile</p>
            <h3 className="section-title">ABOUT ME</h3>
          </div>
          <div className="about-grid">
            {profileItems.map((item) => (
              <div className="about-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section section-accent reveal">
          <div className="section-head">
            <p className="section-eyebrow">Tech</p>
            <h3 className="section-title">SKILLS</h3>
          </div>
          <div className="skills-card">
            {skillGroups.map((group) => (
              <div className="skill-row" key={group.title}>
                <div className="skill-title">{group.title}</div>
                <div className="tags">
                  {group.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="archiving" className="section reveal">
          <div className="section-head">
            <p className="section-eyebrow">Link</p>
            <h3 className="section-title">ARCHIVING</h3>
          </div>
          <div className="archive-grid">
            <a
              className="archive-card"
              href="https://github.com/wjsgusdn12"
              target="_blank"
              rel="noreferrer"
            >
              <strong>GitHub</strong>
              <span>github.com/wjsgusdn12</span>
              <em>프로젝트 코드, 커밋 이력, 브랜치 히스토리</em>
            </a>
            <div className="archive-card">
              <strong>Portfolio PDF</strong>
              <span>업데이트 예정</span>
              <em>PioSync 기능 흐름/설계/개선 포인트 정리본</em>
            </div>
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="section-head">
            <p className="section-eyebrow">Work</p>
            <h3 className="section-title">PROJECTS</h3>
          </div>
          <article className="project-card">
            <div className="project-top">
              <div>
                <p className="project-meta">PioSync | 2025.09 ~ 2026.03.31 예정</p>
                <h4 className="project-title">ERP 연동 웹 프로젝트</h4>
              </div>
              <span className="project-badge">실무 프로젝트</span>
            </div>
            <div className="feature-grid">
              {projectFeatures.map((feature) => (
                <div key={feature} className="feature-item">
                  {feature}
                </div>
              ))}
            </div>
            <div className="pill">React · Spring Boot · PostgreSQL · AWS</div>

            <div className="sub-grid">
              <div className="sub-panel">
                <h5>주요 성과</h5>
                <ul>
                  {achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="sub-panel">
                <h5>트러블슈팅</h5>
                <ul>
                  {troubleshooting.map((issue) => (
                    <li key={issue.title}>
                      <strong>{issue.title}</strong>
                      <p>{issue.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="mini-project-note">
            <h4>1인 미니프로젝트 관점 정리</h4>
            <div className="mini-project-grid">
              {miniProjectSummary.map((item) => (
                <article className="mini-project-item" key={item.title}>
                  <h5>{item.title}</h5>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="career" className="section reveal">
          <div className="section-head">
            <p className="section-eyebrow">Experience</p>
            <h3 className="section-title">CAREER</h3>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <h4>㈜피오솔루션</h4>
                <p>2025.07 ~ 2026.03.31 예정 (회사 폐업 예정)</p>
                <ul>
                  <li>React 프론트 전담, Spring Boot 일부 기능 개발 참여</li>
                  <li>전표/결재/권한/첨부 등 핵심 업무 화면 설계/구현</li>
                  <li>로컬 → Demo AWS → 운영 AWS 배포 사이클 운영</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="hiring" className="section reveal">
          <div className="section-head">
            <p className="section-eyebrow">Hiring Snapshot</p>
            <h3 className="section-title">WHY ME</h3>
          </div>
          <div className="hiring-card">
            <p>
              화면 구현에 그치지 않고 API 연동, 데이터 검증, 운영 배포까지
              연결해 결과를 만드는 개발자입니다. 실무에서 반복되는 입력 업무와
              권한 관리 같은 고난도 운영 화면을 직접 개선했고, 요구사항 변화가
              빠른 환경에서 우선순위를 조정하며 기능을 끝까지 완성했습니다.
            </p>
            <ul>
              {actionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <div className="contact-panel">
            <h3>CONTACT</h3>
            <p>프로젝트/채용 관련 문의는 아래로 연락 부탁드립니다.</p>
            <div className="contact-list">
              <div>gusdntkd2@naver.com</div>
              <div>010-5056-4577</div>
              <div>github.com/wjsgusdn12</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 Jeon Hyunwoo. All rights reserved.</footer>
    </div>
  )
}

export default App


