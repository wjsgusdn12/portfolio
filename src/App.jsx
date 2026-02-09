import React, { useEffect, useMemo, useRef, useState } from "react"

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
    tags: ["Spring Boot", "Java", "JPA", "Gradle", "YAML (.yml)"],
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

const buildImageList = (dir, count, label) =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0")
    return {
      id: number,
      src: `${dir}/${number}.png`,
      alt: `${label} 캡쳐 ${index + 1}`,
    }
  })

const assetBase = import.meta.env.BASE_URL || "/"
const withBase = (path) => `${assetBase}${path.replace(/^\/+/, "")}`

const projects = [
  {
    id: "piosync",
    name: "PioSync",
    period: "2025.09 ~ 2026.03",
    team: "2인 실무 프로젝트",
    category: "ERP Integration Platform",
    shortSummary:
      "ERP 연동 업무 웹. 전표/권한/업로드 중심 화면을 설계하고 프론트를 주도 구현했습니다.",
    stack: ["React", "Spring Boot", "PostgreSQL", "AWS"],
    contribution: "Frontend 100% / Backend 일부",
    deploymentUrl: "사내 시스템 (외부 비공개)",
    readme: {
      summary: [
        "실무 운영에서 반복되는 전표 입력/검토 흐름을 웹 화면으로 표준화한 ERP 연동 서비스",
        "엑셀형 입력, 대량 처리, 업로드 진행률 등 실제 업무 병목 구간을 중심으로 UI/UX 개선",
        "요구사항 변경이 잦은 환경에서 상태 구조를 분리해 유지보수성과 배포 안정성을 높임",
      ],
      background:
        "기존 운영 방식은 수기 입력과 다중 검토 과정이 길어 반복 작업이 많고, 권한/첨부/결재 흐름에서 사용자 피로도가 높았습니다. 실제 업무 담당자의 요청을 기준으로 입력-검토-반영 플로우를 재설계하고, 화면에서 즉시 현재 상태를 파악할 수 있도록 구조를 단순화하는 것을 목표로 개발했습니다.",
      meaning:
        "프론트엔드 전담으로 핵심 도메인 화면을 직접 설계/구현하면서, 단순 UI 개발을 넘어 운영 관점의 문제 정의와 개선 우선순위 설정까지 경험했습니다. 또한 API 연동 이슈를 백엔드와 함께 추적하며 요청/응답 검증 루틴을 표준화했고, 주 1~2회 배포 사이클에서 안정적으로 기능을 확장하는 방법을 체득했습니다.",
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
    images: buildImageList(withBase("captures/piosync"), 39, "PioSync"),
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

function App() {
  const [activeProjectId, setActiveProjectId] = useState(null)
  const [activeModal, setActiveModal] = useState(null)
  const [isModalClosing, setIsModalClosing] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [brokenImages, setBrokenImages] = useState({})
  const closeTimerRef = useRef(null)

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) || null,
    [activeProjectId]
  )

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal"))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          } else {
            entry.target.classList.remove("is-visible")
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [activeModal])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModals()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [activeModal, isModalClosing])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  const openReadmeModal = (project) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setActiveProjectId(project.id)
    setIsModalClosing(false)
    setActiveModal("readme")
  }

  const openImageModal = (project) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setActiveProjectId(project.id)
    setSelectedImageIndex(0)
    setIsModalClosing(false)
    setActiveModal("image")
  }

  const closeModals = () => {
    if (!activeModal || isModalClosing) return
    setIsModalClosing(true)
    closeTimerRef.current = setTimeout(() => {
      setActiveModal(null)
      setIsModalClosing(false)
      closeTimerRef.current = null
    }, 360)
  }

  const goPrevImage = () => {
    if (!activeProject) return
    setSelectedImageIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    )
  }

  const goNextImage = () => {
    if (!activeProject) return
    setSelectedImageIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    )
  }

  const markImageBroken = (src) => {
    setBrokenImages((prev) => ({ ...prev, [src]: true }))
  }

  const pageGroupSize = 10

  return (
    <div className="page">
      <div className="bg-scene" aria-hidden="true">
        <span className="bg-bubble bg-bubble-1" />
        <span className="bg-bubble bg-bubble-2" />
        <span className="bg-bubble bg-bubble-3" />
        <span className="bg-bubble bg-bubble-4" />
        <span className="bg-bubble bg-bubble-5" />
        <span className="bg-bubble bg-bubble-6" />
        <span className="bg-orb bg-orb-a" />
        <span className="bg-orb bg-orb-b" />
        <span className="bg-grid" />
      </div>

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
            <h2 className="hero-subtitle">Web Developer</h2>
            <p className="hero-desc">
              실무 프로젝트에서 React 프론트를 주도하고, 운영 반영까지 연결해
              화면-API-배포 흐름을 완성해온 개발자입니다.
            </p>
            <div className="hero-chips">
              <span>React</span>
              <span>UI Architecture</span>
              <span>Spring Boot</span>
              <span>AWS Deploy</span>
            </div>
            <div className="hero-actions">
              <a className="hero-btn" href="#projects">
                프로젝트 보기
              </a>
              <a className="hero-btn hero-btn-secondary" href="#contact">
                바로 연락하기
              </a>
            </div>
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
              <em>핵심 기능 흐름과 개선 이력 요약본</em>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-projects reveal">
          <div className="section-head">
            <p className="section-eyebrow">Work</p>
            <h3 className="section-title">PROJECTS</h3>
          </div>
          <div className="project-brief-list">
            {projects.map((project) => (
              <article className="project-brief" key={project.id}>
                <div className="project-brief-head">
                  <span className="project-pill">{project.name}</span>
                </div>
                <p className="project-date">
                  {project.period} ({project.team})
                </p>
                <hr className="project-divider" />
                <h4 className="project-headline">{project.category}</h4>
                <ul className="project-bullets">
                  {project.readme.summary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-linkline">{project.deploymentUrl}</div>
                <div className="project-tech-box">
                  {project.stack.join(", ")}
                </div>
                <div className="project-actions">
                  <button
                    className="project-btn"
                    type="button"
                    onClick={() => openReadmeModal(project)}
                  >
                    README
                  </button>
                  {project.images.length > 0 && (
                    <button
                      className="project-btn project-btn-ghost"
                      type="button"
                      onClick={() => openImageModal(project)}
                    >
                      이미지
                    </button>
                  )}
                </div>
              </article>
            ))}
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
                <p>2025.07 ~ 현재</p>
                <ul>
                  <li>React 프론트 전담, Spring Boot 일부 기능 개발 참여</li>
                  <li>전표/결재/권한/첨부 등 핵심 업무 화면 설계/구현</li>
                  <li>로컬 테스트 -&gt; Demo AWS -&gt; 운영 AWS 배포 사이클 운영</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact reveal">
          <div className="contact-panel">
            <h3>CONTACT</h3>
            <div className="contact-list">
              <div>gusdntkd2@naver.com</div>
              <div>010-5056-4577</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 Jeon Hyunwoo. All rights reserved.</footer>

      {activeModal === "readme" && activeProject && (
        <div
          className={`modal-overlay ${isModalClosing ? "is-closing" : ""}`}
          onClick={closeModals}
        >
          <div className="modal-sheet" onClick={(event) => event.stopPropagation()}>
            <div className="modal-head">
              <div>
                <p className="modal-kicker">README.md</p>
                <h4>{activeProject.name}</h4>
                <p className="modal-meta">
                  {activeProject.period} ({activeProject.team})
                </p>
              </div>
              <button className="modal-close" type="button" onClick={closeModals}>
                닫기
              </button>
            </div>
            <div className="modal-body">
              <div className="readme-block">
                <h5>Deployment URL</h5>
                <p>{activeProject.deploymentUrl}</p>
              </div>

              <div className="readme-block">
                <h5>Summary</h5>
                <ul className="modal-list">
                  {activeProject.readme.summary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="readme-block">
                <h5>Background</h5>
                <p>{activeProject.readme.background}</p>
              </div>

              <div className="readme-block">
                <h5>Meaning</h5>
                <p>{activeProject.readme.meaning}</p>
              </div>

              <div className="readme-block">
                <h5>Main Features</h5>
                <ul className="modal-list">
                  {activeProject.readme.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="readme-grid">
                <div className="readme-block">
                  <h5>Technology Stack(s)</h5>
                  <div className="modal-stack">
                    {activeProject.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className="readme-block">
                  <h5>Members</h5>
                  <ul className="modal-list">
                    {activeProject.readme.members.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="readme-block">
                <h5>Setup & Usage</h5>
                <pre className="setup-box">
{activeProject.readme.setup.map((item) => item).join("\n")}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === "image" && activeProject && (
        <div
          className={`modal-overlay ${isModalClosing ? "is-closing" : ""}`}
          onClick={closeModals}
        >
          <div
            className="modal-sheet modal-sheet-wide"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-head">
              <div>
                <p className="modal-kicker">IMAGE GALLERY</p>
                <h4>
                  {activeProject.name} ({activeProject.images.length}장)
                </h4>
              </div>
              <button className="modal-close" type="button" onClick={closeModals}>
                닫기
              </button>
            </div>
            <div className="modal-body">
              <div className="gallery-preview">
                {brokenImages[activeProject.images[selectedImageIndex].src] ? (
                  <div className="image-fallback">이미지를 추가하면 여기에 표시됩니다.</div>
                ) : (
                  <img
                    src={activeProject.images[selectedImageIndex].src}
                    alt={activeProject.images[selectedImageIndex].alt}
                    onClick={() =>
                      window.open(activeProject.images[selectedImageIndex].src, "_blank")
                    }
                    onError={() =>
                      markImageBroken(activeProject.images[selectedImageIndex].src)
                    }
                  />
                )}
              </div>
              <div className="gallery-controls">
                <button className="gallery-btn" type="button" onClick={goPrevImage}>
                  이전
                </button>
                <span>
                  {selectedImageIndex + 1} / {activeProject.images.length}
                </span>
                <button className="gallery-btn" type="button" onClick={goNextImage}>
                  다음
                </button>
              </div>

              {(() => {
                const total = activeProject.images.length
                const current = selectedImageIndex + 1
                const groupIndex = Math.floor((current - 1) / pageGroupSize)
                const start = groupIndex * pageGroupSize + 1
                const end = Math.min(start + pageGroupSize - 1, total)

                const goToPage = (page) => setSelectedImageIndex(page - 1)
                const goFirst = () => goToPage(1)
                const goLast = () => goToPage(total)
                const goPrevGroup = () => {
                  const prevStart = Math.max(1, start - pageGroupSize)
                  goToPage(prevStart)
                }
                const goNextGroup = () => {
                  const nextStart = Math.min(total, start + pageGroupSize)
                  goToPage(nextStart)
                }

                return (
                  <div className="page-controls">
                    <button className="page-btn" type="button" onClick={goFirst}>
                      {"<<"}
                    </button>
                    <button className="page-btn" type="button" onClick={goPrevGroup}>
                      {"<"}
                    </button>
                    <div className="page-numbers">
                      {Array.from({ length: end - start + 1 }, (_, idx) => {
                        const page = start + idx
                        const isActive = page === current
                        return (
                          <button
                            key={page}
                            type="button"
                            className={`page-number ${isActive ? "is-active" : ""}`}
                            onClick={() => goToPage(page)}
                          >
                            {page}
                          </button>
                        )
                      })}
                    </div>
                    <button className="page-btn" type="button" onClick={goNextGroup}>
                      {">"}
                    </button>
                    <button className="page-btn" type="button" onClick={goLast}>
                      {">>"}
                    </button>
                  </div>
                )
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
